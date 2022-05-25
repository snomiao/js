import { readFile } from "fs/promises";
import { parse, resolve } from "path";

export async function versionShow(js) {
  const pkg = await readFile(resolve(parse(js).dir, "package.json"), "utf8").then(JSON.parse);
  console.log(`v${pkg.version}`);
  return;
}
