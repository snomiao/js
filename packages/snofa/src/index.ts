/* eslint-disable max-len */
import { Awaitable } from "./types";
import { snofa } from "./snofa";
import { snof } from "./snof";
export { snofa, snof };
export default snofa;

/**
 * @deprecated use useLocka
 */
export function useLockers(n = 1) {
  const resolves = [];
  const lock = () => new Promise<void>((resolve) => (n-- ? resolve() : resolves.push(resolve)));
  const unlock = () => (n++, resolves.shift()?.());
  return { lock, unlock };
}
type Obj<T extends Record<PropertyKey, any> = Record<PropertyKey, any>> = T;
type FunVa<T extends any[], R> = ((...args: T) => Awaitable<R>) | (() => Awaitable<R>) | Awaitable<R>;
type Conda<T extends any[], R> = [FunVa<T, boolean | any>, FunVa<T, R>];
type MapaArrayIter<O extends any[], R> = (val: O[number], index: number, array: O) => Awaitable<R>;
type MapaObjectIter<O extends Obj, R> = (val: O[keyof O], key: keyof O, obj: O) => Awaitable<R>;
type ReducaIter<S, V> = (state: S, v: V, i: number, a: V[]) => Awaitable<S>;

// expriment
type LoopaWhen<T> = (state: T) => Awaitable<T | void>;
type LoopaBody<V, R> = (v: V) => Awaitable<R>;
/**
 * @examples TODO
 * TODO: iter objects
 * TODO: test data
 */
export function mapa<O extends any[], R>(fn: MapaArrayIter<O, R>, a: Awaitable<O[]>): Promise<R[]>;
export function mapa<O extends any[], R>(fn: MapaArrayIter<O, R>): (a: Awaitable<O[]>) => Promise<R[]>;
export function mapa<O extends Object[], R>(fn: MapaObjectIter<O, R>, a: Awaitable<O[]>): Promise<R[]>;
export function mapa<O extends Object[], R>(fn: MapaObjectIter<O, R>): (a: Awaitable<O[]>) => Promise<R[]>;
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

/**
 * @examples TODO
 * TODO: iter objects
 * TODO: test data
 */
export function reduca<S, V>(f: ReducaIter<S, V>, state: S, a: Awaitable<V[]>): Promise<S>;
export function reduca<S, V>(f: ReducaIter<S, V>, state: S): (a: Awaitable<V[]>) => Promise<S>;
export function reduca<S, V>(f: ReducaIter<S, V>): (state: S, a: Awaitable<V[]>) => Promise<S>;
export function reduca<S, V>(f: ReducaIter<S, V>): (state: S) => (a: Awaitable<V[]>) => Promise<S>;
export function reduca<S, V>(f: ReducaIter<S, V>, state?: S, a?: Awaitable<V[]>): any {
  if (undefined === state) return (state: S, a?: Awaitable<V[]>) => reduca(f, state, a);
  if (undefined === a) return (a: Awaitable<V[]>) => reduca(f, state, a);
  return (async function () {
    a = await a;
    let i = 0;
    for await (const v of a) state = await f(state, v, i++, a);
    return state;
  })();
}
/**
 * Loop while updated truthy state and pipe into the looper, then return the last looper state.
 * @examples TODO
 * @deprecated
 */
export function loopa<V, R>(update: LoopaWhen<V>, body: LoopaBody<V, R>): Promise<R>;
/**
 * Loop while updated truthy state and pipe into the looper, then return the last looper state.
 * @examples TODO
 * @deprecated
 */
export function loopa<V, R>(update: LoopaWhen<V>): (body: LoopaBody<V, R>) => Promise<R>;
export function loopa<V, R>(update: LoopaWhen<V>, body?: LoopaBody<V, R>): any {
  if (undefined === body) return (body: LoopaBody<V, R>) => loopa(update, body);
  return (async function () {
    let state = null;
    let last = null;
    while ((state = await update(state))) last = await body(state);
    return last;
  })();
}

/**
 * apply Effect to value in async
 * @param fn effect function to input, returns is dropped
 * @returns the modified input
 * @example
 * snofa(5, effa(e=>e*2))            // => 5
 * snofa({n: 2}, effa(e=>{e.n = 4})) // => {n:4}
 */
export function effa<T extends any[], R>(fn: FunVa<T, R>): (...args: T) => Promise<R>;
export function effa<T extends any[], R>(fn: FunVa<T, R>): any {
  return async (...v: T) => (await funva(fn, ...v), await v[0]);
}

export async function loga<V>(a: Awaitable<V>): Promise<V> {
  console.log(await a);
  return a;
}
export async function jsonLoga<V>(a: Awaitable<V>): Promise<V>;
export async function jsonLoga<V>(a?: Awaitable<V>) {
  console.log(JSON.stringify(await a, null, 2));
  return a;
}

/**
 * @examples TODO
 * async cond function
 */
export function conda<T extends any[], R>(conds: Conda<T, R>[]): (...args: T) => Promise<R>;
export function conda<T extends any[], R>(conds: Conda<T, R>[]) {
  return async (...v: T) => {
    let cond: typeof conds[number];
    while ((cond = conds.shift())) {
      const fk = cond[0];
      const fv = cond[1];
      if (await funva(fk, ...v)) return await funva(fv, ...v);
    }
    return undefined;
  };
}
/**
 * @examples TODO
 * try got an value, execute if it's a functions
 */
export async function funva<T extends any[], R>(fv: FunVa<T, R>, ...args: T) {
  return typeof fv === "function" ? await (fv as () => R)() : fv;
}

// async function funVa<R, V>(fv: FunVa<R,V>, v?: V) {
//   return typeof fv === "function" ? await fv(v) : fv;
// }

// export async function ifa<V, R>([truthy, falsy]: [FunVa<R>, FunVa<R>]): (v: V) => Promise<R>;
// export async function ifa<V, R>([truthy, falsy]: [FunVa<R>, FunVa<R>],v: V) => Promise<R>;
// export async function ifa<V, R>([truthy, falsy]: any, fn: FunVa<boolean, V>) {
//   const test = typeof truthy === "function" ? await truthy() : truthy
//   if(test) return typeof truthy === "function" ? await truthy() : truthy;
//   else return typeof falsy === "function" ? await falsy() : falsy;
// }

/**
 * @experiment
 * @examples TODO
 * @param message
 */
export function throwa(message?: string) {
  throw new Error(message);
}
// same as Promise.all(...) or Object.entries()
// export function awaita<T extends [promise]>(a: T);
// export function awaita<T extends [promise]>(a: any) {

// }

export function validPipor(fn) {
  return (s, ...args) => s && fn(s, ...args);
}
export function limiter(fn, wait = 1e3, last = 0) {
  return async (...args) => {
    const remain = last + wait - +new Date();
    while (remain > 0) await new Promise((r) => setTimeout(r, remain));
    const r = await fn(...args);
    last = +new Date();
    return r;
  };
}

/**
 * @examples TODO
 * @returns the changed value when input value changed, otherwise return undefined.
 */
export function edgeFilter<T>(init?: T) {
  return (e?: T) => (e !== init ? (init = e) : undefined);
}
