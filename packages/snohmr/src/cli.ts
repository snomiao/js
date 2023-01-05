#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import snohmr from ".";

cli();

async function cli() {
  const argv = await yargs(hideBin(process.argv))
    .scriptName("snohmr")
    .recommendCommands()
    .completion()
    .command("$0 [module]", "Run the specified module with 🔥 SHOHMR (dont support typescript yet)")
    .string("module")
    .default("module", "./index")
    .alias("h", "help")
    .alias("v", "version").argv;

  const importer = eval(`() => import("${argv.module}")`) as any;
  console.log(String(importer));
  for await (const m of snohmr(importer, process.cwd())) {
    console.log("🔥 SNOHMR Loaded");
    await (m as any).default?.(...argv._);
  }
}
