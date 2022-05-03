#!/usr/bin/env node

import arg from "arg";
import execSh from "exec-sh";
import { readFile, writeFile } from "fs/promises";
import { parse, resolve } from "path";

await cli(process.argv);

export async function cli(rawArgv) {
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
  const { repodir, top, repodirname } = await repoFind();

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
          return resolve(worktree);
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
    return await execSh.promise(`git worktree remove ${checkoutPath}`);
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
    await writeFile(ignoreFile, `${ignore}\n` + `/worktrees`);
}

async function repoFind() {
  const top = await execSh
    .promise("git rev-parse --show-toplevel", true)
    .then((e) => e.stdout.trim());
  if (!top) throw new Error("fail to get git rev-parse --show-toplevel");
  const repodir = resolve(top); /* process.cwd() */
  const repodirname = parse(repodir).name;
  return { repodir, top, repodirname };
}

async function versionShow(js) {
  const pkg = await readFile(resolve(parse(js).dir, "package.json"), "utf8").then(JSON.parse);
  console.log(`v${pkg.version}`);
  return;
}

async function tryInstallPackages(checkoutPath) {
  if (0) {
  } else if (`${checkoutPath}/pnpm-lock.yaml`)
    await execSh.promise(`cd ${checkoutPath} && pnpm i)`).catch(() => null);
  else if (`${checkoutPath}/yarn.lock`)
    await execSh.promise(`cd ${checkoutPath} && yarn`).catch(() => null);
  else if (`${checkoutPath}/package-lock.json`)
    await execSh.promise(`cd ${checkoutPath} && npm instasll`).catch(() => null);
}
