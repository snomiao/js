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
  outdir = undefined as string,
  input = undefined as string,
  init = undefined as boolean,
  bundle = undefined as boolean,
  external = undefined as boolean,
  externals = undefined as string,
  watch = undefined as boolean,
  // output setting
  dev = undefined as boolean, // +sourcemap -minify
  prod = undefined as boolean, // -sourcemap +minify
  lib = undefined as boolean, // +bundle +external +sourcemap +minify +tsc
  deploy = undefined as boolean, // +bundle -external -sourcemap +minify
  sourcemap = undefined as boolean,
  minify = undefined as boolean,
  // outputs
  tsc = undefined as boolean, // declares (defaults to true)
  esm = undefined as boolean, // esm (defaults to true)
  cjs = undefined as boolean, // cjs
  script = undefined as boolean, // show script to esbuild
  //
  legalComments = undefined as esbuild.BuildOptions["legalComments"],
  esbuildOptions = undefined as esbuild.BuildOptions,
} = {}) {
  // load pkg infos
  const pkgPath = "./package.json";
  const indexExisted = Boolean(await stat("src/index.ts").catch(() => null));
  const cliExisted = Boolean(await stat("src/cli.ts").catch(() => null));
  const tsconfigExisted = Boolean(await stat("tsconfig.json").catch(() => null));
  if (init) await packageInit(pkgPath, indexExisted, cliExisted);
  const pkg = JSON.parse(await readFile(pkgPath, "utf-8").catch(() => "{}"));
  // const pkgNameEntryExisted = Boolean(await stat(`src/${pkg.name}.ts`).catch(() => null));
  const deps = Object.keys(pkg?.dependencies || {});
  // calc build mode
  if (!(dev || prod || lib || deploy || sourcemap || minify || external || bundle)) {
    console.error("no build mode specified");
    return await snorun("snobuild -h");
  }
  // calc build mode
  if (dev) (sourcemap ??= true), (tsc ??= true);
  if (prod) minify ??= true;
  if (lib)
    (bundle ??= true),
      (external ??= true),
      (sourcemap ??= true),
      (minify ??= true),
      (tsc ??= true),
      (outdir ||= "./lib");
  if (deploy) (bundle ??= true), (external ??= false), (minify ??= true), (outdir ||= "./deploy");
  if (!bundle) external ??= false;
  // module detect
  tsc = tsc || Boolean(pkg?.types);
  cjs = cjs || (Boolean(pkg?.main) && indexExisted);
  esm = esm || (Boolean(pkg?.module) && indexExisted);
  esm = esm || (Boolean(pkg?.bin) && cliExisted);
  if (!(tsc || cjs || esm)) throw new Error("no output");
  // base options
  const baseOptions: esbuild.BuildOptions = {
    entryPoints: {
      ...(indexExisted && { index: "src/index.ts" }),
    },
    ...{ minify, sourcemap },
    bundle,
    external: !external ? [] : [...(externals?.split(",") ?? []), ...deps],
    outdir,
    platform: "node",
    format: "esm",
    target: ["esnext"],
    logLevel: "info",
    watch,
    incremental: watch,
    legalComments,
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
    !esm
      ? true // "skip esm output"
      : await esbuild.build({
          ...baseOptions,
          entryPoints: esmEntrypoints,
          format: "esm",
          // splitting: true,
        }),
    !cjs
      ? true // "skip cjs output"
      : await esbuild.build({
          ...baseOptions,
          format: "cjs",
          outExtension: { ".js": ".cjs" },
        }),
    !tsc
      ? true // "skip tsc output"
      : tsconfigExisted
      ? snorun(["tsc", tscWatchFlag].join(" "))
      : indexExisted && snorun(["tsc", ...tscBuildOptions, "src/index.ts"].join(" ")),
  ]);

  console.log(results);
  if (!results.every((e) => Boolean(e))) process.exit(1);
  console.log("build ok");
}
async function packageInit(pkgPath: string, indexExisted: boolean, cliExisted: boolean) {
  const pkg = JSON.parse(await readFile(pkgPath, "utf-8").catch(() => "{}"));
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
      build: "snobuild --lib",
      prepack: "npm run build",
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
