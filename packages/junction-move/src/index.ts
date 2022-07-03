/**
 * Copyright © 2020 snomiao@gmail.com
 */
import { resolve } from "path";
import snorun from "snorun";
export default junctionMove;
async function junctionMove(source: string, target: string) {
  await snorun(`chcp 65001`);
  if (!(source && target)) throw new Error("empty input or output");
  resolve();
  (true &&
    (await snorun(`robocopy "${source}" "${target}" /MOVE /E`)) &&
    (await snorun(`mklink /J "${source}" "${target}"`))) ||
    console.log("[JunctionMove] Fail to finish the move");
}
