import { asyncForEach, asyncMap, asyncReduce } from "./asyncFn";
import { Iterater, PromiseLiker, Reducer } from "./types";
export * from "./asyncFn";

export function asyncArray<V>(value: PromiseLiker<V[]>) {
  const map = <R>(fn: Iterater<V, R>) => asyncArray(asyncMap(value, fn));
  const forEach = <R>(fn: Iterater<V, R>) => asyncValue(asyncForEach(value, fn));
  const reduce = <R>(fn: Reducer<V, R>) => asyncReduce(value, fn);
  return { ...asyncValue(value), map, forEach, reduce };
}
export default function asyncValue<V>(value: PromiseLiker<V>) {
  const pipe = <R>(f: { (v: V): PromiseLiker<R> }) =>
    asyncValue(Promise.resolve(value).then((e) => f.call(e)));
  const arrayPipe = <R extends any[]>(f: { (v: V): PromiseLiker<R> }) =>
    asyncArray(Promise.resolve(value).then(f));
  const valueOf = async () => await value;
  return {
    value,
    valueOf,
    pipe,
    arrayPipe,
  };
}
// flow control
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
