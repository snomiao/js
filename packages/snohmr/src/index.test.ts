import esMain from "es-main";
import { writeFile } from "fs/promises";
import path from "path";
import { packageDirectory } from "pkg-dir";
import readFileUtf8 from "read-file-utf8";
import { describe, expect, it } from "vitest";
import snohmr from "./index";
describe("snohmr", () => {
  const json = '"JSON"';
  const parsed = "JSON";
  it("test parse", async () => {
    expect((await import("./demo/parse")).default(json)).eq(parsed);
  });
  it("test parse with snohmr", async () => {
    for await (const { default: parse } of snohmr(() => import("./demo/parse"))) {
      expect(parse(json)).eq(parsed);
      break;
    }
  });
  it("test hmr reload with snohmr", async () => {
    if (!esMain(import.meta)) return;
    let k = 0;
    const parserPath = `${await packageDirectory({
      cwd: path.parse(import.meta.url.replace("file:///", "")).dir,
    })}/src/demo/parse.ts`;
    //
    const reloadedParsers = new Set([]);
    for await (const { default: parse } of snohmr(() => import("./demo/parse"))) {
      // should load a new parser
      const size = reloadedParsers.size;
      reloadedParsers.add(parse);
      expect(reloadedParsers.size).greaterThan(size);

      // and try parse
      expect(parse(json)).eq(parsed);
      // and touch the file to trigger snohmr, simulate debugging

      setTimeout(() => touch(parserPath), 100);
      k += 1;
      if (k > 1) break;
      // should spent about 3s to test
    }
    // ok
  });
});
async function touch(filepath: string) {
  await writeFile(filepath, await readFileUtf8(filepath));
}
