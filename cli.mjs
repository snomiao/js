#!/usr/bin/env node
import arg from "arg";
import escapeStringRegexp from "escape-string-regexp";
import { readFile, writeFile } from "fs/promises";
import { parse, resolve } from "path";

const opts = {
  "--version": Boolean,
  "-v": "--version",
  "--help": Boolean,
  "-h": "--help",
  "--write": Boolean,
  "-w": "--write",
};
const help = `
md-aggregate [...src] dst [options]

Example: md-aggregate CHANGELOG.md README.md -w

Options:
  -v, --version : show version
  -h, --help    : show help
  -w, --write   : write mode (when missing you will get preview in console)
`;
export const cli = async (rawArgv) => {
  const [node, js, ...argv] = rawArgv;
  // parse args
  const args = arg(opts, { argv });
  const [dst, ...srcs] = args._.reverse();
  // check version
  if (args["--version"]) {
    const pkg = await readFile(resolve(parse(js).dir, "package.json"), "utf8").then(JSON.parse);
    console.log(`v${pkg.version}`);
    return;
  }
  // help
  if (args["--version"] || !dst) {
    console.log(help);
    return;
  }

  let dstContent = await readFile(resolve(dst), "utf8");
  const srcProcess = async (src) => {
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
    const replacedContent = lines.join("\n");
    dstContent = dstContent.replace(
      RegExp(`(${startPattern})${anyPattern}(?=${endPattern})`, "m"),
      `\n${replacedContent}\n`,
    );
  };
  await Promise.all(srcs.map(srcProcess));

  if (!args["--write"]) return console.log(dstContent);

  await writeFile(resolve(dst), dstContent);

  console.log(resolve(dst));
};

await cli(process.argv);
