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
type FunVa<R, Args = any> = ((...args: Args[]) => Promi<R>) | (() => Promi<R>) | Promi<R>;
type Conda<R, Args = any> = [FunVa<boolean, Args>, (() => Promi<R>) | R];
type MapaIter<V, R> = (v: V, i: number, a: V[]) => Promi<R>;
type ForaIter<V> = (v: V, i: number, a: V[]) => Promi<void>;
type ReducaIter<S, V> = (state: S, v: V, i: number, a: V[]) => Promi<S>;
type LoopaWhen<T> = (oldState: T) => Promi<void | T>;
type LoopaBody<V, R> = (v: V) => Promi<R>;

// TODO: iter objects
// TODO: test
/**
 * map arrays async
 * @example 
 */
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
 * @deprecated
 */
export function loopa<V, R>(update: LoopaWhen<V>, body: LoopaBody<V, R>): Promise<R>;
/**
 * Loop while updated truthy state and pipe into the looper, then return the last looper state.
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
export async function loga<V>(a: Promi<V>): Promise<V>;
export async function loga<V>(a?: Promi<V>) {
  console.log(await a);
  return a;
}
export async function jsonLoga<V>(a: Promi<V>): Promise<V>;
export async function jsonLoga<V>(a?: Promi<V>) {
  console.log(JSON.stringify(await a, null, 2));
  return a;
}
/**
 * async cond
 */
export function switcha<R>(conds: Conda<R, void>[]): () => Promise<R>;
/**
 * async cond
 */
export function switcha<V, R>(conds: Conda<R, V>[]): (v: V) => Promise<R>;
export function switcha<V, R>(conds: Conda<R, V>[]) {
  return async (v?: V) => {
    let cond: typeof conds[number];
    while ((cond = conds.shift())) {
      const fv = cond[0]
      // const test = await funVa<R, V>(fv, v);
      if (test) return typeof cond[1] === "function" ? await (cond[1] as () => R)() : cond[1];
    }
    return undefined;
  };
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
export function throwa(message?: string) {
  throw new Error(message);
}
