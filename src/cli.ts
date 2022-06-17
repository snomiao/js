#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import mdAggregate from ".";

const argv = await yargs(hideBin(process.argv))
  .scriptName("md-aggregate")
  .command("$0 <target> [input..]", "aggregate markdown files")
  .example("preview: ", "md-aggregate README.md CHANGELOG.md ")
  .example("one: ", "md-aggregate README.md CHANGELOG.md -w")
  .example("multi: ", "md-aggregate README.md ABOUT.md LICENSE.md CHANGELOG.md -w")
  .example("multi: ", "md-aggregate README.md -i ABOUT.md -i LICENSE.md -i CHANGELOG.md -w")
  .option("target", { describe: "destination markdown file", type: "string" })
  .option("input", { describe: "source markdown files", array: true, type: "string" })
  .boolean("write")
  .describe("w", "write mode (when missing you will get preview in console)")
  .alias("i", "input")
  .alias("t", "target")
  .alias("w", "write")
  .alias("h", "help")
  .alias("v", "version")
  .demandCommand(2).argv;

await mdAggregate( argv);
