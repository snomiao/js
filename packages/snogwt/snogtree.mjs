#!/usr/bin/env node

import arg from "arg";
import execSh from "exec-sh";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { cwdRepoFind } from "./cwdRepoFind.mjs";
import { tryCommands } from "./tryCommands.mjs";
import { tryInstallPackages } from "./tryInstallPackages.mjs";
import { versionShow } from "./versionShow.mjs";

await cli(process.argv);

export async function cli(rawArgv) {
  const [node, js, ...argv] = rawArgv;
  // parse args
  const opts = {
    "--remove": Boolean,
    "--force-remove": Boolean,
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

  if (version) return await versionShow(js);

  // check branch params
  if (more) throw new Error("no more params");
  if (!branch) return await execSh.promise("git worktree list");

  // try cd to the top working dir without "worktrees" nested
  const cwd = process.cwd();
  // cd to top
  process.chdir(process.cwd().replace(/[\\/]worktrees[\\/].*/, ""));

  // list worktrees
  if (list) return await execSh.promise("git worktree list");

  // find repo dir and repo name
  const { repodir, top, repodirname } = await cwdRepoFind();

  // ensure root ignore /worktrees
  await ignoresUpdate(repodir);

  // generate worktree path
  const worktree = resolve(`${top}/worktrees/${branch}@${repodirname}`);

  // create new branch from current branch
  process.chdir(cwd);

  // try checkout branch and get the path
  const checkoutPath = await execSh
    .promise(`git worktree add -B ${branch} ${worktree}`, true)
    .then(() => worktree)
    .catch((e) => {
      // handle checked out
      {
        const m = e?.stderr?.match?.(/fatal: '(.*?)' is already checked out at '(.*?)'/);
        if (m) {
          const [, branch, worktree] = m;
          console.warn(`fatal: '${branch}' is already checked out at '${worktree}'`);
          return worktree; // resolve(worktree); dont' resolve it as it replaced / into \
        }
      }
      {
        const m = e?.stderr?.match?.(/fatal: '(.*?)' already exists/);
        if (m) {
          const [, worktree] = m;
          console.warn(`fatal: '${worktree}' is already exists`);
          return resolve(worktree);
        }
      }
      console.error("Error: ", e);
      throw new Error("Fail to checkout");
    });

  // remove branch if requested
  if (remove) {
    console.log(`removeing ${checkoutPath}`);
    await execSh.promise(`git worktree remove ${checkoutPath}`);
    await execSh.promise(`git branch -d ${branch}`); // delete if fully merged
    return;
  }

  // remove branch if requested
  if (args["--force-remove"]) {
    console.log(`removeing ${checkoutPath}`);
    await tryCommands(
      `git worktree remove ${checkoutPath} --force`,
      `git branch -D ${branch}`,
      `rm -rf ${checkoutPath}`,
    );

    return;
  }

  if (args["--no-vscode"]) return;

  await execSh.promise(`cd ${checkoutPath} && code .`).catch(() => null);

  // install packages
  await tryInstallPackages(checkoutPath);
}
async function ignoresUpdate(repodir) {
  // gitignore
  await updateIgnoreFile(repodir, ".gitignore", { create: true });
  await updateIgnoreFile(repodir, ".eslintignore", { create: false });
  await updateIgnoreFile(repodir, ".prettierignore", { create: false });
}
async function updateIgnoreFile(repodir, ignoreFileName, { create }) {
  const ignoreFile = resolve(`${repodir}/${ignoreFileName}`);
  const ignore = await readFile(ignoreFile, "utf-8").catch(() => null);
  if (ignore === null && !create);
  else if (!ignore?.match(/^\/worktrees$/im))
    await writeFile(ignoreFile, `${(ignore || "").trim()}\n/worktrees\n`);
}
