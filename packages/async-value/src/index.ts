type PromiseLiker<T> = Promise<T> | PromiseLike<T> | T;
type Iterator<V, R> = { (v: V, i: number, a: V[]): PromiseLiker<R> };
type Reducer<V, R> = { (v: V, w: W, i: number, a: V[]): PromiseLiker<R> };
type Looper<V> = { (v: V, i: number): PromiseLiker<void> };
type Conder<R> = { (): PromiseLiker<R> };
[].reduc;
export async function asyncMap<V, R>(a: PromiseLiker<V[]>, f: Iterator<V, R>) {
  const r = [];
  let i = 0;
  a = await a;
  for await (const v of a) r.push(await f(v, i++, a));
  return r;
}
export async function asyncForEach<V, R>(a: PromiseLiker<V[]>, f: Iterator<V, R>) {
  let i = 0;
  a = await a;
  for await (const v of a) await f(v, i++, a);
}
export async function asyncWhile<V, R>(cond: Conder<V>, f: Looper<V>) {
  let i = 0;
  let v = null;
  while ((v = await cond())) await f(v, i++);
}
export function asyncArray<V>(value: PromiseLiker<V[]>) {
  // const pipe = <R>(f: { (v: V[]): PromiseLiker<R> }) => asyncArray(Promise.resolve(value).then(f));
  const map = <R>(fn: Iterator<V, R>) => asyncArray(asyncMap(value, fn));
  const forEach = (fn: Iterator<V, R>) => asyncValue(asyncForEach(value, fn));
  const reduce = (fn: Iterator<V, R>) => asyncArray(asyncReduce(value, fn));
  // (async function() {
  //   (await value).
  // })();
  return { ...asyncValue(value), map, forEach, reduce };
}
export default function asyncValue<V>(value: PromiseLiker<V>) {
  const pipe = <R>(f: { (v: V): PromiseLiker<R> }) => asyncValue(Promise.resolve(value).then(f));
  const valueOf = async () => await value;
  return {
    valueOf,
    pipe,
  };
}
/**
 * @example const { lock, unlock } = useLockers(n);
 */
export function useLockers(n = 1) {
  const resolves = [];
  const lock = () => new Promise<void>((resolve) => (n-- ? resolve() : resolves.push(resolve)));
  const unlock = () => (n++, resolves.shift()?.());
  return { lock, unlock };
}
export function useLimiter(n = 1) {
  const { lock, unlock } = useLockers(n);
  const wait = <T>(fn: () => Promise<T>): Promise<T> => lock().then(fn).finally(unlock());
  return { wait };
}
