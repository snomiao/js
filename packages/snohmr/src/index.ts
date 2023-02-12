import callerPath from "caller-path";
import { unlink, watch, writeFile } from "fs/promises";
import { globby } from "globby";
import {resolve, parse, dirname, isAbsolute} from "path";
import { packageDirectory } from "pkg-dir";
import readFileUtf8 from "read-file-utf8";

/**
 * SNOHMR
 * @author snomiao <snomiao@gmail.com>
 *
 * @example
 *
 * ```typescript
 * // index.ts
 * const data = await load(); // "...."
 * for await (const { default: parse } of snohmr(() => import("./parse"))) {
 *   await parse(data).catch(console.error);
 *
 * // parse.ts
 * export default function parse(data: string){
 *   console.log(data)
 *   return data
 * }
 * ```
 */
export default async function* snohmr<Mod>(
  importer: () => Promise<Mod>,
  { cwd, signal }: { cwd?: string; signal?: AbortSignal } = {},
): AsyncGenerator<Mod> {
  const importerDir = importerDirLookup();
  const importPath = importPathParse(importer);
  const entry = await entryResolve(importPath, cwd ?? importerDir);
  yield await moduleLoad(entry);
  for await (const _event of watch(entry, { signal })) {
    try {
      yield await moduleLoad(entry);
    } catch (err) {
      if (err.message === "EMPTY FILE") continue;
      console.warn(``);
      console.warn(`[SNOHMR] ERROR occurred while loading module ${entry}:`);
      console.warn(err);
      console.warn(``);
    }
  }
}

/**
 * SNOHMR-For
 * @author snomiao <snomiao@gmail.com>
 * @param importer
 * @example
 *
 * // index.ts
 * const data = await load(); // "...."
 * for await (const { default: parse } of snohmr(() => import("./parse"))) {
 *   await parse(data).catch(console.error);
 *
 * // parse.ts
 * export default function parse(data: string){
 *   console.log(data)
 *   return data
 * }
 */
export async function snohmrFor<Mod>(
  importer: () => Promise<Mod>,
  body: (mod: Mod) => Promise<void> | void,
  { cwd, signal }: { cwd?: string; signal?: AbortSignal } = {},
) {
  for await (const m of snohmr(importer, { cwd: cwd ?? importerDirLookup(), signal }))
    await body(m);
}
function importerDirLookup() {
  const caller = callerPath({ depth: 1 }) 
  if(!caller ) throw new Error('no caller path is found: ' + new Error().stack) 
  return dirname(resolve(caller));
}
async function entryResolve(importPath: string, importerDir: string) {
  // console.error({ importPath, importerDir });
  const importAbsPaths = await (async function () {
    if (!isAbsolute(importPath)) return [resolve(importerDir, importPath)];
    if (importPath.startsWith("/")) {
      const pkgdir = await packageDirectory();
      if (!pkgdir) return [resolve(importPath)];
      return [resolve(posixPath(pkgdir), importPath.slice(1)), resolve(importPath)];
    }
    return [resolve(importPath)];
  })();
  const exts = ["tsx", "ts", "mjs", "cjs", "js", "jsx", "json"];
  const glob = importAbsPaths
    .map(posixPath)
    .map((importAbsPath) =>
      exts.some((ext) => importAbsPath.endsWith(`.${ext}`))
        ? importAbsPath
        : `${importAbsPath}.{${exts}}`,
    );
  // console.log({ glob });
  const entries = await globby(glob);
  if (entries.length === 0) throw new Error(`No entries was found by ${glob}`);
  if (entries.length > 1) throw new Error("More than 1 entries was found.");
  const entry = entries[0];
  return entry;
}

function posixPath(path: string): string {
  return path.replace(/\\/g, "/");
}

async function moduleLoad(entry: string) {
  const snapshotEntry = await entrySnapshot(entry);
  const importUrl = new URL(`file:///${snapshotEntry}`).toString();
  const m = await import(importUrl).finally(() => unlink(snapshotEntry));
  return m;
}

async function entrySnapshot(entry: string) {
  const { dir, name, ext } = parse(entry);
  const snapshotEntryPath = `${dir}/${name}-${+new Date()}.snohmr${ext}`;
  const snapshotEntry = resolve(snapshotEntryPath);
  const code = await readFileUtf8(entry);
  if (!code) throw new Error("EMPTY FILE");
  await writeFile(snapshotEntry, code);
  return snapshotEntry;
}

function importPathParse(importer: () => Promise<any>): string {
  const importerExpression = importer.toString();
  // console.log({ importerExpression });
  const importPath =
    // importerExpression.match(/__vite_ssr_dynamic_import__\("\/(.*?)"\s*?\)/m)?.[1] ||
    importerExpression.match(/import[_a-zA-Z0-9]*?\(\s*?['"](.*?)['"]\s*?\)/m)?.[1];
  if (!importPath)
    throw new Error(
      `Check your importer function, ` +
        `it should be like "() => import('...path...')", ` +
        `and dont use variable inside. ` +
        `just got ${importerExpression} here.`,
    );
  return importPath;
}
