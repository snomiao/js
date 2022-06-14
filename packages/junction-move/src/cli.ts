#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import junctionMove from "./index";
const argv = await yargs(hideBin(process.argv))
  .usage("Usage: npx junction-move source_folder target_folder")
  .example("$0", "C:\\Go D:\\Go")
  .help("h")
  .alias("h", "help")
  .demandCommand(2, 2)
  .epilog("Copyright (c) 2020 snomiao@gmail.com").argv;
const [source, target] = argv._.map(String);
await junctionMove(source, target);
