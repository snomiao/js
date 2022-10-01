import { Evalable, evala } from "./index";
import { List } from "./List";
/**
 * apply Effect to value in async
 * @param fn effect function to input, returns is dropped
 * @returns the modified input
 * @example
 * snofa(5, effa(e=>e*2))            // => 5
 * snofa({n: 2}, effa(e=>{e.n = 4})) // => {n:4}
 */
export function executa<T extends List, R>(fn: Evalable<R, T>): (...args: T) => Promise<R>;
export function executa<T extends List, R>(fn: Evalable<R, T>): any {
  return async (...v: T) => (await evala(fn, ...v), await v[0]);
}
