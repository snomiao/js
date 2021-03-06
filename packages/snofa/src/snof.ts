/* eslint-disable max-len */
type f<i, o> = ((i: i, ...args: any[]) => o)|(() => o);
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, o>(): void;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, o>(f1: f<i, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, o>(f1: f<i, T1>, f2: f<T1, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, T26>, f27: f<T26, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, T26>, f27: f<T26, T27>, f28: f<T27, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, T26>, f27: f<T26, T27>, f28: f<T27, T28>, f29: f<T28, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, T26>, f27: f<T26, T27>, f28: f<T27, T28>, f29: f<T28, T29>, f30: f<T29, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, T26>, f27: f<T26, T27>, f28: f<T27, T28>, f29: f<T28, T29>, f30: f<T29, T30>, f31: f<T30, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, o>(f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, T26>, f27: f<T26, T27>, f28: f<T27, T28>, f29: f<T28, T29>, f30: f<T29, T30>, f31: f<T30, T31>, f32: f<T31, o>): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, o>(i: i): i;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, o>(i: i, f1: f<i, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, o>(i: i, f1: f<i, T1>, f2: f<T1, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, T26>, f27: f<T26, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, T26>, f27: f<T26, T27>, f28: f<T27, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, T26>, f27: f<T26, T27>, f28: f<T27, T28>, f29: f<T28, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, T26>, f27: f<T26, T27>, f28: f<T27, T28>, f29: f<T28, T29>, f30: f<T29, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, T26>, f27: f<T26, T27>, f28: f<T27, T28>, f29: f<T28, T29>, f30: f<T29, T30>, f31: f<T30, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, o>(i: i, f1: f<i, T1>, f2: f<T1, T2>, f3: f<T2, T3>, f4: f<T3, T4>, f5: f<T4, T5>, f6: f<T5, T6>, f7: f<T6, T7>, f8: f<T7, T8>, f9: f<T8, T9>, f10: f<T9, T10>, f11: f<T10, T11>, f12: f<T11, T12>, f13: f<T12, T13>, f14: f<T13, T14>, f15: f<T14, T15>, f16: f<T15, T16>, f17: f<T16, T17>, f18: f<T17, T18>, f19: f<T18, T19>, f20: f<T19, T20>, f21: f<T20, T21>, f22: f<T21, T22>, f23: f<T22, T23>, f24: f<T23, T24>, f25: f<T24, T25>, f26: f<T25, T26>, f27: f<T26, T27>, f28: f<T27, T28>, f29: f<T28, T29>, f30: f<T29, T30>, f31: f<T30, T31>, f32: f<T31, o>): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, o>(...fnChain: [f<i, any>, ...f<any, any>[], f<any, o>]): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, o>(i: i, ...fnChain: [f<i, any>, ...f<any, any>[], f<any, o>]): o;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, o>(...fnChain: [f<i, any>, ...f<any, any>[], f<any, o>]): f<i, o>;
/**
 * functional pipe
 * @example snof(1, e=>e*2, String) === '4'
 */
export function snof<i, o>(i: i, ...fnChain: [f<i, any>, ...f<any, any>[], f<any, o>]): o;
export function snof(...fnChain: any): any {
  if (typeof fnChain[0] === "function") return (i: any) => fnChain.reduce((v, f) => f(v), i);
  else return fnChain.slice(1).reduce((v, f) => f(v), fnChain[0] as any);
}
