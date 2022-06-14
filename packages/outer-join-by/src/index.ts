import { DataFrame } from "data-forge";
/**
 * @author: snomiao <snomiao@gmail.com>
 */
export default function outerJoinBy<T1, T2>(key: string, a1: T1[], a2: T2[]) {
  type empty = Record<string, never>;
  return new DataFrame(a1)
    .joinOuter(
      new DataFrame(a2),
      (e) => e[key],
      (e) => e[key],
      (a, b) => ({ ...a, ...b }),
    )
    .toArray() as ((T1 | empty) & (T2 | empty))[];
}
