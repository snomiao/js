#!/usr/bin/env node

import arg from "arg";
import { exec } from "child_process";
import { readFile } from "fs/promises";
import path from "path";

await cli();

export async function cli(rawArgv = process.argv) {
  const opts = {
    "--remove": Boolean,
    "--list": Boolean,
    "--no-vscode": Boolean,
    "--version": Boolean,
    "-n": "--no-vscode",
    "-l": "--list",
    "-v": "--version",
  };

  const [node, js, ...argv] = rawArgv;
  const args = arg(opts, { argv });
  const eslintrcPath = path
    .resolve(path.parse(js).dir, "./conf/.eslintrc.json")
    .replace(/\\/g, "/");
  // console.log(eslintrcPath);

  if (args["--version"]) return await versionShow(js);

  const lintcmd = `eslint -c ${eslintrcPath} --ext js --no-color -f json .`;
  const result = await new Promise((resolve, reject) =>
    exec(lintcmd, (err, stdout, stderr) => (stderr ? reject(stderr) : resolve(stdout))),
  );
  console.log(JSON.stringify(JSON.parse(result), null, 4));
}

async function versionShow(js) {
  const pkg = await readFile(path.resolve(path.parse(js).dir, "package.json"), "utf8").then(
    JSON.parse,
  );
  console.log(`v${pkg.version}`);
  return;
}
// pnpm i @typescript-eslint/eslint-pluginu

// pnpm i @typescript-eslint/parseru
