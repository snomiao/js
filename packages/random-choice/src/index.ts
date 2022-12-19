export default function randomChoose<T extends any[]>(a: T): T[number];
export default function randomChoose<T extends Record<any, any>>(a: T): T[any];
export default function randomChoose(a: any) {
  if (!a) return undefined;
  return a[randomKeyChoose(a)];
}

export function randomKeyChoose<T extends any[]>(a: T): number;
export function randomKeyChoose<T extends Record<any, any>>(a: T): keyof T;
export function randomKeyChoose(a: any) {
  if (a instanceof Array) {
    if (a?.length) return (a.length * Math.random()) | 0;
    return undefined;
  }
  if (!a) return undefined;
  return randomChoose(Object.keys(a));
}
