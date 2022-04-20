#!/usr/bin/env node
import arg from "arg";
import { readFile } from "fs/promises";
import { parse, resolve } from "path";

export const cli = async (rawArgv) => {
  const [node, js, ...argv] = rawArgv;
  // parse args
  const opts = {
    "--version": Boolean,
    "-v": "--version",
    "--help": Boolean,
    "-h": "--help",
    "--write": Boolean,
    "-w": "--write",
  };
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
    console.log("TODO: help");
    return;
  }

  let dstContent = await readFile(resolve(dst), "utf8");
  const srcProcess = async (src) => {
    const srcContent = await readFile(resolve(src), "utf8");
    if (!srcContent.match(/^# /)) throw new Error("srcContent must start with '# '");
    const lines = srcContent
      .trim()
      .split("\n")
      .map((e) => e.replace(/^#/g, "##"));

    // TODO: escape regexp startPattern
    // TODO: handle \n
    const matchStartPattern = `\n${lines[0]}`;
    const eofPattern = "$(?![\\r\\n])";

    const sectionStartPattern = `^## `;

    const startPattern = `${matchStartPattern}|${eofPattern}`;
    const anyPattern = `[\\s\\S]*?`;
    const endPattern = `${eofPattern}|${sectionStartPattern}`;
    dstContent = dstContent.replace(
      RegExp(`(${startPattern})${anyPattern}(?=${endPattern})`),
      `\n${lines.join("\n")}`,
    );
  };
  await Promise.all(srcs.map(srcProcess));
  console.log(dstContent);
  console.log(args["--write"]);
  console.log("done");
};

await cli(process.argv);
