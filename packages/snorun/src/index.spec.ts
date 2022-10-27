import { expect, it } from "vitest";
import snorun from "./index";

it("echo", async () => {
  expect(
    ((await snorun("echo asdf")) && (await snorun("echo succ"))) || (await snorun("echo fail")),
  ).toBe(true);
});

it("stdout", async () => {
  expect(await snorun("echo asdf").stdout).toBe("asdf");
});
