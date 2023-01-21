export default function aswitcher<Cond extends string, Map extends Record<Cond, () => any>>(
  cond: Cond,
  map: Map,
): ReturnType<Map[Cond]> {
  return map[cond]?.();
}
