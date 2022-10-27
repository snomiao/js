import { FileChangeInfo, unlink, watch, writeFile } from "fs/promises";
import path, { resolve } from "path";
import readFileUtf8 from "read-file-utf8";

/**
 * @example
 * // src/test.ts
 * import snohmr from 'snohmr'
 * await snohmr<typeof import("./consoleLog")>("src/consoleLog.ts", async (m) => {
 *   m.default("hello, world") //prints hello, world to stdout
 *   m.error("hello, world") //prints hello, world in stderr
 *   return true // return truthy to stop watch and return this value as final value, falsy to continue.
 * });
 * // src/consoleLog.ts
 * export default function consoleLog(...args: any[]){
 *    console.log(...args)
 * }
 */
export default async function snohmr<hmrModule extends any>(
  src: string,
  onReload: (M: hmrModule, event?: FileChangeInfo<string>) => Promise<any> | any,
) {
  const r = await reload(await loadModule());
  if (r) return r;

  const watcher = watch(src);
  for await (const event of watcher) {
    if (event.eventType !== "change") continue;
    const r = await reload(await loadModule(), event);
    if (r) return r;
  }
  async function reload(m: hmrModule, event?: FileChangeInfo<string>) {
    try {
      if (m) return await onReload(m, event);
    } catch (e) {
      console.error(e);
    }
  }
  async function loadModule() {
    try {
      const t = +new Date();
      const code = await readFileUtf8(src);
      if (!code) return undefined;
      const srcp = path.parse(src);
      const cachefile = resolve(`${srcp.dir}/${srcp.name}-${t}.${srcp.ext}`);
      await writeFile(cachefile, code);
      const url = String(new URL("file://" + cachefile));
      const m = await import(url).catch(console.error).finally(async () => await unlink(cachefile));
      return m;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }
}
