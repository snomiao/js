import { execAndLog } from "async-exec";
import fsp from "fs/promises";
import "p-map";
import pMap from "p-map";
import { types } from "./src/index";

await pMap(types, async (type) => {
  const targetFile = `dist/cli-${type}.mjs`;
  const r = await execAndLog(`npm pkg set bin.${type}="${targetFile}"`);
  return await fsp
    .copyFile("dist/cli.mjs", targetFile)
    .then((e) => console.log(`cli-${type} seted up`));
});

console.log("post build done");
