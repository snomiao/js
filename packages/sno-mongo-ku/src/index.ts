/**
 * MongoDB simple wrapper, Provide simple method in chinese to handle the mongodb.
 * author: YiDong Zhuo(snomiao@gmail.com)
 */

import mongodb, { FilterOperations, MongoClient, Sort, UpdateFilter } from "mongodb";
import PQueue from "p-queue";
// import "sno-utils";
// ref https://zhuanlan.zhihu.com/p/59434318
const 返回值类型获取 = <T>(_需推断函数: (_: any) => T): T => ({} as T);
const 合集增强虚拟返回值 = 返回值类型获取(合集增强);
export type 增强合集 = typeof 合集增强虚拟返回值;
export * from "./时间比较";
const 雪芒果库虚拟返回值 = 返回值类型获取(snoMongoKu);
// type snoMongoKuPromise = typeof 雪芒果库虚拟返回值;

export interface snoMongoKuRaw extends mongodb.Db {
  _client: mongodb.MongoClient;
}
export interface snoMongoKuEnhanced {
  [k: string]: 增强合集;
}
// interface snoMongoKu extends snoMongoKuRaw, snoMongoKuEnhanced { }
export type snoMongoKu = snoMongoKuRaw & snoMongoKuEnhanced;
export default async function snoMongoKu(uri: string): Promise<snoMongoKu> {
  const client = new MongoClient(uri);
  await client.connect();
  const dbAgent = Object.assign(client.db(), { _client: client, close: client.close });
  return new Proxy(dbAgent, {
    get: (t: any, p) => t[p] ?? 合集增强(t.collection(p.toString())),
  });
}

type 表 = { _id?: mongodb.ObjectId | any; [x: string]: any };

const _合集增强表 = (合集: mongodb.Collection) => ({
  多增: 合集.insertMany,
  多删: 合集.deleteMany,
  多改: 合集.updateMany,
  多查: 合集.find,
  多查数: (查询表: mongodb.FilterOperations<any> = {}, 选项?: mongodb.FindOptions<any>) =>
    合集.countDocuments(查询表, 选项),
  /** ⭐ */
  多查列: (查询表: mongodb.FilterOperations<any> = {}, 选项?: mongodb.FindOptions<any>) =>
    合集.find(查询表, 选项).toArray(),
  /** ⭐ Upsert lines by index
   * set something to undefined to unset the key
   * @example
   * db.test.多补([{id: "1", a: undefined, b: 'asdf'}], {id: 1})
   * // is same as to db.test.upsert({id: "1"}, {$unset: {a: 1}, $set: 'asdf'})
   */
  多补: (表列: 表[], 索引: 表 = { _id: 1 }, 选项?: mongodb.BulkWriteOptions) =>
    合集.bulkWrite(
      表列.map((补表: 表) => {
        // 补表索引检查
        const 索引键存在 = (键名: string) => Object.keys(补表).includes(键名);
        const 索引键全部存在 = Object.keys(索引).every(索引键存在);
        if (!索引键全部存在) throw new Error("错误：补表对应索引键不完整");
        const filter = Object.fromEntries(Object.keys(索引).map((键) => [键, 补表[键]]));
        const $set = Object.fromEntries(Object.entries(索引).filter(([k, v]) => k !== undefined));
        const $unset = Object.fromEntries(Object.entries(索引).filter(([k, v]) => k === undefined));
        return {
          updateOne: {
            filter,
            update: { $set, $unset },
            upsert: true,
          },
        };
      }),
      选项,
    ),
  /** ⭐ Upsert lines by index
   * set something to undefined to unset the key
   * @example
   * db.test.putMany([{id: "1", a: undefined, b: 'asdf'}], {id: 1})
   * // is same as to db.test.upsert({id: "1"}, {$unset: {a: 1}, $set: 'asdf'})
   */
  putMany: (docs: 表[], index: 表 = { _id: 1 }, 选项?: mongodb.BulkWriteOptions) =>
    合集.bulkWrite(
      docs.map((补表: 表) => {
        // 补表索引检查
        const 索引键存在 = (键名: string) => Object.keys(补表).includes(键名);
        const 索引键全部存在 = Object.keys(index).every(索引键存在);
        if (!索引键全部存在) throw new Error("错误：补表对应索引键不完整");
        const filter = Object.fromEntries(Object.keys(index).map((键) => [键, 补表[键]]));
        const $set = Object.fromEntries(Object.entries(index).filter(([k, v]) => k !== undefined));
        const $unset = Object.fromEntries(
          Object.entries(index).filter(([k, v]) => k === undefined),
        );
        return {
          updateOne: {
            filter,
            update: { $set, $unset },
            upsert: true,
          },
        };
      }),
      选项,
    ),
  多增改: ((查询: any, 更新: any, options: any, cb?: any) =>
    合集.updateMany(查询, 更新, { upsert: true, ...options }, cb)) as typeof 合集.updateMany,
  upsertMany: ((查询: any, 更新: any, options: any, cb?: any) =>
    合集.updateMany(查询, 更新, { upsert: true, ...options }, cb)) as typeof 合集.updateMany,
  聚合: 合集.aggregate,
  索引: 合集.createIndex,
  索引删: 合集.dropIndex,
  复索引: 合集.createIndexes,
  复索引删: 合集.dropIndexes,
  状态: 合集.stats,
  数量估计: 合集.estimatedDocumentCount,
  监视: 合集.watch,
  改名: 合集.rename,
  名称: 合集.collectionName,
  去重: 合集.distinct,
  销毁: 合集.drop,
  /** ⭐ */
  扫描更新: async (
    {
      $match,
      $project,
      $limit,
      $sort,
    }: {
      $match: FilterOperations<any>;
      $limit?: number;
      $sort?: Sort;
      $project?: any;
      [k: string]: any;
    },
    更新函数: (
      doc: any,
      index?: number,
      count?: number,
    ) => Promise<UpdateFilter<any> | void> | UpdateFilter<any> | void,
  ) => {
    const cursor = 合集.find($match, {
      projection: $project,
      limit: $limit,
      sort: $sort,
    });
    // const count = await cursor.count();
    let index = 0;
    for await (const doc of cursor) {
      const UpdateFilter = await 更新函数(doc, index++, 0);
      if (!UpdateFilter) continue;
      await 合集.updateOne({ _id: doc._id }, UpdateFilter);
    }
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
    更新函数: (
      doc: any,
      index: number,
    ) => Promise<UpdateFilter<any> | void> | UpdateFilter<any> | void,
    { 并行数 = 1, 止于错 = true, 错误输出 = true } = {},
  ) => {
    let i = 0;
    const q = new PQueue({ concurrency: 并行数 });
    const 错误列 = [];
    for await (const doc of 合集.aggregate(pipeline)) {
      if (!doc._id) throw new TypeError("doc._id is required");
      await q.onEmpty();
      q.add(async () => {
        try {
          const UpdateFilter = await 更新函数(doc, i);
          UpdateFilter &&
            (await 合集.updateOne({ _id: doc._id }, UpdateFilter).catch((e) => {
              throw new Error(
                `错误：在合集 ${合集.collectionName} 尝试更新错误: ${JSON.stringify(
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

function 合集增强(合集: mongodb.Collection) {
  return Object.assign(合集, _合集增强表(合集));
}
