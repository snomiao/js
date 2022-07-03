#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import jsxRename from "./index";
(async function () {
  const argv = await yargs(hideBin(process.argv))
    .boolean("remove")
    .boolean("list")
    // .boolean("no-vscode")
    
    .argv;
  await jsxRename(argv);
})();
