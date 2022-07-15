#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import snogwt from "./index";

(async function () {
  const argv = await yargs(hideBin(process.argv))
    .scriptName("snogwt")
    .string("branch")
    .coerce("branch", (branch: string) => {
      if (!branch.match(/^[a-z-0-9]+$/)) throw new Error("not valid branch name: /^[a-z-]+$/");
      return branch;
    })
    .describe("branch", "the branch name to work on") //.default("checkout", true),
    .command(
      ["checkout <branch>", "co <branch>"],
      "checkout branch in worktree and pull",
      (y) =>
        y
          .boolean("code")
          .describe("code", "open vscode")
          .default("code", true)
          .boolean("pull")
          .describe("pull", "git pull")
          .default("pull", true)
          .boolean("npmi")
          .describe("npmi", "install node packages by pnpm or yarn or npm")
          .default("npmi", true),

      async (argv) => {
        await snogwt(argv);
      },
    )
    .command(
      ["remove <branch>", "rm <branch>"],
      "remove this worktree, and delete branch if it's merged",
      (y) =>
        y
          .boolean("force")
          .describe("force", "force remove this worktree and delete branch")
          .alias("f", "force"),
      //.default("remove", true),
      async (argv) => {
        await snogwt({ ...argv, remove: true });
      },
    )
    .command(
      ["$0", "list", "ls"],
      "list worktrees and branches",
      (y) => y, //.default("list", true),
      async (argv) => {
        await snogwt({ ...argv, list: true });
      },
    )
    .demandCommand(1)
    .alias("h", "help")
    .alias("v", "version").argv;
  // console.log(argv);
})();
