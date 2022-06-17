import { mapVal } from "./mapVal";
export default function objTranspose<O extends Record<PropertyKey, any>>(
  aoj: O[],
): Record<keyof O, O[keyof O][]>;
export default function objTranspose<O extends Record<PropertyKey, any>>(
  joa: Record<keyof O, O[keyof O][]>,
): O[];
export default function objTranspose(obj: any) {
  return Array.isArray(obj) ? aoj2joa(obj) : joa2aoj(obj);
}
export function aoj2joa<O extends Record<PropertyKey, any>>(
  aoj: O[],
): Record<keyof O, O[keyof O][]> {
  const r: any = {};
  const length = aoj.length;
  aoj.map((j, i) => mapVal((v, k) => ((r[k] = r[k] || Array(length).fill(undefined))[i] = v), j));
  return r;
}
export function joa2aoj<O extends Record<PropertyKey, any>>(
  joa: Record<keyof O, O[keyof O][]>,
): O[] {
  const r = [];
  mapVal((a, k) => a.map((v, i) => (r[i] = { ...r[i], [k]: v })), joa);
  return r;
}
