/**
 * MongoDB simple wrapper, Provide simple method in chinese to handle the mongodb.
 * author: YiDong Zhuo(snomiao@gmail.com)
 */

import mongodb, {
  Document,
  Filter,
  FilterOperations,
  IndexSpecification,
  MongoClient,
  Sort,
  UpdateFilter,
  UpdateOneModel,
} from "mongodb";
import PQueue from "p-queue";
export type Awaitable<T> = Promise<T> | T;
export * from "./diffDate";
export interface snoMongoKuRaw extends mongodb.Db {
  _client: mongodb.MongoClient;
}
export type snoMongoKu = snoMongoKuRaw & {
  [k: string]: ReturnType<typeof snoCollection<Document>>;
};
export default async function snoMongoKu<TSchemas extends Record<string, Document>>(uri: string) {
  const client = new MongoClient(uri);
  await client.connect();
  const dbAgent = Object.assign(client.db(), { _client: client, close: client.close });
  return new Proxy(dbAgent, {
    get: (t: any, p) => t[p] ?? snoCollection(t.collection(p.toString())),
  }) as snoMongoKu & { [k in keyof TSchemas]: ReturnType<typeof snoCollection<TSchemas[k]>> };
}
async function scanUpdate<TSchema extends Document = Document>(
  coll: mongodb.Collection<TSchema>,
  $match: mongodb.Filter<TSchema>,
  $project: any,
  $limit: number,
  $sort: mongodb.Sort,
  updateFn: (doc: any, index?: number) => Awaitable<void | mongodb.UpdateFilter<TSchema>>,
) {
  const cursor = coll.find($match, {
    projection: $project,
    limit: $limit,
    sort: $sort,
  });
  let index = 0;
  for await (const doc of cursor) {
    const updateFilter = await updateFn(doc, index++);
    if (updateFilter) {
      const idFilter = { _id: doc._id } as unknown as Filter<TSchema>;
      await coll.updateOne(idFilter, updateFilter);
    }
  }
}

export function patchMany<TSchema extends Document>(
  coll: mongodb.Collection<TSchema>,
  doc: TSchema[],
  index: mongodb.IndexSpecification,
  opts: mongodb.BulkWriteOptions,
) {
  return coll.bulkWrite(
    doc.map((补表: TSchema) => {
      // 补表索引检查
      const 索引键存在 = (键名: string) => Object.keys(补表).includes(键名);
      const 索引键全部存在 = Object.keys(index).every(索引键存在);
      if (!索引键全部存在) throw new Error("错误：补表对应索引键不完整");
      const filter = Object.fromEntries(Object.keys(index).map((键) => [键, 补表[键]]));
      const $set = Object.fromEntries(Object.entries(index).filter(([k, v]) => k !== undefined));
      const $unset = Object.fromEntries(Object.entries(index).filter(([k, v]) => k === undefined));
      return {
        updateOne: {
          filter,
          update: { $set, $unset },
          upsert: true,
        } as UpdateOneModel<TSchema>,
      };
    }),
    opts,
  );
}

export function snoCollection<TSchema>(coll: mongodb.Collection<TSchema>) {
  return Object.assign(coll, {
    // /** ⭐ */
    findToArray: (查询表: mongodb.Filter<TSchema> = {}, 选项?: mongodb.FindOptions<any>) =>
      coll.find(查询表, 选项).toArray(),
    /** ⭐ Upsert lines by index
     * set something to undefined to unset the key
     * @example
     * db.test.多补([{id: "1", a: undefined, b: 'asdf'}], {id: 1})
     * // is same as to db.test.upsert({id: "1"}, {$unset: {a: 1}, $set: 'asdf'})
     */
    patchMany: (
      表列: TSchema[],
      索引: IndexSpecification = { _id: 1 },
      选项?: mongodb.BulkWriteOptions,
    ) => patchMany<TSchema>(coll, 表列, 索引, 选项),
    /** ⭐ Upsert lines by index
     * set something to undefined to unset the key
     * @example
     * db.test.多补([{id: "1", a: undefined, b: 'asdf'}], {id: 1})
     * // is same as to db.test.upsert({id: "1"}, {$unset: {a: 1}, $set: 'asdf'})
     */
    多补: (
      表列: TSchema[],
      索引: IndexSpecification = { _id: 1 },
      选项?: mongodb.BulkWriteOptions,
    ) => patchMany<TSchema>(coll, 表列, 索引, 选项),
    多增改: (查询: any, 更新: any, options: any, cb?: any) =>
      coll.updateMany(查询, 更新, { upsert: true, ...options }, cb),
    /** ⭐ */
    扫描更新: async (
      {
        $match,
        $project,
        $limit,
        $sort,
      }: {
        $match: Filter<TSchema>;
        $limit?: number;
        $sort?: Sort;
        $project?: any;
        [k: string]: any;
      },
      updateFn: (doc: any, index?: number) => Awaitable<UpdateFilter<TSchema> | void>,
    ) => {
      await scanUpdate<TSchema>(coll, $match, $project, $limit, $sort, updateFn);
    },
    /**
     * ⭐ 并行聚合更新，常用于合集扫描操作，
     * @param pipeline MongoDB 标准聚合 pipeline。
     * @param 更新函数，接受参数：扫描到的文档 doc、当前序号 index，如需更新，则返回一个 updateOne 中的更新操作，否则请返回 null 表示不需要更新。
     * @returns 若没有错误发生，则返回成功扫描的数量。
     */
    并行聚合更新: async (
      pipeline: {
        $match?: FilterOperations<any>;
        $sample?: { size: number };
        $limit?: number;
        $sort?: any;
        $project?: any;
        [k: string]: any;
      }[],
      更新函数: (doc: any, index: number) => Awaitable<UpdateFilter<TSchema> | void>,
      { 并行数 = 1, 止于错 = true, 错误输出 = true } = {},
    ) => {
      let i = 0;
      const q = new PQueue({ concurrency: 并行数 });
      const 错误列 = [];
      for await (const doc of coll.aggregate(pipeline)) {
        if (!doc._id) throw new TypeError("doc._id is required");
        await q.onEmpty();
        q.add(async () => {
          try {
            const UpdateFilter = await 更新函数(doc, i);
            UpdateFilter &&
              (await coll.updateOne({ _id: doc._id }, UpdateFilter).catch((e) => {
                throw new Error(
                  `错误：在合集 ${coll.collectionName} 尝试更新错误: ${JSON.stringify(
                    UpdateFilter,
                  )}, 具体错误内容${e.message}`,
                );
                // throw e;
              }));
          } catch (err) {
            if (止于错) throw err;
            else 错误列.push(err);
          }
        });
        i++;
      }
      await q.onIdle();
      if (错误列.length) {
        错误输出 && console.error(错误列);
        throw Error(错误列.join("\n"));
      }
      return i;
    },
  });
}
