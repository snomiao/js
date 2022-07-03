#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import jsxRename from "./index";
(async function () {
  const argv = await // .boolean("no-vscode")

  yargs(hideBin(process.argv)).boolean("remove").boolean("list").argv;
  await jsxRename(argv);
})();
