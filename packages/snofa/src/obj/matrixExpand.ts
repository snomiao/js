export default function matrixExpand<T extends Record<string, any[]>>(matrix: T) {
  return Object.entries(matrix).reduce(
    (r, [k, a]) => r.flatMap((rv) => [...a.map((v) => ({ ...rv, [k]: v }))]),
    [{}] as {
      [k in keyof T]: T[k][number];
    }[],
  );
}
