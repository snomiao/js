/* eslint-disable max-len */
import { Awaitable } from "./types";
type af<i, o> = ((i: i, ...args: any[]) => Awaitable<o>) | (() => Awaitable<o>);
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, o>(): Promise<void>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, o>(f1: af<i, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, o>(f1: af<i, T1>, f2: af<T1, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, T26>, f27: af<T26, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, T26>, f27: af<T26, T27>, f28: af<T27, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, T26>, f27: af<T26, T27>, f28: af<T27, T28>, f29: af<T28, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, T26>, f27: af<T26, T27>, f28: af<T27, T28>, f29: af<T28, T29>, f30: af<T29, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, T26>, f27: af<T26, T27>, f28: af<T27, T28>, f29: af<T28, T29>, f30: af<T29, T30>, f31: af<T30, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, o>(f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, T26>, f27: af<T26, T27>, f28: af<T27, T28>, f29: af<T28, T29>, f30: af<T29, T30>, f31: af<T30, T31>, f32: af<T31, o>): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, o>(i: i): Promise<i>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, o>(i: i, f1: af<i, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, o>(i: i, f1: af<i, T1>, f2: af<T1, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, T26>, f27: af<T26, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, T26>, f27: af<T26, T27>, f28: af<T27, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, T26>, f27: af<T26, T27>, f28: af<T27, T28>, f29: af<T28, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, T26>, f27: af<T26, T27>, f28: af<T27, T28>, f29: af<T28, T29>, f30: af<T29, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, T26>, f27: af<T26, T27>, f28: af<T27, T28>, f29: af<T28, T29>, f30: af<T29, T30>, f31: af<T30, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, o>(i: i, f1: af<i, T1>, f2: af<T1, T2>, f3: af<T2, T3>, f4: af<T3, T4>, f5: af<T4, T5>, f6: af<T5, T6>, f7: af<T6, T7>, f8: af<T7, T8>, f9: af<T8, T9>, f10: af<T9, T10>, f11: af<T10, T11>, f12: af<T11, T12>, f13: af<T12, T13>, f14: af<T13, T14>, f15: af<T14, T15>, f16: af<T15, T16>, f17: af<T16, T17>, f18: af<T17, T18>, f19: af<T18, T19>, f20: af<T19, T20>, f21: af<T20, T21>, f22: af<T21, T22>, f23: af<T22, T23>, f24: af<T23, T24>, f25: af<T24, T25>, f26: af<T25, T26>, f27: af<T26, T27>, f28: af<T27, T28>, f29: af<T28, T29>, f30: af<T29, T30>, f31: af<T30, T31>, f32: af<T31, o>): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, o>(...afnChain: [af<i, any>, ...af<any, any>[], af<any, o>]): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, o>(i: i, ...afnChain: [af<i, any>, ...af<any, any>[], af<any, o>]): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, o>(...afnChain: [af<i, any>, ...af<any, any>[], af<any, o>]): af<i, o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa<i, o>(i: i, ...afnChain: [af<i, any>, ...af<any, any>[], af<any, o>]): Promise<o>;
/**
 * functional pipe async
 * @example await snofa(1, e=>e*2, String) === '4'
 */
export function snofa(...afnChain: any): any {
  if (typeof afnChain[0] === "function")
    return async (s: any) => {
      for await (const af of afnChain) s = await af(s);
      return s;
    };
  return (async (s: any) => {
    for await (const af of afnChain.slice(1)) s = await af(s);
    return s;
  })(afnChain[0]);
}
