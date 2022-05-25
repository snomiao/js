#!/usr/bin/env node

import arg from "arg";
import { exec } from "child_process";
import { promisify } from "util";
import { tryCommands } from "./tryCommands.mjs";

await cli(process.argv);

export async function cli(rawArgv) {
  const [node, js, ...argv] = rawArgv;
  // parse args
  const opts = {
    "--version": Boolean,
    "-v": "--version",
  };
  const args = arg(opts, { argv });
  const cmd = `git branch --show-current`;
  //   const [branch, more] = args._;
  const branch = await commandExecStdoutGet(cmd);
  const superBranches = branch
    .replace("-feat", "")
    .split("-")
    .map((e, i, a) => a.slice(0, i + 1).join("-"));
  const upBranch = superBranches.reverse()[1];
  const mfBranch = await commandExecStdoutGet(`git config branch.${branch}.merge-from`).catch(
    () => "",
  );
  upBranch && (await tryCommands(`git merge ${upBranch}`));
  mfBranch && (await tryCommands(`git merge ${mfBranch}`));
}
async function commandExecStdoutGet(cmd) {
  return (await promisify(exec)(cmd)).stdout.trim();
}
