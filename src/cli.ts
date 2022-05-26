#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import mdAggregate from ".";

const argv = await yargs(hideBin(process.argv))
  .usage("md-aggregate [...src.md] dst.md [-w]")
  .example("one", "md-aggregate CHANGELOG.md README.md -w")
  .example("multi", "md-aggregate LICENSE.md CHANGELOG.md README.md -w")
  .boolean("write")
  .alias("w", "write")
  .describe("w", "write mode (when missing you will get preview in console)")
  .demand(2)
  .help()
  .alias("h", "help")
  .version()
  .alias("v", "version").argv;

const [dstPath, ...srcs] = argv._.reverse();
await mdAggregate(String(dstPath), srcs.map(String), argv);
