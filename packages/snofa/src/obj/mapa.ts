import { Awaitable } from "../types";
type MapaArrayIter<O extends any[], R> = (val: O[number], index: number, array: O) => Awaitable<R>;
type MapaObjectIter<O extends Record<PropertyKey, any>, R> = (
  val: O[keyof O],
  key: keyof O,
  obj: O,
) => Awaitable<R>;
export default mapa;
export function mapa<O extends any[], R>(fn: MapaArrayIter<O, R>, a: Awaitable<O[]>): Promise<R[]>;
export function mapa<I extends any[], R>(
  fn: MapaArrayIter<I, R>,
): (a: Awaitable<I[]>) => Promise<R[]>;
export function mapa<O extends Object[], R>(
  fn: MapaObjectIter<O, R>,
  a: Awaitable<O[]>,
): Promise<R[]>;
export function mapa<O extends Object[], R>(
  fn: MapaObjectIter<O, R>,
): (a: Awaitable<O[]>) => Promise<R[]>;
export function mapa(fn: any, a?: any) {
  if (undefined === a) return (a: any) => mapa(fn, a);
  return (async () => {
    a = await a;
    if (Array.isArray(a)) {
      const r = [];
      let i = 0;
      for await (const v of a) r.push(await fn(v, i++, a));
      return r;
    }
    const kvl = Object.entries(a);
    const ret = {};
    for await (const [k, v] of kvl) ret[k] = await fn(v, k, a);
    return ret;
  })();
}
