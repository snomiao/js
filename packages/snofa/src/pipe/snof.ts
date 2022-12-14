// import { L } from "ts-toolbelt";
// import { NonNullable, NonNullableDeep, NonNullablePart } from "ts-toolbelt/out/List/NonNullable";
// import { List } from "../List";

// /* eslint-disable max-len */
// // export type Function<Args extends List, o> = (...args: Args) => o;
// // type f<Args extends List = List, o = any> = Function<Args, o>;

// type f<i extends readonly any[] = any[], o = any> = (...i: i) => o;
// type nf<T extends void | f> = void extends T ? void : f<[r<Exclude<T, void>>]>;
// type p<T extends void | f> = void extends T ? void : Parameters<Exclude<T, void>>;
// type r<T extends void | f> = void extends T ? void : ReturnType<Exclude<T, void>>;
// type ef<f0 extends f | any> = f0 extends f ? nf<f0> : (i: f0) => any;
// type test = f extends any ? 1 : 0;
// export function snof<
//   f0 extends f | any,
//   f1 extends void | ef<f0>,
//   f2 extends void | nf<f1>,
//   f3 extends void | nf<f2>,
//   f4 extends void | nf<f3>,
//   f5 extends void | nf<f4>,
//   f6 extends void | nf<f5>,
//   f7 extends void | nf<f6>,
//   f8 extends void | nf<f7>,
//   f9 extends void | nf<f8>,
//   f10 extends void | nf<f9>,
//   f11 extends void | nf<f10>,
//   f12 extends void | nf<f11>,
//   f13 extends void | nf<f12>,
//   f14 extends void | nf<f13>,
//   f15 extends void | nf<f14>,
//   f16 extends void | nf<f15>,
//   T extends L.List = [f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16],
//   validFn extends L.List = L.Filter<T, f, "extends->">,
//   lastfn extends f = L.Last<validFn>,
//   o extends r<lastfn> = r<lastfn>
// >(
//   ...f: [f0?, f1?, f2?, f3?, f4?, f5?, f6?, f7?, f8?, f9?, f10?, f11?, f12?, f13?, f14?, f15?, f16?]
// ): f0 extends f ? f<p<f0>, o> : o;
// // export function snof<T0, o>(i: T0, ...fnChain: [f<[T0], any>, ...f[], f<List, o>]): o;
// export function snof(...fnChain: any): any {
//   if (typeof fnChain[0] === "function") return (i: any) => fnChain.reduce((v, f) => f(v), i);
//   else return fnChain.slice(1).reduce((v, f) => f(v), fnChain[0] as any);
// }

// // {
// //   // empty call
// //   snof() === undefined;
// //   // fn1
// //   snof((v = 0) => v * 12)(12).toFixed() === "144";
// //   snof(
// //     (v = 0) => v * 12,
// //     (e) => e
// //   )(12).toFixed();
// //   // vfn1
// //   snof(12, (v) => v * 12).toFixed();
// //   // fn1
// //   // vfn1
// //   snof(12, (v) => v * 12).toFixed();

// //   // fn2
// //   snof(
// //     () => 12,
// //     (v) => v * 12
// //   )();

// //   // fn2fn
// //   snof(
// //     () => 12,
// //     snof((v) => v * 12)
// //   );
// // }
