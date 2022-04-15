#!/usr/bin/env node

import arg from "arg";
import execSh from "exec-sh";
import { readFile, writeFile } from "fs/promises";
import { parse, resolve } from "path";

const main = async () => {
  // parse args
  const opts = {
    "--remove": Boolean,
    "--list": Boolean,
    "--no-vscode": Boolean,
    "-n": "--no-vscode",
    "-l": "--list",
  };
  const args = arg(opts, { argv: process.argv.slice(2) });
  const { remove = args["--remove"], list = args["--list"] } = {};
  const [branch, more] = args._;
  if (more) throw new Error("no more params");
  if (!branch) return await execSh.promise("git worktree list");

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
    .then((e) => worktree)
    .catch((e) => {
      // handle checked out
      const [m, branch, worktree] = e.stderr?.match?.(
        /fatal: '(.*?)' is already checked out at '(.*?)'/,
      );
      if (m) {
        console.warn(`fatal: '${branch}' is already checked out at '${worktree}'`);
        return resolve(worktree);
      }
      throw new Error("fail to checkout");
    });

  // remove if needed
  if (remove) {
    console.log(`removeing ${checkoutPath}`);
    return await execSh.promise(`git worktree remove ${checkoutPath}`);
  }

  if (args["--no-vscode"]) return;

  await execSh.promise(`cd ${checkoutPath} && code .`).catch(() => null);
};

await main();

// const run = async (cmd) => {
//   await new Promise((resolve) =>
//     spawn("cmd", ["/c", cmd], { stdio: "inherit" }).on("close", (code) => resolve(code)),
//   );
// };

// const exec2 = (cmd) =>
//   new Promise((resolve, rejec ) => {
//     const p = exec(cmd).stdout.on();

//     p.on("close", (code) => resolve({ stdout, stdout, code }));
//     p.on("error", () => resolve);
//   });
//   execSh.promise("")

// const workdirname = parse(process.cwd()).name;
// const argvs = process.argv.slice(2);
// const branch = argvs[0] || "";
// await run("git worktree list");
// // console.log(workdirname, branch, resolve("./worktrees/", branch));
// // console.table((await readdir("./worktrees").catch(() => [])).map((e) => e));

// if (!branch) process.exit(0);

// const branchpath1 = resolve("worktrees/" + branch);
// const branchpath2 = resolve("worktrees/" + branch + "@" + workdirname);
// const branchpath3 = resolve("worktree-" + branch + "@" + workdirname);
// const branchpath = branchpath2;

// await run(`git worktree add -B ${branch} ${branchpath}`);
// await run(`git rm -r --cached ./worktrees`);
// await run(`cd ${branchpath} && code .`);
// await run(`cd ${branchpath1} && code .`);
// await run(`cd ${branchpath2} && code .`);
// // await run(`cd ${branchpath} && pnpm i`);
// // ('git branch --show-current').trim()
// // :end
