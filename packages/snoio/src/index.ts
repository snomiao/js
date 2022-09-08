import { readFile, writeFile } from "fs/promises";
/**
 *
 * @author: snomiao <snomiao@gmail.com>
 */
export default async function snoio(filename: string) {
  console.log("hello");
  return {
    fileTextRead: () => fileTextRead(filename),
    fileRead: () => fileRead(filename),
    fileWrite: (content: any) => fileWrite(filename, content),
  };
}

export async function fileTextRead(filename: string) {
  return (
    (await readFile(filename, { encoding: "utf8" }))
      // handle utf8 with bom
      ?.replace(/^\ufeff/, "")
  );
}
export async function fileRead(filename: string) {
  return await readFile(filename);
}
export async function fileWrite(filename: string, content: any) {
  return await writeFile(filename, content);
}
