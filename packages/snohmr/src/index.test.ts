import { expect, it } from "vitest";
import snohmr from "./index";
it("prints hello, world, and return true", async () => {
  expect(
    await snohmr<typeof import("./consoleLog")>("src/consoleLog.ts", async (m) => {
      m.default("hello, world"); //prints hello, world to stdout
      return true; // return true
    }),
  ).toBe(true);
});
