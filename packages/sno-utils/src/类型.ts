/**
 * Copyright 2019-2021 snomiao(snomiao@gmail.com)
 */

export type 值 = any;
export type 空 = null;
export type 数 = number;
export type 爻 = boolean;
export type 符 = symbol;
export type 串 = string;
export type 函 = Function;
export type 表 = { [k: string]: 值 };
export type 表表 = { [k: string]: 表 };
export type 数列 = 数[];
export type 列 = 值[];
export type 列列 = 值[][];
export type 表列 = 表[];
export type 键 = 串 | 数 | 符;
export type 对列 = Iterable<readonly [键, 值]>;
export type 映函 = (值: 值, 序?: 数, 列?: 列) => 值;
export type 筛函 = (值: 值, 序?: 数, 列?: 列) => 爻;
export type 归函 = (原: 值, 值: 值, 序?: 数, 列?: 列) => 值;
