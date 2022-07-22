import { mapVal } from "./mapVal";
type Obj<T extends Record<PropertyKey, any> = Record<PropertyKey, any>> = T;
type Keys<O> = (keyof O)[];
type Vals<O> = O[keyof O][];
type AOJ<J extends Record<PropertyKey, any>> = J[];
type JOA<J> = Record<keyof J, J[keyof J][]>;
export default function objTranspose<O extends Obj>(aoj: AOJ<O>): JOA<O>;
export default function objTranspose<O extends Obj>(joa: JOA<O>): AOJ<O>;
export default function objTranspose(obj: any) {
  return Array.isArray(obj) ? aoj2joa(obj) : joa2aoj(obj);
}

export function aoj2joa<O extends Obj>(aoj: AOJ<O>): JOA<O> {
  const r: any = {};
  const length = aoj.length;
  aoj.map((j, i) => mapVal((v, k) => ((r[k] = r[k] || Array(length).fill(undefined))[i] = v), j));
  return r;
}
/**
 * @param joa Object of arrays {
    a: [1, 2, 3],
    b: [2, undefined, undefined],
    c: [null, 3, 4],
  }
 * @returns array of objects [
      { a: 1, b: 2, c: null },
      { a: 2, c: 3 },
      { a: 3, c: 4 },
    ]
 */
export function joa2aoj<O extends Obj>(joa: JOA<O>): AOJ<O> {
  const r = [];
  mapVal((a, k) => a.map((v, i) => (r[i] = { ...r[i], [k]: v })), joa);
  return r;
}

/**
 * please use aoa2aojEx since typescript is not so mature as array content type can be captured
 * @param [head, ...body] parse table head and bodyjz
 * @example 
 * // please use [head, ...body] as params so that you can got the correct result type.
 * const aoa = [
    ["a", "b", "c"],
    [1, 2, null],
    [2, undefined, 3],
    [3, undefined, 4],
  ] as const;
  console.log(aoa2aoj([aoa[0], ...aoa.slice(1)]))
 * @returns
 */
export function aoa2aoj<O extends Obj>([head, ...body]: [
  Readonly<(keyof O)[]>,
  ...Readonly<O[keyof O][]>[],
]): AOJ<O> {
  return body.map((row) => Object.fromEntries(row.map((cell, i) => [head[i], cell]))) as any;
}
export function aoa2joa<O extends Obj>([head, ...body]: [
  Readonly<(keyof O)[]>,
  ...Readonly<O[keyof O][]>[],
]): JOA<O> {
  return aoj2joa(aoa2aoj([head, ...body]));
}
