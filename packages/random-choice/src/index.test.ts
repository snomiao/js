import { expect, it } from "vitest";
import randomChoiced, { randomKeyChoose } from ".";
it("random-choice", () => {
  const a = [3, 4, 5, 6];

  console.log(randomChoiced(a)); // one of 3, 4, 5, 6
  console.log(randomKeyChoose(a)); // one of 0, 1, 2, 3

  expect(a.includes(randomChoiced(a))).toBe(true);
  expect([...a.keys()].includes(randomKeyChoose(a))).toBe(true);

  expect(randomChoiced(null)).toBe(undefined);
  expect(randomKeyChoose(null)).toBe(undefined);

  expect(randomChoiced([])).toBe(undefined);
  expect(randomKeyChoose([])).toBe(undefined);

  const obj = { a: "q", s: "w", d: "e", f: "r" };
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  console.log(randomChoiced(obj)); // one of q,w,e,r
  console.log(randomKeyChoose(obj)); // one of a,s,d,f

  expect(values.includes(randomChoiced(obj))).toBe(true);
  expect(keys.includes(randomKeyChoose(obj))).toBe(true);

  expect(randomChoiced(null)).toBe(undefined);
  expect(randomKeyChoose(null)).toBe(undefined);

  expect(randomChoiced({})).toBe(undefined);
  expect(randomKeyChoose({})).toBe(undefined);
});
