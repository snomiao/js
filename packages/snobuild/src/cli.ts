#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import snobuild from "./index";

const argv = await yargs(hideBin(process.argv))
  .alias("i", "init")
  .alias("o", "outdir")
  .alias("w", "watch")
  .alias("h", "help")
  .alias("v", "version")
  .scriptName("snobuild")
  .usage("snobuild")
  .help()
  .version()
  .boolean("init")
  .default("init", false)
  .describe("init", "initialize package.json")
  //
  .string("outdir")
  .default("outdir", "lib")
  .describe("outdir", "output dir")
  //
  .boolean("watch")
  .default("watch", false)
  .describe("watch", "watch mode")
  //
  .strict().argv;
await snobuild(argv);
