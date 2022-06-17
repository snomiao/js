import { it } from "mocha";
import objTranspose, { aoj2joa, joa2aoj } from "./objTrans";

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
