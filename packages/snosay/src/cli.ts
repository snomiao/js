import arg from "arg";
import { resolve } from "path";
import { exportFile, getInstalledVoices, speak } from "./say";


function parseArgumentsIntoOptions(rawArgs: string[]) {
  const opts = {
    "--voice": String,
    "--speed": Number,
    "--list": Boolean,
    "--output": String,
    "-l": "--list",
    "-v": "--voice",
    "-s": "--speed",
    "-o": "--output",
  };
  const args = arg(opts, {
    argv: rawArgs.slice(2),
  });
  return {
    text: args._.join(' '),
    speed: args["--speed"] || undefined,
    voice: args["--voice"] || undefined,
    list: args["--list"] || undefined,
    output: args["--output"] || undefined,
  };
}


export default cli;
export async function cli(args: string[]) {
  const { text, voice, speed, output, list } =
    parseArgumentsIntoOptions(args);
  if (list) {
    const voicelist = await getInstalledVoices();
    console.log(voicelist.join("\n"));
    return;
  }
  if (!text) {
    console.error('ERROR: text is required')
    return
  }
  if (output) {
    const path = resolve(output);
    await exportFile(text, voice, speed, path);
    console.log(path);
    return;
  }
  await speak(text, voice, speed);
}
