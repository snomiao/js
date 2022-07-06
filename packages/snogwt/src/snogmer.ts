#!/usr/bin/env node

import snorun from "snorun";

// await cli(process.argv);

export async function snogmer() {
  const cmd = `git branch --show-current`;
  const branch = await commandExecStdoutGet(cmd);
  const superBranches = branch
    .replace("-feat", "")
    .split("-")
    .map((e, i, a) => a.slice(0, i + 1).join("-"));
  const upBranch = superBranches.reverse()[1];
  const mfBranch = await snorun(`git config branch.${branch}.merge-from`).stdout;
  upBranch && (await snorun(`git merge ${upBranch}`));
  mfBranch && (await snorun(`git merge ${mfBranch}`));
}
async function commandExecStdoutGet(cmd) {
  return (await snorun(cmd).stdout).trim();
}
