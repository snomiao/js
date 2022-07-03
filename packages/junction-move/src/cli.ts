#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import junctionMove from "./index";

(async function () {
  const argv = await yargs(hideBin(process.argv))
    .scriptName("junction-move")
    .example("$0 C:\\Go D:\\Go", "Move Golang files from C: to D:")
    .example("$0 %userprofile%/Desktop D:\\MyDesktop", "Move Your Desktop from C:/ to D:/")
    .command(
      "$0 <source> <target>",
      "move source folder to target folder and create an junction link from source to target",
    )
    .string("source")
    .string("target")
    .demandCommand(2, 2)
    .alias("h", "help")
    .alias("v", "version")
    .epilog("Copyright (c) 2020-2022 snomiao@gmail.com").argv;
  // const [source, target] = argv._.map(String);
  await junctionMove(argv.source, argv.target);
})();
