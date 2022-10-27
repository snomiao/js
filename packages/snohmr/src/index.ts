import { FileChangeInfo, unlink, watch, writeFile } from "fs/promises";
import path, { resolve } from "path";
import readFileUtf8 from "read-file-utf8";

/**
 * @example
 * // src/test.ts
 * import snohmr from 'snohmr'
 * snohmr<typeof import("./consoleLog")>("src/consoleLog.ts", async (m) => {
 *   m.default("hello, world") //prints hello, world to stdout
 *   m.error("hello, world") //prints hello, world in stderr
 * });
 * // src/consoleLog.ts
 * export default function consoleLog(...args: any[]){
 *    console.log(...args)
 * }
 * export function error(...args: any[]){
 *    console.error(...args)
 * }
 */
export async function snohmr<hmrModule extends any>(
  src: string,
  onReload: (
    M: hmrModule | undefined,
    event?: FileChangeInfo<string>
  ) => Promise<void> | void
) {
  await reload(await loadModule());
  const watcher = watch(src);
  for await (const event of watcher) {
    if (event.eventType !== "change") continue;
    await reload(await loadModule(), event);
  }
  async function reload(m: hmrModule, event?: FileChangeInfo<string>) {
    try {
      m && (await onReload(m, event));
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
      const m = await import(url)
        .catch(console.error)
        .finally(async () => await unlink(cachefile));
      return m;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }
}
