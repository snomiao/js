#!/usr/bin/env node
import { readFile } from "fs/promises";
import path, { relative, resolve } from "path";
import { promisify } from "util";
const glob = promisify(await import("glob").then((e) => e.default));

async function cli(rawArgv) {
  // github
  const rootPkg = resolve("./package.json");
  const root = JSON.parse(await readFile(rootPkg, "utf8"));
  const rootDir = path.parse(rootPkg).dir;

  if (root.repository) {
    const [, ghUrl] = root.repository?.url?.(/(https\:\/\/github\.com\/.*?\/.*?)\.git/) || [];
    root.repository = ghUrl || root.repository;
    if (typeof root.repository !== "string") throw new Error("root.repository need to be string");
    if (root.repository.endsWith("/")) throw new Error("root.repository need to be without /");
  }

  const root_repository = root.repository?.replace(/\.git$/, "");
  const pkgs = await glob("packages/**/package.json");

  // master will redirect to main rather than 404 if main is not existed in github.
  const mainBranchName = "master";

  const pkgParse = async (pkgPath) => {
    const pkgRelDir = relative(rootDir, path.parse(pkgPath).dir);
    const pkg = JSON.parse(await readFile(pkgPath, "utf8"));
    const pkgName = pkg.name;
    const repository = root_repository && `${root_repository}/tree/${mainBranchName}/${pkgRelDir}`;
    const homepage = repository && `${repository}#readme`;
    const bugs = root_repository && {
      url: `${root_repository}/issues?q=is%3Aissue+is%3Aopen+${pkgName}`,
    };
    const { license, author } = root;
    const info = {
      ...(repository && { repository }),
      ...(homepage && { homepage }),
      ...(bugs && { bugs }),
      ...(license && { license }),
      ...(author && { author }),
    };
    Object.assign(pkg, info);
    const out = JSON.stringify(pkg, null, 2);
    console.log(out);
    // await writeFile(pkgPath, JSON.stringify(pkg, null, 2));
  };

  await Promise.all(pkgs.map(pkgParse));
}

await cli(process.argv);
