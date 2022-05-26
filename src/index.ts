import escapeStringRegexp from "escape-string-regexp";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

export default async function mdAggregate(
  dstPath: string,
  srcs: string[],
  argv: { write: boolean },
) {
  let dstContent = await readFile(resolve(dstPath), "utf8");
  await Promise.all(srcs.map(srcProcess));
  if (argv.write) {
    await writeFile(resolve(dstPath), dstContent);
    console.log(resolve(dstPath));
  } else {
    console.log(dstContent);
  }
  return;
  async function srcProcess(src) {
    const srcContent = await readFile(resolve(src), "utf8");
    if (!srcContent.match(/^# /)) throw new Error("srcContent must start with '# '");
    const lines = srcContent
      .trim()
      .split("\n")
      .map((e) => e.replace(/^#/gim, "##"));

    // TODO: handle \r\n
    const matchStartPattern = `\n${escapeStringRegexp(lines[0])}$`;
    const eofPattern = "$(?![\\r\\n])";

    const sectionStartPattern = `\n##? `;

    const startPattern = `${matchStartPattern}|${eofPattern}`;
    const anyPattern = `[\\s\\S]*?`;
    const endPattern = `${eofPattern}|${sectionStartPattern}`;

    const srcContentWithoutSectionStart = lines
      .join("\n")
      .replace(new RegExp(sectionStartPattern, "img"), "\n### ");

    dstContent = dstContent.replace(
      new RegExp(`(${startPattern})${anyPattern}(?=${endPattern})`, "m"),
      `\n${srcContentWithoutSectionStart}\n`,
    );
  }
}
