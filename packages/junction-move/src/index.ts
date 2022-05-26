/**
 * Copyright © 2020 snomiao@gmail.com
 */
import { execa } from "execa";
import { resolve } from "path";
export default main;
async function main(source: string, target: string) {
  await execa(`chcp 65001`);
  if (!(source && target)) throw new Error("empty imput");
  resolve();
  try {
    await call(`robocopy "${source}" "${target}" /MOVE /E`);
  } catch (e) {
    console.error("robocopy FAILS, make sure you have the permission to access the source folder");
  }
  try {
    await call(`mklink /J "${source}" "${target}"`);
  } catch (e) {
    console.error("mklink FAILS, make sure you have the permission to access the source folder");
  }
  return "done";
}
async function call(cmd: string) {
  const p = execa(cmd);
  p.stdout.pipe(process.stdout);
  return await p;
}
