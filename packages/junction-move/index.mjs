/**
 * Copyright © 2020 snomiao@gmail.com
 */

import { exec } from "child_process";
import { promisify } from "util";
import yargs from "yargs";
const aexec = promisify(exec);
async function main() {
  await aexec(`chcp 65001`);
  // READING PARAMS
  const argv = yargs
    .usage("Usage: npx junction-move source_folder target_folder")
    .example("junction-move C:\\Go D:\\Go")
    .example("npx junction-move C:\\Go D:\\Go")
    .help("h")
    .alias("h", "help")
    .epilog("Copyright (c) 2020 snomiao@gmail.com").argv;

  if (argv._.length !== 2) {
    console.error("Expected 2 arguments but got ", argv._.length, ", you can use -h to learn why.");
    console.error("Got arguments: ", argv._);
    console.error(
      'Extra notice: npx junction-move ... dont support the path with spaces yet even you have included them in ".." ',
    );
    console.error(
      'If you want to solve that you can type "npm install junction-move -g" and then use just "junction-move source_folder target_folder" to handle this.',
    );
    return "FAIL";
  }

  const [source, target] = argv._;
  try {
    await aexec(`robocopy "${source}" "${target}" /MOVE /E`, { stdio: "inherit" });
  } catch (e) {
    console.error("robocopy FAILS, make sure you have the permission to access the source folder");
  }
  try {
    await aexec(`mklink /J "${source}" "${target}"`, { stdio: "inherit" });
  } catch (e) {
    console.error("mklink FAILS, make sure you have the permission to access the source folder");
  }
  return "done";
}
export default main;
