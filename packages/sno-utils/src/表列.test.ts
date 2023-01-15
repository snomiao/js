import { pipe } from "rambda";
import { expect, it } from "vitest";
import { 列交, 列值种数表, 列列翻转, 表列键交, 表键映 } from "./表列";
it("passed", () => {
  expect(
    列交([
      [1, 2, 3],
      [2, 3, 4],
    ]),
  ).equal([2, 3]);
  expect(
    表列键交([
      { a: 1, b: 2 },
      { b: 3, c: 4 },
    ]),
  ).equal(["b"]);
  expect(
    列列翻转([
      [1, 2],
      [3, 4],
    ]),
  ).equal([
    [1, 3],
    [2, 4],
  ]);
  expect(
    列列翻转(
      列列翻转([
        [1, 2],
        [3, 4],
      ]),
    ),
  ).equal([
    [1, 2],
    [3, 4],
  ]);
  expect(pipe(() => [1, 2, 3, 3, 3, 2, ""], 列值种数表)()).equals({ 1: 1, 2: 2, 3: 3, "": 1 });
  expect(
    pipe(
      () => ({ a: 1, b: 2 }),
      表键映((k): string => `${k.toString()}${k.toString()}`),
    )(),
  ).equals({
    aa: 1,
    bb: 2,
  });

  console.log("test ok");
});
