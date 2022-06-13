#!/usr/bin/env node
import { resolve } from "path";
import { stdin, stdout } from "process";
import * as readline from "readline";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { exportFile, getInstalledVoices, speak } from ".";

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
await cli(params);

async function cli({ text = "", voice = "", speed = 1, output = "", list = false }) {
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
          !rl.terminal && console.log(text);
          if (text) {
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
