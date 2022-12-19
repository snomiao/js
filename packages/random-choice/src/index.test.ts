import { expect, it } from "vitest";
import randomChoiced, { randomChoiceKey } from ".";
it("random-choice", () => {
  const a = [3, 4, 5, 6];

  console.log(randomChoiced(a)); // one of 3, 4, 5, 6
  console.log(randomChoiceKey(a)); // one of 0, 1, 2, 3

  expect(a.includes(randomChoiced(a))).toBe(true);
  expect([...a.keys()].includes(randomChoiceKey(a))).toBe(true);

  expect(randomChoiced(null)).toBe(undefined);
  expect(randomChoiceKey(null)).toBe(undefined);

  expect(randomChoiced([])).toBe(undefined);
  expect(randomChoiceKey([])).toBe(undefined);

  const obj = { a: "q", s: "w", d: "e", f: "r" };
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  console.log(randomChoiced(obj)); // one of q,w,e,r
  console.log(randomChoiceKey(obj)); // one of a,s,d,f

  expect(values.includes(randomChoiced(obj))).toBe(true);
  expect(keys.includes(randomChoiceKey(obj))).toBe(true);

  expect(randomChoiced(null)).toBe(undefined);
  expect(randomChoiceKey(null)).toBe(undefined);

  expect(randomChoiced({})).toBe(undefined);
  expect(randomChoiceKey({})).toBe(undefined);
});
