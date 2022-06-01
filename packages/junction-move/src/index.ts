/**
 * Copyright © 2020 snomiao@gmail.com
 */
import { resolve } from "path";
import snorun from "snorun";
export default main;
async function main(source: string, target: string) {
  await snorun(`chcp 65001`);
  if (!(source && target)) throw new Error("empty imput");
  resolve();
  try {
    await snorun(`robocopy "${source}" "${target}" /MOVE /E`);
  } catch (e) {
    console.error("robocopy FAILS, make sure you have the permission to access the source folder");
  }
  try {
    await snorun(`mklink /J "${source}" "${target}"`);
  } catch (e) {
    console.error("mklink FAILS, make sure you have the permission to access the source folder");
  }
  return "done";
}
