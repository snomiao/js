import path from "path";
import { stdin, stdout } from "process";
import * as readline from "readline";
import { default as say } from "say";

/**
 * @author Snowstar Miao <snomiao@gmail.com>
 */
export default async function snosay({
  text = "",
  voice = "",
  speed = 1,
  output = "",
  list = false,
}) {
  if (list) return await showList();
  if (output) {
    const outfile = path.resolve(output);
    if (text) return await textOutput(text, voice, speed, outfile);
    await readlineOutput(voice, speed, outfile);
    return;
  }
  if (text) return await textSpeak(text, voice, speed);
  return readlineSpeak(voice, speed);
}

/**
 * use (say as any) because index.d.ts of say.js seems to be wrong
 */

const callbacker =
  <T>(resolve: { (result: T): void }, reject: { (err: string): void }) =>
  (err: string, result: T) =>
    err ? reject(err) : resolve(result);

async function textSpeak(text: string, voice: string, speed: number) {
  console.log(text);
  await speak(text, voice, speed);
  return;
}

function readlineSpeak(voice: string, speed: number) {
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

async function readlineOutput(voice: string, speed: number, outfile: string) {
  const input: string = await new Promise((resolve, reject) => {
    const lines = [] as string[];
    const rl = readline.createInterface({ input: stdin, output: stdout });
    rl.on("line", (line) => lines.push(line));
    rl.on("close", () => resolve(lines.join("\n")));
  });
  await exportFile(input, voice, speed, outfile);
  console.log(outfile);
}

async function textOutput(text: string, voice: string, speed: number, outfile: string) {
  await exportFile(text, voice, speed, outfile);
  console.log(outfile);
  return;
}

async function showList() {
  const voicelist = await getInstalledVoices();
  console.log(voicelist.join("\n"));
  return;
}

export function speak(text: string, voice?: string, speed?: number): Promise<void> {
  return new Promise((resolve, reject) =>
    (say as any).speak(text, voice, speed, callbacker<void>(resolve, reject)),
  );
}

export function stop(): Promise<void> {
  return new Promise((resolve, reject) => (say as any).stop(callbacker<void>(resolve, reject)));
}

export function getInstalledVoices(): Promise<string[]> {
  return new Promise((resolve, reject) =>
    (say as any).getInstalledVoices(callbacker<string[]>(resolve, reject)),
  );
}

export function exportFile(
  text: string,
  voice?: string,
  speed?: number,
  filePath?: string,
): Promise<void> {
  return new Promise((resolve, reject) =>
    (say as any).export(text, voice, speed, filePath, callbacker<void>(resolve, reject)),
  );
}
