import type { Conder, Iterater, Looper, PromiseLiker, Reducer } from "./types";
export async function asyncMap<V, R>(a: PromiseLiker<V[]>, f: Iterater<V, R>) {
  const r = [];
  let i = 0;
  a = await a;
  for await (const v of a) r.push(await f(v, i++, a));
  return r;
}
export async function asyncReduce<V, R>(a: PromiseLiker<V[]>, f: Reducer<V, R>, r?: R) {
  a = await a;
  if (r === undefined) r = a[0] as unknown as R;
  let i = 0;
  for await (const v of a) r = await f(r, v, i++, a);
  return r;
}
export async function asyncForEach<V, R>(a: PromiseLiker<V[]>, f: Iterater<V, R>) {
  let i = 0;
  a = await a;
  for await (const v of a) await f(v, i++, a);
}
export async function asyncWhile<V, R>(cond: Conder<V>, f: Looper<V>) {
  let i = 0;
  let v = null;
  while ((v = await cond())) await f(v, i++);
}
