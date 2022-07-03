/* eslint-disable max-len */
import { Promi } from "./types";
import { snofa } from "./snofa";
import { snof } from "./snof";
export { snofa, snof };
export default snofa;
export function useLockers(n = 1) {
  const resolves = [];
  const lock = () => new Promise<void>((resolve) => (n-- ? resolve() : resolves.push(resolve)));
  const unlock = () => (n++, resolves.shift()?.());
  return { lock, unlock };
}

type Conda<Arg, R> = [(v?: Arg) => Promi<boolean> | boolean, (() => Promi<R>) | R];
type MapaIter<V, R> = (v?: V, i?: number, a?: V[]) => Promi<R>;
type ForaIter<V> = (v?: V, i?: number, a?: V[]) => Promi<void>;
type ReducaIter<S, V> = (state?: S, v?: V, i?: number, a?: V[]) => Promi<S>;
type WhilaWhen<T> = (state?: T) => Promi<T | void>;
type WhilaBody<V, R> = (v?: V) => Promi<R>;

// TODO: iter objects
// TODO: test
export function mapa<V, R>(fn: MapaIter<V, R>, a: Promi<V[]>): Promise<R[]>;
export function mapa<V, R>(fn: MapaIter<V, R>): (a: Promi<V[]>) => Promise<R[]>;
export function mapa<V, R>(fn: MapaIter<V, R>, a?: Promi<V[]>) {
  if (undefined === a) return (a: any) => mapa(fn, a);
  return (async () => {
    const r = [];
    let i = 0;
    a = await a;
    for await (const v of a) r.push(await fn(v, i++, a));
    return r;
  })();
}
// TODO: iter objects
// TODO: test
export function fora<V>(fn: ForaIter<V>, a: Promi<V[]>): Promise<void>;
export function fora<V>(fn: ForaIter<V>): (a: Promi<V[]>) => Promise<void>;
export function fora<V>(fn: ForaIter<V>, a?: Promi<V[]>) {
  if (undefined === a) return (a: any) => fora(fn, a);
  return (async () => {
    let i = 0;
    a = await a;
    for await (const v of a) await fn(v, i++, a);
  })();
}
// TODO: iter objects
// TODO: test
export function reduca<S, V>(f: ReducaIter<S, V>, state: S, a: Promi<V[]>): Promise<S>;
export function reduca<S, V>(f: ReducaIter<S, V>, state: S): (a: Promi<V[]>) => Promise<S>;
export function reduca<S, V>(f: ReducaIter<S, V>): (state: S, a: Promi<V[]>) => Promise<S>;
export function reduca<S, V>(f: ReducaIter<S, V>): (state: S) => (a: Promi<V[]>) => Promise<S>;
export function reduca<S, V>(f: ReducaIter<S, V>, state?: S, a?: Promi<V[]>): any {
  if (undefined === state) return (state: S, a?: Promi<V[]>) => reduca(f, state, a);
  if (undefined === a) return (a: Promi<V[]>) => reduca(f, state, a);
  return (async function () {
    a = await a;
    let i = 0;
    for await (const v of a) state = await f(state, v, i++, a);
    return state;
  })();
}
/**
 * Loop while updated truthy state and pipe into the looper, then return the last looper state.
 */
export function whila<V, R>(update: WhilaWhen<V>, body: WhilaBody<V, R>): Promise<R>;
/**
 * Loop while updated truthy state and pipe into the looper, then return the last looper state.
 */
export function whila<V, R>(update: WhilaWhen<V>): (body: WhilaBody<V, R>) => Promise<R>;
export function whila<V, R>(update: WhilaWhen<V>, body?: WhilaBody<V, R>): any {
  if (undefined === body) return (body: WhilaBody<V, R>) => whila(update, body);
  return (async function () {
    let state = null;
    let last = null;
    while ((state = await update(state))) last = await body(state);
    return last;
  })();
}

/**
 * async cond
 */
export function conda<R>(conds: Conda<void, R>[]): () => Promise<R>;
/**
 * async cond
 */
export function conda<V, R>(conds: Conda<V, R>[]): (v: V) => Promise<R>;
export function conda<V, R>(conds: Conda<V, R>[]) {
  return async (v?: V) => {
    let cond: typeof conds[number];
    while ((cond = conds.shift())) {
      const test = typeof cond[0] === "function" ? await cond[0](v) : cond[0];
      if (test) return typeof cond[1] === "function" ? await (cond[1] as () => R)() : cond[1];
    }
    return undefined;
  };
}
export function threw(message?: string) {
  throw new Error(message);
}
