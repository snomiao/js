import { Conda, evala } from "./index";

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
      if (await evala(fk, ...v)) return await evala(fv, ...v);
    }
    return undefined;
  };
}
