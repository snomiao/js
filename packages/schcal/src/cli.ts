#!/usr/bin/env node
/**
 * schtasks-calendar (schcal)
 * Author: snomiao (snomiao@gmail.com)
 * 2020-2021
 */
import snorun from "snorun";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  generateSchtasksCreationObjects,
  newSchtasksImport,
  outdatedSchtasksClean,
  readConfig,
} from "./index";

cli();

async function cli() {
  await snorun(`chcp 65001`);
  // READING PARAMS
  const argv = await yargs(hideBin(process.argv))
    .usage("Usage: schcal [options] [...ICS_URLS]")
    .alias("s", "startup")
    .alias("c", "config")
    .alias("i", "ICS_URLS")
    .alias("t", "CACHE_TIMEOUT")
    .alias("p", "HTTP_PROXY")
    .alias("d", "FORWARD_DAYS")
    .alias("v", "version")
    .alias("h", "help")
    .example(
      "$0 https://calendar.google.com/calendar/ical" +
        "/xxxxxxxxxxxxxxxxxxx/private-cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/basic.ics",
      "load this ics to schtasks",
    )
    .example("schcal -c config.yaml", "run with config.yaml")
    .epilog("Copyright (c) 2020 snomiao@gmail.com").argv;
  if (argv.startup) await snorun(`./add-to-schtasks.bat`);
  await snorun(`title SSAC - READING config`);
  const config = await readConfig(argv);
  await snorun(`title SSAC - GENERATING schtasks commands`);
  const schtasksCreationObjects = await generateSchtasksCreationObjects(config);
  await snorun(`title SSAC - CLEANING old schtasks`);
  await outdatedSchtasksClean(config);
  await snorun(`title SSAC - IMPORTING new schtasks`);
  await newSchtasksImport(schtasksCreationObjects);
  return "done";
}
