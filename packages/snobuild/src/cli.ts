#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import snobuild from "./index";

cli();

async function cli() {
  const argv = await yargs(hideBin(process.argv))
    .scriptName("snobuild")
    .recommendCommands()
    .completion()
    .command("$0", "build respect to package.json")
    // .command("$0 [input..]", "snobuild with special input")
    // init
    .boolean("init")
    .describe("init", "initialize package.json by calling npm init -y")
    // bundle options
    .boolean("bundle")
    .default("bundle", true)
    .describe("bundle", "bundle deps, defaults to dependencies & bundleDependencies only")
    .boolean("bundleDependencies")
    .default("bundleDependencies", false)
    .describe("bundleDependencies", "bundle package.dependencies")
    .boolean("bundleDevDependencies")
    .default("bundleDevDependencies", true)
    .describe("bundleDevDependencies", "bundle package.devDependencies")
    .boolean("bundleOptionalDependencies")
    .default("bundleOptionalDependencies", false)
    .describe("bundleOptionalDependencies", "bundle package.optionalDependencies")
    .boolean("bundlePeerDependencies")
    .default("bundlePeerDependencies", false)
    .describe("bundlePeerDependencies", "bundle package.peerDependencies")
    .boolean("bundleBundleDependencies")
    .default("bundleBundleDependencies", true)
    .describe("bundleBundleDependencies", "bundle package.bundleDependencies")
    .string("bundleExcludes")
    .default("bundleExcludes", "")
    .describe("bundleExcludes", "pkg names sep by ',' to dynamic import/require at runtime.")
    // output formats
    .string("target")
    .describe("target", "such as ESNext or ES2020 for Node16")
    // watch
    .boolean("watch")
    .describe("watch", "watch mode")
    // serve
    // .boolean("serve")
    // .describe("serve", "serve mode (wip)")
    //
    .alias("w", "watch")
    // .alias("s", "serve")
    .alias("h", "help")
    .alias("v", "version").argv;
  await snobuild(argv);
}
