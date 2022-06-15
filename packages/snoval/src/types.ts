export type PromiseLiker<T> = PromiseLike<T> | T;
export type Iterater<V, R> = { (v: V, i: number, a: V[]): PromiseLiker<R> };
export type Reducer<V, R> = { (r: R, v: V, i: number, a: V[]): PromiseLiker<R> };
export type Looper<V> = { (v: V, i: number): PromiseLiker<void> };
export type Conder<R> = { (): PromiseLiker<R> };
