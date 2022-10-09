#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import snosay from "./index";

(async function () {
  const argv = await yargs(hideBin(process.argv))
    .scriptName("snosay")
    .string("voice")
    .describe("voice", "voice engine, such as: Microsoft David Desktop")
    .number("speed")
    .describe("speed", "voice speed, base is 1, higher faster")
    .boolean("list")
    .describe("list", "get voice engine list")
    .string("output")
    .describe("output", "output file ")
    // examples
    .example("$0", "hello, world")
    .example("$0", "--list")
    .example("$0", '--voice "Microsoft David Desktop" --speed 0.5 hello, world')
    .example("$0", '--voice "Microsoft Zira Desktop" --speed 1.5 hello, world')
    .example("$0", '--voice "Microsoft Zira Desktop" --speed 1.5 --output ./')
    // .string("domain")
    .alias("h", "help")
    .alias("l", "list")
    .alias("v", "voice")
    .alias("s", "speed")
    .alias("o", "output").argv;

  const params = { text: argv._.join(" "), ...argv };
  await snosay(params);
  process.exit(0);
})();
