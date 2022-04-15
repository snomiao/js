import mongodb, { FilterOperations, Sort, UpdateFilter } from "mongodb";
declare const 合集增强虚拟返回值: mongodb.Collection<mongodb.Document> & {
  单增: {
    (doc: mongodb.OptionalId<mongodb.Document>): Promise<mongodb.InsertOneResult<mongodb.Document>>;
    (
      doc: mongodb.OptionalId<mongodb.Document>,
      callback: mongodb.Callback<mongodb.InsertOneResult<mongodb.Document>>,
    ): void;
    (doc: mongodb.OptionalId<mongodb.Document>, options: mongodb.InsertOneOptions): Promise<
      mongodb.InsertOneResult<mongodb.Document>
    >;
    (
      doc: mongodb.OptionalId<mongodb.Document>,
      options: mongodb.InsertOneOptions,
      callback: mongodb.Callback<mongodb.InsertOneResult<mongodb.Document>>,
    ): void;
  };
  单删: (
    查询表?: mongodb.FilterOperations<any>,
    选项?: mongodb.DeleteOptions,
  ) => Promise<mongodb.DeleteResult>;
  单改: {
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: Partial<mongodb.Document> | mongodb.UpdateFilter<mongodb.Document>,
    ): Promise<mongodb.UpdateResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: Partial<mongodb.Document> | mongodb.UpdateFilter<mongodb.Document>,
      callback: mongodb.Callback<mongodb.UpdateResult>,
    ): void;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: Partial<mongodb.Document> | mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.UpdateOptions,
    ): Promise<mongodb.UpdateResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: Partial<mongodb.Document> | mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.UpdateOptions,
      callback: mongodb.Callback<mongodb.UpdateResult>,
    ): void;
  };
  单查: (
    查询表?: mongodb.FilterOperations<any>,
    选项?: mongodb.FindOptions<any>,
  ) => Promise<mongodb.WithId<mongodb.Document>>;
  单查替: {
    (
      filter: mongodb.Filter<mongodb.Document>,
      replacement: mongodb.WithoutId<mongodb.Document>,
    ): Promise<mongodb.ModifyResult<mongodb.Document>>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      replacement: mongodb.WithoutId<mongodb.Document>,
      callback: mongodb.Callback<mongodb.ModifyResult<mongodb.Document>>,
    ): void;
    (
      filter: mongodb.Filter<mongodb.Document>,
      replacement: mongodb.WithoutId<mongodb.Document>,
      options: mongodb.FindOneAndReplaceOptions,
    ): Promise<mongodb.ModifyResult<mongodb.Document>>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      replacement: mongodb.WithoutId<mongodb.Document>,
      options: mongodb.FindOneAndReplaceOptions,
      callback: mongodb.Callback<mongodb.ModifyResult<mongodb.Document>>,
    ): void;
  };
  单查改: {
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
    ): Promise<mongodb.ModifyResult<mongodb.Document>>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
      callback: mongodb.Callback<mongodb.ModifyResult<mongodb.Document>>,
    ): void;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.FindOneAndUpdateOptions,
    ): Promise<mongodb.ModifyResult<mongodb.Document>>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.FindOneAndUpdateOptions,
      callback: mongodb.Callback<mongodb.ModifyResult<mongodb.Document>>,
    ): void;
  };
  单查删: {
    (filter: mongodb.Filter<mongodb.Document>): Promise<mongodb.ModifyResult<mongodb.Document>>;
    (filter: mongodb.Filter<mongodb.Document>, options: mongodb.FindOneAndDeleteOptions): Promise<
      mongodb.ModifyResult<mongodb.Document>
    >;
    (
      filter: mongodb.Filter<mongodb.Document>,
      callback: mongodb.Callback<mongodb.ModifyResult<mongodb.Document>>,
    ): void;
    (
      filter: mongodb.Filter<mongodb.Document>,
      options: mongodb.FindOneAndDeleteOptions,
      callback: mongodb.Callback<mongodb.ModifyResult<mongodb.Document>>,
    ): void;
  };
  单补: (补表: 表, 索引?: 表, 选项?: mongodb.UpdateOptions) => Promise<mongodb.UpdateResult>;
  单增改: {
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: Partial<mongodb.Document> | mongodb.UpdateFilter<mongodb.Document>,
    ): Promise<mongodb.UpdateResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: Partial<mongodb.Document> | mongodb.UpdateFilter<mongodb.Document>,
      callback: mongodb.Callback<mongodb.UpdateResult>,
    ): void;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: Partial<mongodb.Document> | mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.UpdateOptions,
    ): Promise<mongodb.UpdateResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: Partial<mongodb.Document> | mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.UpdateOptions,
      callback: mongodb.Callback<mongodb.UpdateResult>,
    ): void;
  };
  upsertOne: {
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: Partial<mongodb.Document> | mongodb.UpdateFilter<mongodb.Document>,
    ): Promise<mongodb.UpdateResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: Partial<mongodb.Document> | mongodb.UpdateFilter<mongodb.Document>,
      callback: mongodb.Callback<mongodb.UpdateResult>,
    ): void;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: Partial<mongodb.Document> | mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.UpdateOptions,
    ): Promise<mongodb.UpdateResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: Partial<mongodb.Document> | mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.UpdateOptions,
      callback: mongodb.Callback<mongodb.UpdateResult>,
    ): void;
  };
  多增: {
    (docs: mongodb.OptionalId<mongodb.Document>[]): Promise<
      mongodb.InsertManyResult<mongodb.Document>
    >;
    (
      docs: mongodb.OptionalId<mongodb.Document>[],
      callback: mongodb.Callback<mongodb.InsertManyResult<mongodb.Document>>,
    ): void;
    (docs: mongodb.OptionalId<mongodb.Document>[], options: mongodb.BulkWriteOptions): Promise<
      mongodb.InsertManyResult<mongodb.Document>
    >;
    (
      docs: mongodb.OptionalId<mongodb.Document>[],
      options: mongodb.BulkWriteOptions,
      callback: mongodb.Callback<mongodb.InsertManyResult<mongodb.Document>>,
    ): void;
  };
  多删: {
    (filter: mongodb.Filter<mongodb.Document>): Promise<mongodb.DeleteResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      callback: mongodb.Callback<mongodb.DeleteResult>,
    ): void;
    (
      filter: mongodb.Filter<mongodb.Document>,
      options: mongodb.DeleteOptions,
    ): Promise<mongodb.DeleteResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      options: mongodb.DeleteOptions,
      callback: mongodb.Callback<mongodb.DeleteResult>,
    ): void;
  };
  多改: {
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
    ): Promise<mongodb.Document | mongodb.UpdateResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
      callback: mongodb.Callback<mongodb.Document | mongodb.UpdateResult>,
    ): void;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.UpdateOptions,
    ): Promise<mongodb.Document | mongodb.UpdateResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.UpdateOptions,
      callback: mongodb.Callback<mongodb.Document | mongodb.UpdateResult>,
    ): void;
  };
  多查: {
    (): mongodb.FindCursor<mongodb.WithId<mongodb.Document>>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      options?: mongodb.FindOptions<mongodb.Document>,
    ): mongodb.FindCursor<mongodb.WithId<mongodb.Document>>;
    <T extends mongodb.Document>(
      filter: mongodb.Filter<mongodb.Document>,
      options?: mongodb.FindOptions<mongodb.Document>,
    ): mongodb.FindCursor<T>;
  };
  多查数: (
    查询表?: mongodb.FilterOperations<any>,
    选项?: mongodb.FindOptions<any>,
  ) => Promise<number>;
  多查列: (
    查询表?: mongodb.FilterOperations<any>,
    选项?: mongodb.FindOptions<any>,
  ) => Promise<mongodb.WithId<mongodb.Document>[]>;
  多补: (
    表列: 表[],
    索引?: 表,
    选项?: mongodb.BulkWriteOptions,
  ) => Promise<mongodb.BulkWriteResult>;
  多增改: {
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
    ): Promise<mongodb.Document | mongodb.UpdateResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
      callback: mongodb.Callback<mongodb.Document | mongodb.UpdateResult>,
    ): void;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.UpdateOptions,
    ): Promise<mongodb.Document | mongodb.UpdateResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.UpdateOptions,
      callback: mongodb.Callback<mongodb.Document | mongodb.UpdateResult>,
    ): void;
  };
  upsertMany: {
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
    ): Promise<mongodb.Document | mongodb.UpdateResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
      callback: mongodb.Callback<mongodb.Document | mongodb.UpdateResult>,
    ): void;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.UpdateOptions,
    ): Promise<mongodb.Document | mongodb.UpdateResult>;
    (
      filter: mongodb.Filter<mongodb.Document>,
      update: mongodb.UpdateFilter<mongodb.Document>,
      options: mongodb.UpdateOptions,
      callback: mongodb.Callback<mongodb.Document | mongodb.UpdateResult>,
    ): void;
  };
  聚合: <T_1 extends mongodb.Document = mongodb.Document>(
    pipeline?: mongodb.Document[],
    options?: mongodb.AggregateOptions,
  ) => mongodb.AggregationCursor<T_1>;
  索引: {
    (indexSpec: mongodb.IndexSpecification): Promise<string>;
    (indexSpec: mongodb.IndexSpecification, callback: mongodb.Callback<string>): void;
    (indexSpec: mongodb.IndexSpecification, options: mongodb.CreateIndexesOptions): Promise<string>;
    (
      indexSpec: mongodb.IndexSpecification,
      options: mongodb.CreateIndexesOptions,
      callback: mongodb.Callback<string>,
    ): void;
  };
  索引删: {
    (indexName: string): Promise<mongodb.Document>;
    (indexName: string, callback: mongodb.Callback<mongodb.Document>): void;
    (indexName: string, options: mongodb.CommandOperationOptions): Promise<mongodb.Document>;
    (
      indexName: string,
      options: mongodb.CommandOperationOptions,
      callback: mongodb.Callback<mongodb.Document>,
    ): void;
  };
  复索引: {
    (indexSpecs: mongodb.IndexDescription[]): Promise<string[]>;
    (indexSpecs: mongodb.IndexDescription[], callback: mongodb.Callback<string[]>): void;
    (indexSpecs: mongodb.IndexDescription[], options: mongodb.CreateIndexesOptions): Promise<
      string[]
    >;
    (
      indexSpecs: mongodb.IndexDescription[],
      options: mongodb.CreateIndexesOptions,
      callback: mongodb.Callback<string[]>,
    ): void;
  };
  复索引删: {
    (): Promise<mongodb.Document>;
    (callback: mongodb.Callback<mongodb.Document>): void;
    (options: mongodb.CommandOperationOptions): Promise<mongodb.Document>;
    (options: mongodb.CommandOperationOptions, callback: mongodb.Callback<mongodb.Document>): void;
  };
  状态: {
    (): Promise<mongodb.CollStats>;
    (callback: mongodb.Callback<mongodb.CollStats>): void;
    (options: mongodb.CollStatsOptions): Promise<mongodb.CollStats>;
    (options: mongodb.CollStatsOptions, callback: mongodb.Callback<mongodb.CollStats>): void;
  };
  数量估计: {
    (): Promise<number>;
    (callback: mongodb.Callback<number>): void;
    (options: mongodb.EstimatedDocumentCountOptions): Promise<number>;
    (options: mongodb.EstimatedDocumentCountOptions, callback: mongodb.Callback<number>): void;
  };
  监视: <TLocal extends mongodb.Document = mongodb.Document>(
    pipeline?: mongodb.Document[],
    options?: mongodb.ChangeStreamOptions,
  ) => mongodb.ChangeStream<TLocal>;
  改名: {
    (newName: string): Promise<mongodb.Collection<mongodb.Document>>;
    (newName: string, callback: mongodb.Callback<mongodb.Collection<mongodb.Document>>): void;
    (newName: string, options: mongodb.RenameOptions): Promise<
      mongodb.Collection<mongodb.Document>
    >;
    (
      newName: string,
      options: mongodb.RenameOptions,
      callback: mongodb.Callback<mongodb.Collection<mongodb.Document>>,
    ): void;
  };
  名称: string;
  去重: {
    <Key extends string | number>(key: Key): Promise<
      mongodb.Flatten<mongodb.WithId<mongodb.Document>[Key]>[]
    >;
    <Key_1 extends string | number>(
      key: Key_1,
      callback: mongodb.Callback<mongodb.Flatten<mongodb.WithId<mongodb.Document>[Key_1]>[]>,
    ): void;
    <Key_2 extends string | number>(key: Key_2, filter: mongodb.Filter<mongodb.Document>): Promise<
      mongodb.Flatten<mongodb.WithId<mongodb.Document>[Key_2]>[]
    >;
    <Key_3 extends string | number>(
      key: Key_3,
      filter: mongodb.Filter<mongodb.Document>,
      callback: mongodb.Callback<mongodb.Flatten<mongodb.WithId<mongodb.Document>[Key_3]>[]>,
    ): void;
    <Key_4 extends string | number>(
      key: Key_4,
      filter: mongodb.Filter<mongodb.Document>,
      options: mongodb.CommandOperationOptions,
    ): Promise<mongodb.Flatten<mongodb.WithId<mongodb.Document>[Key_4]>[]>;
    <Key_5 extends string | number>(
      key: Key_5,
      filter: mongodb.Filter<mongodb.Document>,
      options: mongodb.CommandOperationOptions,
      callback: mongodb.Callback<mongodb.Flatten<mongodb.WithId<mongodb.Document>[Key_5]>[]>,
    ): void;
    (key: string): Promise<any[]>;
    (key: string, callback: mongodb.Callback<any[]>): void;
    (key: string, filter: mongodb.Filter<mongodb.Document>): Promise<any[]>;
    (
      key: string,
      filter: mongodb.Filter<mongodb.Document>,
      callback: mongodb.Callback<any[]>,
    ): void;
    (
      key: string,
      filter: mongodb.Filter<mongodb.Document>,
      options: mongodb.CommandOperationOptions,
    ): Promise<any[]>;
    (
      key: string,
      filter: mongodb.Filter<mongodb.Document>,
      options: mongodb.CommandOperationOptions,
      callback: mongodb.Callback<any[]>,
    ): void;
  };
  销毁: {
    (): Promise<boolean>;
    (callback: mongodb.Callback<boolean>): void;
    (options: mongodb.CommandOperationOptions): Promise<boolean>;
    (options: mongodb.CommandOperationOptions, callback: mongodb.Callback<boolean>): void;
  };
  扫描更新: (
    {
      $match,
      $project,
      $limit,
      $sort,
    }: {
      [k: string]: any;
      $match: FilterOperations<any>;
      $limit?: number;
      $sort?: Sort;
      $project?: any;
    },
    更新函数: (
      doc: any,
      index?: number,
      count?: number,
    ) => Promise<UpdateFilter<any> | void> | UpdateFilter<any> | void,
  ) => Promise<void>;
  并行聚合更新: (
    pipeline: {
      [k: string]: any;
      $match?: FilterOperations<any>;
      $sample?: {
        size: number;
      };
      $limit?: number;
      $sort?: any;
      $project?: any;
    }[],
    更新函数: (
      doc: any,
      index: number,
    ) => Promise<UpdateFilter<any> | void> | UpdateFilter<any> | void,
    {
      并行数,
      止于错,
      错误输出,
    }?: {
      并行数?: number;
      止于错?: boolean;
      错误输出?: boolean;
    },
  ) => Promise<number>;
  parallelAggregateUpdate: (
    pipeline: {
      [k: string]: any;
      $match?: FilterOperations<any>;
      $sample?: {
        size: number;
      };
      $limit?: number;
      $sort?: any;
      $project?: any;
    }[],
    更新函数: (
      doc: any,
      index: number,
    ) => Promise<UpdateFilter<any> | void> | UpdateFilter<any> | void,
    {
      concurrency,
      stopOnErrors,
      showErrors,
    }?: {
      concurrency?: number;
      stopOnErrors?: boolean;
      showErrors?: boolean;
    },
  ) => Promise<number>;
  并行各改: (
    func: (
      doc: any,
      index: number,
      count: number,
    ) => Promise<UpdateFilter<any> | void> | UpdateFilter<any> | void,
    {
      $match,
      $sample,
      $limit,
      $sort,
      $project,
    }?: {
      $match?: FilterOperations<any>;
      $sample?: {
        size: number;
      };
      $limit?: number;
      $sort?: any;
      $project?: any;
    },
    {
      并行数,
      止于错,
      错误输出,
      先计数,
    }?: {
      并行数?: number;
      止于错?: boolean;
      错误输出?: boolean;
      先计数?: boolean;
    },
  ) => Promise<number>;
};
export declare type 增强合集 = typeof 合集增强虚拟返回值;
export * from "./时间比较";
export interface snoMongoKuRaw extends mongodb.Db {
  _client: mongodb.MongoClient;
}
export interface snoMongoKuEnhanced {
  [k: string]: 增强合集;
}
export declare type snoMongoKu = snoMongoKuRaw & snoMongoKuEnhanced;
export default function snoMongoKu(uri: string): Promise<snoMongoKu>;
declare type 表 = {
  _id?: mongodb.ObjectId | any;
  [x: string]: any;
};
//# sourceMappingURL=snoMongoKu.d.ts.map
