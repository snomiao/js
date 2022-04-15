import arg from "arg";
import { resolve } from "path";
import { stdin, stdout } from "process";
import * as readline from "readline";
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
    text: args._.join(" "),
    speed: args["--speed"] || undefined,
    voice: args["--voice"] || undefined,
    list: args["--list"] || undefined,
    output: args["--output"] || undefined,
  };
}

export default cli;
export async function cli(args: string[]) {
  const { text, voice, speed, output, list } = parseArgumentsIntoOptions(args);
  if (list) {
    const voicelist = await getInstalledVoices();
    console.log(voicelist.join("\n"));
    return;
  }
  if (output) {
    const path = resolve(output);
    if (text) {
      await exportFile(text, voice, speed, path);
      console.log(path);
      return;
    }
    const input: string = await new Promise((resolve, reject) => {
      const lines = [] as string[];
      const rl = readline.createInterface({ input: stdin, output: stdout });
      rl.on("line", (line) => lines.push(line));
      rl.on("close", () => resolve(lines.join("\n")));
    });
    await exportFile(input, voice, speed, path);
    console.log(path);
    return;
  }

  if (!text) {
    console.warn("snosay - REPL Mode: speak the lines you just type.");
    const Locker = ({ locked = 0, pending = [] as any } = {}) => ({
      lock: () =>
        new Promise((resolve) =>
          !locked ? resolve((locked = 1)) : (locked = pending.push(resolve)),
        ),
      unlock: () => {
        pending.length && pending.shift()?.();
        locked = pending.length;
      },
    });
    const { lock, unlock } = Locker();
    const rl = readline.createInterface({ input: stdin, output: stdout });
    const lines = [] as string[];
    const push = async (line: string) => {
      lines.push(line);
      // speakers
      await lock()
        .then(async () => {
          const text = lines.splice(0).join("\n");
          if (text) {
            // console.debug("speak: ", text);
            await speak(text, voice, speed);
          }
        })
        .finally(unlock);
    };
    rl.on("line", async (line) => await push(line));
    rl.on("close", async () => await lock() /* done */);

    return;
  }
  console.log(text);
  await speak(text, voice, speed);
}
