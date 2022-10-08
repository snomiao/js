#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import monopkgs from "./index";
(async function () {
  const argv = await yargs(hideBin(process.argv))
    .scriptName("monopkgs")
    .alias("h", "help")
    .alias("v", "version").argv;

  await monopkgs(argv);
})();
