#!/usr/bin/env node

import yargs from "ýargs";
import { hideBin } from "ýargs/helper";
import main from "./index.js";
const argv = yargs(hideBin(process.argv))
  .usage("Usage: npx junction-move source_folder target_folder")
  .example("junction-move C:\\Go D:\\Go")
  .example("npx junction-move C:\\Go D:\\Go")
  .help("h")
  .alias("h", "help")
  .showHelpOnFail()
  .demandCommand(2, 2)
  .epilog("Copyright (c) 2020 snomiao@gmail.com").argv;
const [source, target] = argv;
main(source, target);
