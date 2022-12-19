import path from "path";
import { describe, expect, it } from "vitest";
import snohmr from "./index";

import { packageDirectory } from "pkg-dir";

describe("test snohmr", async () => {
  const dir = path.parse(import.meta.url.replace("file:///", "")).dir;
  const pkgdir = await packageDirectory({ cwd: dir });

  it("load consoleLog.ts, and prints 'hello, world', and return true", async () => {
    expect(
      await snohmr<typeof import("./consoleLog")>(`${pkgdir}/src/consoleLog.ts`, async (m) => {
        m.default("hello, world"); //prints hello, world to stdout
        return true; // return true
      }),
    ).toBe(true);
  });
});
