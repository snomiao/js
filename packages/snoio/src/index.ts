import { mkdir, readFile, writeFile } from "fs/promises";
import { dirname } from "path";
/**
 * utf8bomHeaderRemoved, crDeleted
 */
export async function textFileRead(file: string) {
  return await readFile(file, "utf8").then(utf8bomHeaderRemoved).then(crDeleted);
}

export async function textFileWrite(file: string, data: string | Uint8Array) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, data);
}

export function utf8bomHeaderRemoved(e: string) {
  return e.replace(/^\ufeff/, "");
}
export function utf8bomHeaderInsert(e: string) {
  return `\ufeff${e}`;
}
export function crDeleted(e: string) {
  return e.replace(/\r/g, "");
}
