#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import junctionMove from "./index";

(async function () {
  const argv = await yargs(hideBin(process.argv))
    // .usage("Usage: npx junction-move source_folder target_folder")
    .scriptName("junction-move")
    .example("$0", "C:\\Go D:\\Go")
    .command("$0 <source> <target>")
    .string("source")
    .string("target")
    .demandCommand(2, 2)
    .alias("h", "help")
    .alias("v", "version")
    .epilog("Copyright (c) 2020-2022 snomiao@gmail.com").argv;
  // const [source, target] = argv._.map(String);
  await junctionMove(argv.source, argv.target);
})();
