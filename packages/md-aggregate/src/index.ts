import escapeStringRegexp from "escape-string-regexp";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

export default async function mdAggregate({
  input = [] as string[],
  target = "",
  write = false,
} = {}) {
  let dstContent = await readFile(resolve(target), "utf8");
  await Promise.all(input.map(srcProcess));
  if (write) {
    await writeFile(resolve(target), dstContent);
    console.log(resolve(target));
  } else {
    console.log(dstContent);
  }
  return;
  async function srcProcess(src: string) {
    const srcContent = await readFile(resolve(src), "utf8");
    if (!srcContent.match(/^# /)) throw new Error("srcContent must start with '# '");
    const lines = srcContent
      .trim()
      .split(/\r?\n/)
      .map((e) => e.replace(/^#/gim, "##"));
    // TODO: test with \r\n
    const matchStartPattern = `\n${escapeStringRegexp(lines[0])}$`;
    const eofPattern = "$(?![\\r\\n])";
    const sectionStartPattern = `\n##? `;
    const startPattern = `${matchStartPattern}|${eofPattern}`;
    const anyPattern = `[\\s\\S]*?`;
    const endPattern = `${eofPattern}|${sectionStartPattern}`;
    const srcContentWithoutSectionStart = lines
      .join("\n")
      .replace(new RegExp(sectionStartPattern, "img"), "\n### ");
    const pattern = new RegExp(`(${startPattern})${anyPattern}(?=${endPattern})`, "m");
    dstContent = dstContent.replace(pattern, `\n${srcContentWithoutSectionStart}\n`);
  }
}
