import { parse, resolve } from "path";
import { readFile, writeFile } from "fs/promises";
import snorun from "snorun";
import topLevelGit  from "top-level-git";
import { tryInstallPackages } from "./tryInstallPackages";
// await cli(process.argv);

export default async function snogwt({
  branch = "",
  remove = undefined as boolean,
  force = undefined as boolean,
  list = undefined as boolean,
  code = undefined as boolean,
  pull = undefined as boolean,
  npmi = undefined as boolean,
} = {}) {
  // list
  if (list) return await snorun("git worktree list"), await snorun("git branch");
  // checkout
  const checkoutPath = await gwtCheckout(branch);
  // remove
  if (force && remove) return await gwtForceRemove(checkoutPath, branch);
  if (remove) return await gwtRemove(checkoutPath, branch);
  // postprocess
  const p: Promise<boolean>[] = [];
  if (code) p.push(snorun(`cd ${checkoutPath} && code .`));
  if (pull) p.push(snorun(`cd ${checkoutPath} && git fetch && git pull`));
  if (npmi) p.push(tryInstallPackages(checkoutPath));
  return Promise.all(p);
}

async function gwtCheckout(branch: string) {
  // try cd to the top working dir without "worktrees" nested
  const cwd = process.cwd();
  // cd to top
  process.chdir(process.cwd().replace(/[\\/]worktrees[\\/].*/, ""));
  // list worktrees
  // find repo dir and repo name

  const repodir = resolve(await topLevelGit()); /* process.cwd() */
  const repodirname = parse(repodir).name;
  // return { repodir, topdir, repodirname };

  // ensure root ignore /worktrees
  await ignoresUpdate(repodir);
  // generate worktree path
  const worktree = resolve(`${top}/worktrees/${branch}@${repodirname}`);
  // create new branch from current branch
  process.chdir(cwd);
  // try checkout branch and get the path
  const checkoutPath = await gwtCheckoutTry(branch, worktree);
  return checkoutPath;
}

async function gwtRemove(checkoutPath: any, branch: string) {
  console.log(`[snogwt] FORCE REMOVE ${checkoutPath}`);
  await snorun(`git worktree remove ${checkoutPath}`);
  await snorun(`git branch -d ${branch}`); // delete if fully merged
}

async function gwtForceRemove(checkoutPath: any, branch: string) {
  console.log(`[snogwt] remove ${checkoutPath}`);
  await snorun(`git worktree remove ${checkoutPath} --force`);
  await snorun(`git branch -D ${branch}`);
  await snorun(`rm -rf ${checkoutPath}`);
}

async function gwtCheckoutTry(branch: string, worktree: string) {
  const { ok, stderr } = snorun(`git worktree add -B ${branch} ${worktree}`);
  if (await ok) return worktree;
  const err = await stderr;
  const m1 = err.match?.(/fatal: '(.*?)' is already checked out at '(.*?)'/);
  if (m1) {
    const [, branch, worktree] = m1;
    // console.warn(`fatal: '${branch}' is already checked out at '${worktree}'`);
    return worktree; // resolve(worktree); dont' resolve it as it replaced / into \
  }
  const m2 = err.match?.(/fatal: '(.*?)' already exists/);
  if (m2) {
    const [, worktree] = m2;
    // console.warn(`fatal: '${worktree}' is already exists`);
    return resolve(worktree);
  }
  throw new Error("[snogwt] fail to get checkout path");
}

async function ignoresUpdate(repodir: string) {
  // gitignore
  await updateIgnoreFile(repodir, ".gitignore", { create: true });
  await updateIgnoreFile(repodir, ".eslintignore", { create: false });
  await updateIgnoreFile(repodir, ".prettierignore", { create: false });
}
async function updateIgnoreFile(repodir: string, ignoreFileName: string, { create = false } = {}) {
  const ignoreFile = resolve(`${repodir}/${ignoreFileName}`);
  const ignore = await readFile(ignoreFile, "utf-8").catch(() => null);
  if (ignore === null && !create) return;
  else if (!ignore?.match(/^\/worktrees$/im))
    await writeFile(ignoreFile, `${(ignore || "").trim()}\n/worktrees\n`);
}
