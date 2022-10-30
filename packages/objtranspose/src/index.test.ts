import { it } from "vitest";
import objTranspose, { aoa2aoj, aoa2joa, aoj2joa, joa2aoj } from ".";

const aoj = [
  { a: 1, b: 2, c: null },
  { a: 2, c: 3 },
  { a: 3, c: 4 },
];
const joa = {
  a: [1, 2, 3],
  b: [2, undefined, undefined],
  c: [null, 3, 4],
};
const aoa = [
  ["a", "b", "c"],
  [1, 2, null],
  [2, undefined, 3],
  [3, undefined, 4],
] as const;

const throws = () => {
  throw new Error("");
};
const shouldEq = (a, b) => JSON.stringify(a) === JSON.stringify(b) || throws();
//
it("use aoj2joa transpose ArrayOfObject to ObjectOfArray", () => {
  shouldEq(aoj2joa(aoj), joa);
});
it("use joa2aoj transpose ObjectOfArray to ArrayOfObject", () => {
  shouldEq(aoj, joa2aoj(joa));
});
it("use objtranspose transpose ArrayOfObject to ObjectOfArray", () => {
  shouldEq(objTranspose(aoj), joa);
});
it("use objtranspose transpose ObjectOfArray to ArrayOfObject", () => {
  shouldEq(aoj, objTranspose(joa));
});
it("use objtranspose transpose ArrayOfObject twice and get it self", () => {
  shouldEq(objTranspose(objTranspose(aoj)), aoj);
});
it("use objtranspose transpose ObjectOfArray twice and get it self", () => {
  shouldEq(joa, objTranspose(objTranspose(joa)));
});
it("aoa2aoj", () => {
  shouldEq(aoa2aoj([aoa[0], ...aoa.slice(1)]), aoj);
});
it("aoa2joa ", () => {
  shouldEq(aoa2joa([aoa[0], ...aoa.slice(1)]), joa);
});
