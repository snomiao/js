#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chromeDev from "./index";

cli();

/**
 *
 * @author: snomiao <snomiao@gmail.com>
 */
export default async function cli() {
  const argv = await yargs(hideBin(process.argv))
    .scriptName("chrome-dev")
    .string("extension")
    .describe("extension", "extension mode")
    .number("port")
    .describe("port", "open http://localhost:port")
    .boolean("dotenv")
    .describe("dotenv", "load .env setting")
    .boolean("devtools")
    .describe("devtools", "open devtools everypage")
    // .strict()
    .alias("d", "devtools")
    .alias("e", "extension")
    .alias("p", "port")
    .alias("h", "help")
    .alias("v", "version")
    .help()
    .version()
    .epilog("(C) snomiao.com 2022").argv;
  await chromeDev({ ...argv, inputs: argv._.map(String) });
}
