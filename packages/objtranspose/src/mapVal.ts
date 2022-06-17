const { entries, fromEntries } = Object;
export function mapVal<K extends PropertyKey, V, R>(
  fn: (v: V, k: K, a: Record<K, V>) => R,
): (a: Record<K, V>) => R;
export function mapVal<K extends PropertyKey, V, R>(
  fn: (v: V, k: K, a: Record<K, V>) => R,
  a: Record<K, V>,
): R;
export function mapVal<K extends PropertyKey, V, R>(fn: any, a?: any) {
  if (undefined === a) return (a: Record<K, V>) => mapVal(fn, a);
  return fromEntries(entries(a).map(([k, v]) => [k, fn(v, k, a)]));
}
