import { exec } from "child_process";
import esbuild from "esbuild";
import { readFile, stat, writeFile } from "fs/promises";
import snorun from "snorun";
import sortPackageJson from "sort-package-json";
import { promisify } from "util";

/**
 * Author: snomiao <snomiao@gmail.com>
 */
export default async function snobuild({
  outdir = "lib",
  inputs = [] as string[],
  init = false,
  prod = false,
  watch = false,
  esbuildOptions = null as esbuild.BuildOptions,
} = {}) {
  const indexExisted = Boolean(await stat("src/index.ts").catch(() => null));
  const cliExisted = Boolean(await stat("src/cli.ts").catch(() => null));
  const tsconfigExisted = Boolean(await stat("tsconfig.json").catch(() => null));
  const pkgPath = "./package.json";
  if (init) await packageInit(pkgPath, indexExisted, cliExisted);
  const pkg = JSON.parse(await readFile(pkgPath, "utf-8"));
  const baseOptions: esbuild.BuildOptions = {
    entryPoints: {
      ...(indexExisted && { index: "src/index.ts" }),
    },
    platform: "node",
    minify: prod,
    sourcemap: !prod,
    outdir,
    bundle: true,
    external: [
      ...Object.keys(pkg.dependencies)
      // await globby("node_modules")
      // "node_modules", // pkg it self
      // "./node_modules/*", // pkg it self
      // "../node_modules/*",
      // "../../node_modules/*", // monorepo pkg
      // "../../../node_modules/*", // scoped monorepo pkg
      // "../../../../node_modules/*",
      // "../../../../../node_modules/*",
      // "../../../../../../node_modules/*",
    ],
    logLevel: "info",
    watch,
    incremental: watch,
    ...esbuildOptions,
  };
  const esmEntrypoints = {
    ...baseOptions.entryPoints,
    ...(cliExisted && { cli: "src/cli.ts" }),
  };
  const tscWatchFlag = watch ? " --watch" : "";
  const tscBuildOptions = [
    "--allowSyntheticDefaultImports --downlevelIteration",
    "--resolveJsonModule",
    "-m ESNext",
    "-t ESNext",
    "--moduleResolution node",
    "--skipLibCheck",
    "--emitDeclarationOnly -d",
    "--outDir lib",
    tscWatchFlag,
  ].filter((e) => e);
  const results = await Promise.all([
    await esbuild.build({
      ...baseOptions,
      entryPoints: esmEntrypoints,
      format: "esm",
    }),
    (pkg.main &&
      (await esbuild.build({
        ...baseOptions,
        format: "cjs",
        outExtension: { ".js": ".cjs" },
      }))) ||
      true,
    ...(tsconfigExisted
      ? [snorun(["tsc", tscWatchFlag].join(" "))]
      : [
          indexExisted && snorun(["tsc", ...tscBuildOptions, "src/index.ts"].join(" ")),
          // cliExisted && snorun(["tsc", ...tscBuildOptions, "src/cil.ts"].join(" ")),
        ]),
  ]);

  console.log(results);
  if (!results.every((e) => e)) process.exit(1);
  console.log("build ok");
}
async function packageInit(pkgPath: string, indexExisted: boolean, cliExisted: boolean) {
  const pkg = JSON.parse(await readFile(pkgPath, "utf-8"));
  const pkgConfed = {
    ...(indexExisted && {
      type: "module",
      types: "./lib/index.d.ts",
      ...(!pkg.exports && { main: "lib/index.cjs" }),
      module: "lib/index.js",
    }),
    ...(cliExisted && {
      bin: "lib/cli.js",
      keywords: ["cli"],
    }),
    files: ["lib"],
    ...pkg,
    scripts: {
      build: "snobuild",
      ...pkg.scripts,
    },
    exports: {
      ...(indexExisted &&
        !pkg.exports && {
          ".": {
            require: "./lib/index.cjs",
            import: "./lib/index.js",
          },
        }),
      ...pkg.exports,
    },
  };
  const outPkg = sortPackageJson(pkgConfed);
  const outPkgJSONString = JSON.stringify(outPkg, null, 2);
  await writeFile(pkgPath, outPkgJSONString);
  await promisify(exec)("npm init -y");

  console.log("init done");
}
export function snobuildConfig(...args: Parameters<typeof snobuild>) {
  return args;
}
