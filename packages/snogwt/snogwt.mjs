#!/usr/bin/env node

import arg from "arg";
import execSh from "exec-sh";
import { readFile, writeFile } from "fs/promises";
import { parse, resolve } from "path";

export const cli = async (rawArgv) => {
  const [node, js, ...argv] = rawArgv;
  // parse args
  const opts = {
    "--remove": Boolean,
    "--list": Boolean,
    "--no-vscode": Boolean,
    "--version": Boolean,
    "-n": "--no-vscode",
    "-l": "--list",
    "-v": "--version",
  };
  const args = arg(opts, { argv });
  const { remove = args["--remove"], list = args["--list"], version = args["--version"] } = {};
  const [branch, more] = args._;

  if (version) {
    const pkg = await readFile(resolve(parse(js).dir, "package.json"), "utf8").then(JSON.parse);
    console.log(`v${pkg.version}`);
    return;
  }

  if (more) throw new Error("no more params");
  if (!branch) return await execSh.promise("git worktree list");
  // try cd to the top working dir without "worktrees" nested
  process.chdir(process.cwd().replace(/[\\/]worktrees[\\/].*/, ""));

  // list worktrees
  if (list) return await execSh.promise("git worktree list ");

  // find repo dir and repo name
  const top = await execSh
    .promise("git rev-parse --show-toplevel", true)
    .then((e) => e.stdout.trim());
  if (!top) throw new Error("fail to get git rev-parse --show-toplevel");
  const repodir = resolve(top); /* process.cwd() */
  const repodirname = parse(repodir).name;

  // ensure root ignore /worktrees
  const ignoreFile = resolve(`${repodir}/.gitignore`);
  const ignore = await readFile(ignoreFile, "utf-8");
  if (!ignore.match(/^\/worktrees$/im)) await writeFile(ignoreFile, `${ignore}\n` + `/worktrees`);

  // // generate worktree
  const worktree = resolve(`${top}/worktrees/${branch}@${repodirname}`);

  // try checkout branch and get the path
  const checkoutPath = await execSh
    .promise(`git worktree add -B ${branch} ${worktree}`, true)
    .then(() => worktree)
    .catch((e) => {
      if (e) {
        // handle checked out
        const [m, branch, worktree] = e.stderr?.match?.(
          /fatal: '(.*?)' is already checked out at '(.*?)'/,
        );
        if (m) {
          console.warn(`fatal: '${branch}' is already checked out at '${worktree}'`);
          return resolve(worktree);
        }
      }
      console.error("Error: ", e);
      throw new Error("Fail to checkout");
    });

  // remove if needed
  if (remove) {
    console.log(`removeing ${checkoutPath}`);
    return await execSh.promise(`git worktree remove ${checkoutPath}`);
  }

  if (args["--no-vscode"]) return;

  await execSh.promise(`cd ${checkoutPath} && code .`).catch(() => null);
};

await cli(process.argv);
