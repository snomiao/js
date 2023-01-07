/* eslint-disable max-len */
import { List } from "./List";
import { AwaitableFunction, snofa } from "./pipe/snofa";
import { Awaitable } from "./types";
export { default as mapa } from "./obj/mapa";
export { snofa };

export default snofa;
type Dictionary<T extends Record<PropertyKey, any> = Record<PropertyKey, any>> = T;
export type Evalable<R, Args extends List = []> = AwaitableFunction<Args, R> | Awaitable<R>;
export type Conda<Args extends any[], R> = [Evalable<boolean, Args>, Evalable<R, Args>];
type ReducaIter<S, V> = (state: S, v: V, i: number, a: V[]) => Awaitable<S>;

// expriment
type LoopaWhen<T> = (state: T) => Awaitable<T | void>;
type LoopaBody<V, R> = (v: V) => Awaitable<R>;
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
 * try got an value, execute if it's a functions
 */
export async function evala<Args extends List, R>(evalable: Evalable<R, Args>, ...args: Args) {
  return await (typeof evalable === "function" ? (evalable as any)(...args) : evalable);
}
// export async function switcha<V, R>([truthy, falsy]: [Evalable<R,[V]>, Evalable<R,[V]>]): (v: Evalable< V>) => Promise<R>
// export async function switcha<V, R>([truthy, falsy]: [Evalable<R,[V]>, Evalable<R,[V]>], v: Evalable< V>) => Promise<R>
export async function switcha<V, R>(
  [truthy, falsy]: [Evalable<R, [V]>, Evalable<R, [V]>],
  evalable?: Evalable<V>,
) {
  if (undefined === evalable) return (evalable) => switcha(evalable);
  const test = await evala(evalable);
  return test ? evala(truthy, test) : evala(falsy, test);
}

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
