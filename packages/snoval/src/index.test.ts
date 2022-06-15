import { strictEqual } from "assert";
import { asyncMap } from "./asyncFn";
import asyncValue from "./index";
it("number pipe valueOf", async () => {
  strictEqual(
    await asyncValue(12)
      .pipe((v) => v * 12)
      .valueOf(),
    144,
  );
});

it("number pipe value", async () => {
  strictEqual(await asyncValue(12).pipe((v) => v * 12).value, 144);
});

it("number multi pipe value", async () => {
  strictEqual(
    await asyncValue(1)
      .pipe((n) => n / 2)
      .pipe((n) => n.toString())
      .pipe((s) => s.split("."))
      .pipe((a) => asyncMap(a, Number))
      // .pipe(Array.prototype.reverse)
      .value,
    [5, 0],
  );
});
