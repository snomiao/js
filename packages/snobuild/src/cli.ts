#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import snobuild from "./index";
const argv = await yargs(hideBin(process.argv))
  .scriptName("snobuild")
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
  .describe("bundle", "bundle deps")
  .boolean("external")
  .describe("external", "bundle ignore package.json dependencies")
  .boolean("sourcemap")
  .describe("sourcemap", "output sourcemaps")
  .boolean("minify")
  .describe("minify", "minify outputs")
  // input output
  .string("input")
  .describe("input", "input dir")
  .string("outdir")
  .describe("outdir", "output dir")
  // output formats
  .boolean("tsc")
  .describe("tsc", "run tsc")
  .boolean("esm")
  .boolean("cjs")
  .boolean("iife") // not supported
  .boolean("umd") // not supported
  .boolean("browser") // not supported
  // watch
  .boolean("watch")
  .describe("watch", "watch mode")
  .boolean("serve")
  .describe("serve", "serve mode (wip)")
  //
  .alias("i", "input")
  .alias("o", "outdir")
  .alias("w", "watch")
  .alias("s", "serve")
  .alias("h", "help")
  .alias("v", "version").argv;
await snobuild(argv);
