#!/usr/bin/env node
import { readFile, writeFile } from "fs/promises";
import { globby } from "globby";
import path, { relative, resolve } from "path";
async function cli(rawArgv) {
  const rootPkg = resolve("./package.json");
  const root = JSON.parse(await readFile(rootPkg, "utf8"));
  const rootDir = path.parse(rootPkg).dir;

  if (root.repository) {
    const [, ghUrl] =
      root.repository?.url?.match?.(/(https\:\/\/github\.com\/.*?\/.*?)\.git/) || [];
    root.repository = ghUrl || root.repository;
    if (typeof root.repository !== "string") throw new Error("root.repository need to be string");
    if (root.repository.endsWith("/")) throw new Error("root.repository need to be without /");
  }

  const root_repository = root.repository?.replace(/\.git$/, "");
  const pkgs = await globby("packages/**/package.json", { gitignore: true });

  // master will redirect to main rather than 404 if main is not existed in github.
  const mainBranchName = "master";

  const pkgParse = async (pkgPath) => {
    const pkgRelDir = relative(rootDir, path.parse(pkgPath).dir).replace(/\\/g, "/");
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
    // console.log(out);
    console.log(pkgPath);
    await writeFile(pkgPath, out);
  };
  await Promise.all(pkgs.map(pkgParse));
}

await cli(process.argv);
