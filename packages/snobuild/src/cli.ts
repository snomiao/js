#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import snobuild from "./index";

await snobuild(
  await yargs(hideBin(process.argv))
    .scriptName("snobuild")
    .usage("snobuild")
    .help()
    .version()
    .boolean("init")
    .default("init", false, "initialize package.json")
    .string("outdir")
    .default("outdir", "lib", "output dir")
    .boolean("watch")
    .default("watch", false, "watch mode")
    .strict()
    .alias("i", "init")
    .alias("o", "outdir")
    .alias("w", "watch")
    .alias("h", "help")
    .alias("v", "version").argv,
);
