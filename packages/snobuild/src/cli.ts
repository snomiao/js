#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import snobuild from "./index";
cli();
/**
 * @author: snomiao <snomiao@gmail.com>
 */
export default async function cli() {
  const argv = await yargs(hideBin(process.argv))
    .scriptName("snobuild")
    .recommendCommands()
    .completion()
    .command("$0", "build ")
    .command("$0 [input..]", "snobuild with special input")
    // init
    .boolean("init")
    .describe("init", "initialize package.json")
    // build options
    .boolean("dev")
    .describe("dev", "--sourcemap --tsc")
    // .implies("prod", ["sourcemap", "tsc"])
    .boolean("prod")
    .describe("prod", "--minify")
    // .implies("prod", ["minify"])
    .boolean("deploy")
    .describe("deploy", "--bundle --minify")
    // .implies("deploy", ["bundle", "minify"])
    .boolean("lib")
    .describe("lib", "--bundle --external --sourcemap --minify --tsc")
    // .implies("lib", ["bundle", "external", "sourcemap", "minify", "tsc"])
    .conflicts("dev", "prod")
    .conflicts("lib", "deploy")
    // bundle options
    .boolean("bundle")
    .default("bundle", true)
    .describe("bundle", "bundle deps, defaults to dependencies & bundleDependencies only")
    .boolean("bundleDependencies")
    .default("bundleDependencies", true)
    .describe("bundleDependencies", "bundle package.dependencies")
    .boolean("bundleDevDependencies")
    .default("bundleDevDependencies", false)
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
    .describe(
      "bundleExcludes",
      "package names not to bundle, will be dynamic import/require at runtime."
    )
    // output formats
    .string("target")
    .describe("target", "such as ESNext or ES2020")
    // watch
    .boolean("watch")
    .describe("watch", "watch mode")
    .boolean("serve")
    .describe("serve", "serve mode (wip)")
    //
    .alias("w", "watch")
    .alias("s", "serve")
    .alias("h", "help")
    .alias("v", "version").argv;
  await snobuild(argv);
}
