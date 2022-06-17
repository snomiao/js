/* eslint-disable max-len */
import { strictEqual } from "assert";
import { snof } from "./snof";
import { snofa } from "./snofa";

it("pipe number", () =>
  strictEqual(
    snof(12, (v) => v * 12),
    144
  ));
it("pipe number async", async () => strictEqual(await snofa(12, (v) => v * 12), 144));
it("calls pipe number", () => {
  strictEqual(snof((v: number) => v * 12)(12), 144);
});
it("calls pipe number async", async () => {
  strictEqual(await snofa((v: number) => v * 12)(12), 144);
});
it("calls number generator pipe", () => {
  strictEqual(
    snof(
      () => 12,
      (v) => v * 12
    )(),
    144
  );
});
it("calls number generator pipe async", async () => {
  strictEqual(
    await snofa(
      () => 12,
      (v) => v * 12
    )(),
    144
  );
});

it("calls pipe number generator nested pipe", () => {
  strictEqual(
    snof(
      () => 12,
      snof((v) => v * 12)
    )(),
    144
  );
});
it("calls pipe number generator nested pipe async", async () => {
  strictEqual(
    await snofa(
      () => 12,
      snofa((v) => v * 12)
    )(),
    144
  );
});
