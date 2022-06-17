#!/usr/bin/env node
import arg from "arg";
import { exec } from "child_process";
import path from "path";

await cli();

export async function cli(rawArgv = process.argv) {
  const opts = {
    "--remove": Boolean,
    "--list": Boolean,
    "--no-vscode": Boolean,
    "-n": "--no-vscode",
    "-l": "--list",
  };

  const [node, js, ...argv] = rawArgv;
  const args = arg(opts, { argv });
  const eslintrcPath = path
    .resolve(path.parse(js).dir, "./conf/.eslintrc.json")
    .replace(/\\/g, "/");
  const cmd = `eslint -c ${eslintrcPath} --ext js --no-color -f json .`;
  const result = await execStdout(cmd);
  console.log(JSON.stringify(JSON.parse(result), null, 4));
}
async function execStdout(cmd: string) {
  return await new Promise<string>((resolve, reject) =>
    exec(cmd, (err, stdout, stderr) => (stderr ? reject(stderr) : resolve(stdout))),
  );
}
