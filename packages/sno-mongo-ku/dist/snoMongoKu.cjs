"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var mongodb = require("mongodb");
var PQueue = require("p-queue");

function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { default: e };
}

var PQueue__default = /*#__PURE__*/ _interopDefaultLegacy(PQueue);

const 不晚于 = (乘数) => ({
  秒前: {
    $not: {
      $gt: new Date(+new Date().getTime() - 1e3 * 乘数),
    },
  },
  秒后: {
    $not: {
      $gt: new Date(+new Date().getTime() + 1e3 * 乘数),
    },
  },
  分钟前: {
    $not: {
      $gt: new Date(+new Date().getTime() - 60e3 * 乘数),
    },
  },
  分钟后: {
    $not: {
      $gt: new Date(+new Date().getTime() + 60e3 * 乘数),
    },
  },
  小时前: {
    $not: {
      $gt: new Date(+new Date().getTime() - 3600e3 * 乘数),
    },
  },
  小时后: {
    $not: {
      $gt: new Date(+new Date().getTime() + 3600e3 * 乘数),
    },
  },
  天前: {
    $not: {
      $gt: new Date(+new Date().getTime() - 86400e3 * 乘数),
    },
  },
  天后: {
    $not: {
      $gt: new Date(+new Date().getTime() + 86400e3 * 乘数),
    },
  },
  月前: {
    $not: {
      $gt: new Date(+new Date().getTime() - 30 * 86400e3 * 乘数),
    },
  },
  月后: {
    $not: {
      $gt: new Date(+new Date().getTime() + 30 * 86400e3 * 乘数),
    },
  },
  年前: {
    $not: {
      $gt: new Date(+new Date().getTime() - 365 * 86400e3 * 乘数),
    },
  },
  年后: {
    $not: {
      $gt: new Date(+new Date().getTime() + 365 * 86400e3 * 乘数),
    },
  },
});
const 不早于 = (乘数) => ({
  秒前: {
    $not: {
      $lt: new Date(+new Date().getTime() - 1e3 * 乘数),
    },
  },
  秒后: {
    $not: {
      $lt: new Date(+new Date().getTime() + 1e3 * 乘数),
    },
  },
  分钟前: {
    $not: {
      $lt: new Date(+new Date().getTime() - 60e3 * 乘数),
    },
  },
  分钟后: {
    $not: {
      $lt: new Date(+new Date().getTime() + 60e3 * 乘数),
    },
  },
  小时前: {
    $not: {
      $lt: new Date(+new Date().getTime() - 3600e3 * 乘数),
    },
  },
  小时后: {
    $not: {
      $lt: new Date(+new Date().getTime() + 3600e3 * 乘数),
    },
  },
  天前: {
    $not: {
      $lt: new Date(+new Date().getTime() - 86400e3 * 乘数),
    },
  },
  天后: {
    $not: {
      $lt: new Date(+new Date().getTime() + 86400e3 * 乘数),
    },
  },
  月前: {
    $not: {
      $lt: new Date(+new Date().getTime() - 30 * 86400e3 * 乘数),
    },
  },
  月后: {
    $not: {
      $lt: new Date(+new Date().getTime() + 30 * 86400e3 * 乘数),
    },
  },
  年前: {
    $not: {
      $lt: new Date(+new Date().getTime() - 365 * 86400e3 * 乘数),
    },
  },
  年后: {
    $not: {
      $lt: new Date(+new Date().getTime() + 365 * 86400e3 * 乘数),
    },
  },
});
const 晚于 = (乘数) => ({
  秒前: {
    $gt: new Date(+new Date().getTime() - 1e3 * 乘数),
  },
  秒后: {
    $gt: new Date(+new Date().getTime() + 1e3 * 乘数),
  },
  分钟前: {
    $gt: new Date(+new Date().getTime() - 60e3 * 乘数),
  },
  分钟后: {
    $gt: new Date(+new Date().getTime() + 60e3 * 乘数),
  },
  小时前: {
    $gt: new Date(+new Date().getTime() - 3600e3 * 乘数),
  },
  小时后: {
    $gt: new Date(+new Date().getTime() + 3600e3 * 乘数),
  },
  天前: {
    $gt: new Date(+new Date().getTime() - 86400e3 * 乘数),
  },
  天后: {
    $gt: new Date(+new Date().getTime() + 86400e3 * 乘数),
  },
  月前: {
    $gt: new Date(+new Date().getTime() - 30 * 86400e3 * 乘数),
  },
  月后: {
    $gt: new Date(+new Date().getTime() + 30 * 86400e3 * 乘数),
  },
  年前: {
    $gt: new Date(+new Date().getTime() - 365 * 86400e3 * 乘数),
  },
  年后: {
    $gt: new Date(+new Date().getTime() + 365 * 86400e3 * 乘数),
  },
});
const 早于 = (乘数) => ({
  秒前: {
    $lt: new Date(+new Date().getTime() - 1e3 * 乘数),
  },
  秒后: {
    $lt: new Date(+new Date().getTime() + 1e3 * 乘数),
  },
  分钟前: {
    $lt: new Date(+new Date().getTime() - 60e3 * 乘数),
  },
  分钟后: {
    $lt: new Date(+new Date().getTime() + 60e3 * 乘数),
  },
  小时前: {
    $lt: new Date(+new Date().getTime() - 3600e3 * 乘数),
  },
  小时后: {
    $lt: new Date(+new Date().getTime() + 3600e3 * 乘数),
  },
  天前: {
    $lt: new Date(+new Date().getTime() - 86400e3 * 乘数),
  },
  天后: {
    $lt: new Date(+new Date().getTime() + 86400e3 * 乘数),
  },
  月前: {
    $lt: new Date(+new Date().getTime() - 30 * 86400e3 * 乘数),
  },
  月后: {
    $lt: new Date(+new Date().getTime() + 30 * 86400e3 * 乘数),
  },
  年前: {
    $lt: new Date(+new Date().getTime() - 365 * 86400e3 * 乘数),
  },
  年后: {
    $lt: new Date(+new Date().getTime() + 365 * 86400e3 * 乘数),
  },
});

async function snoMongoKu(uri) {
  const client = new mongodb.MongoClient(uri);
  await client.connect();
  return new Proxy(client.db(), {
    get: (t, p) => (p === "_client" ? client : t[p] ?? 合集增强(t.collection(p.toString()))),
  });
}

const _合集增强表 = (合集) => ({
  单增: 合集.insertOne,
  单删: async (查询表 = {}, 选项) => await 合集.deleteOne(查询表, 选项),
  单改: 合集.updateOne,
  单查: async (查询表 = {}, 选项) => await 合集.findOne(查询表, 选项),
  单查替: 合集.findOneAndReplace,
  单查改: 合集.findOneAndUpdate,
  单查删: 合集.findOneAndDelete,
  单补: async (
    补表,
    索引 = {
      _id: 1,
    },
    选项,
  ) => {
    const 索引键存在 = (键名) => Object.keys(补表).includes(键名);

    const 索引键全部存在 = Object.keys(索引).every(索引键存在);
    if (!索引键全部存在) throw new Error("错误：补表对应索引键不完整");
    return await 合集.updateOne(
      Object.fromEntries(Object.keys(索引).map((键) => [键, 补表[键]])),
      {
        $set: 补表,
      },
      {
        upsert: true,
        ...选项,
      },
    );
  },
  单增改: (查询, 更新, options, cb) =>
    合集.updateOne(
      查询,
      更新,
      {
        upsert: true,
        ...options,
      },
      cb,
    ),
  upsertOne: (查询, 更新, options, cb) =>
    合集.updateOne(
      查询,
      更新,
      {
        upsert: true,
        ...options,
      },
      cb,
    ),
  多增: 合集.insertMany,
  多删: 合集.deleteMany,
  多改: 合集.updateMany,
  多查: 合集.find,
  多查数: (查询表 = {}, 选项) => 合集.find(查询表, 选项).count(),
  多查列: (查询表 = {}, 选项) => 合集.find(查询表, 选项).toArray(),
  多补: (
    表列,
    索引 = {
      _id: 1,
    },
    选项,
  ) =>
    合集.bulkWrite(
      表列.map((补表) => {
        const 索引键存在 = (键名) => Object.keys(补表).includes(键名);

        const 索引键全部存在 = Object.keys(索引).every(索引键存在);
        if (!索引键全部存在) throw new Error("错误：补表对应索引键不完整");
        const filter = Object.fromEntries(Object.keys(索引).map((键) => [键, 补表[键]]));
        return {
          updateOne: {
            filter,
            update: {
              $set: 补表,
            },
            upsert: true,
          },
        };
      }),
      选项,
    ),
  多增改: (查询, 更新, options, cb) =>
    合集.updateMany(
      查询,
      更新,
      {
        upsert: true,
        ...options,
      },
      cb,
    ),
  upsertMany: (查询, 更新, options, cb) =>
    合集.updateMany(
      查询,
      更新,
      {
        upsert: true,
        ...options,
      },
      cb,
    ),
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
  扫描更新: async ({ $match, $project, $limit, $sort }, 更新函数) => {
    const cursor = 合集.find($match, {
      projection: $project,
      limit: $limit,
      sort: $sort,
    });
    const count = await cursor.count();
    let index = 0;

    for await (const doc of cursor) {
      const UpdateFilter = await 更新函数(doc, index++, count);
      if (!UpdateFilter) continue;
      await 合集.updateOne(
        {
          _id: doc._id,
        },
        UpdateFilter,
      );
    }
  },
  并行聚合更新: async (pipeline, 更新函数, { 并行数 = 1, 止于错 = true, 错误输出 = true } = {}) => {
    let index = 0;
    const q = new PQueue__default["default"]({
      concurrency: 并行数,
    });
    const 错误列 = [];

    for await (const doc of 合集.aggregate(pipeline)) {
      if (!doc._id) throw new TypeError("doc._id is required");
      await q.onEmpty();
      q.add(async () => {
        try {
          const UpdateFilter = await 更新函数(doc, index);
          UpdateFilter &&
            (await 合集
              .updateOne(
                {
                  _id: doc._id,
                },
                UpdateFilter,
              )
              .catch((e) => {
                throw new Error(
                  `错误：在合集 ${合集.collectionName} 尝试更新错误: ${JSON.stringify(
                    UpdateFilter,
                  )}, 具体错误内容${e.message}`,
                );
              }));
        } catch (err) {
          if (止于错) throw err;
          else 错误列.push(err);
        }
      });
      index++;
    }

    await q.onIdle();

    if (错误列.length) {
      错误输出 && console.error(错误列);
      throw AggregateError(错误列);
    }

    return index;
  },
  parallelAggregateUpdate: async (
    pipeline,
    更新函数,
    { concurrency = 1, stopOnErrors = true, showErrors = true } = {},
  ) => {
    let index = 0;
    const q = new PQueue__default["default"]({
      concurrency: concurrency,
    });
    const 错误列 = [];

    for await (const doc of 合集.aggregate(pipeline)) {
      if (!doc._id) throw new TypeError("doc._id is required");
      await q.onEmpty();
      q.add(async () => {
        try {
          const UpdateFilter = await 更新函数(doc, index);
          UpdateFilter &&
            (await 合集.updateOne(
              {
                _id: doc._id,
              },
              UpdateFilter,
            ));
        } catch (err) {
          if (stopOnErrors) throw err;
          else 错误列.push(err);
        }
      });
      index++;
    }

    await q.onIdle();

    if (错误列.length) {
      showErrors && console.error(错误列);
      throw AggregateError(错误列);
    }

    return index;
  },
  并行各改: async (
    func,
    { $match, $sample, $limit, $sort, $project } = {},
    { 并行数 = 1, 止于错 = true, 错误输出 = true, 先计数 = true } = {},
  ) => {
    let index = 0,
      count = (先计数 && (await 合集.countDocuments($match))) || null;
    const q = new PQueue__default["default"]({
      concurrency: 并行数,
    });
    const 错误列 = [];

    for await (const doc of 合集.aggregate(
      [
        $match && {
          $match,
        },
        $sample && {
          $sample,
        },
        $sort && {
          $sort,
        },
        $project && {
          $project,
        },
        $limit && {
          $limit,
        },
      ].filter((e) => e),
    )) {
      if (!doc._id) throw new TypeError("doc._id is required");
      await q.onEmpty();
      q.add(async () => {
        try {
          const UpdateFilter = await func(doc, index, count);
          UpdateFilter &&
            (await 合集.updateOne(
              {
                _id: doc._id,
              },
              UpdateFilter,
            ));
        } catch (err) {
          if (止于错) throw err;
          else 错误列.push(err);
        }
      });
      index++;
    }

    await q.onIdle();

    if (错误列.length) {
      错误输出 && console.error(错误列);
      throw AggregateError(错误列);
    }

    return index;
  },
});

function 合集增强(合集) {
  return Object.assign(合集, _合集增强表(合集));
}

exports["default"] = snoMongoKu;
exports["不早于"] = 不早于;
exports["不晚于"] = 不晚于;
exports["早于"] = 早于;
exports["晚于"] = 晚于;
