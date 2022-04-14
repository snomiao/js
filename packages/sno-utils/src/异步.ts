/**
 * Copyright 2019-2021 snomiao(snomiao@gmail.com)
 */

/**
 * 雪星异步组件
 * Copyright 2019.11 snomiao(snomiao@gmail.com)
 */
import { 值, 列 } from './类型';

export const 睡 = (毫秒: number) => new Promise((resolve) => setTimeout(resolve, 毫秒));
export const 序列映 = (函: (值: 值) => Promise<any>) => async (列: 列) => {
  const 返列 = [];
  for await (const 值 of 列) {
    返列.push(await 函(值));
  }
  return 返列;
};
export const 并列映 = (函: (值: 值) => Promise<any>) => async (列: 列) => await Promise.all(列.map((值) => 函(值)));
