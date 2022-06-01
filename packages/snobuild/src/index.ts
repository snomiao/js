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
  init = false,
  prod = false,
  watch = false,
} = {}) {
  const indexExisted = Boolean(await stat("src/index.ts").catch(() => null));
  const cliExisted = Boolean(await stat("src/cli.ts").catch(() => null));
  const tsconfigExisted = Boolean(await stat("tsconfig.json").catch(() => null));
  const pkgPath = "./package.json";
  if (init) {
    const pkg = JSON.parse(await readFile(pkgPath, "utf-8"));
    const pkgConfed = {
      ...(indexExisted && {
        type: "module",
        types: "./lib/index.d.ts",
        main: "lib/index.cjs",
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
        ...(indexExisted && {
          ".": {
            require: "./lib/index.cjs",
            import: "./lib/index.js",
          },
        }),
        ...pkg.exports,
      },
    };
    await writeFile(pkgPath, JSON.stringify(sortPackageJson(pkgConfed), null, 2));
    await promisify(exec)("npm init -y");
    // await promisify(exec)("pnpx -y -- sort-package-json");
    console.log("init done");
  }

  const pkg = JSON.parse(await readFile(pkgPath, "utf-8"));

  // const esmEntry = pkg.exports.module?.replace(outdir, 'src');
  // const cjsEntry = pkg.exports.main?.replace(outdir, 'src');

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
      "./node_modules/*", // pkg it self
      "../node_modules/*",
      "../../node_modules/*", // monorepo pkg
      "../../../node_modules/*", // scoped monorepo pkg
      "../../../../node_modules/*",
      "../../../../../node_modules/*",
      "../../../../../../node_modules/*",
    ],
    logLevel: "info",
    watch,
    incremental: watch,
  };
  const esmEntrypoints = { ...baseOptions.entryPoints, ...(cliExisted && { cli: "src/cli.ts" }) };
  const tscWatchFlag = watch ? " --watch" : "";
  const results = await Promise.all([
    tsconfigExisted
      ? snorun(["tsc", tscWatchFlag].join(" "), { echo: true })
      : snorun(
          [
            "tsc",
            "--allowSyntheticDefaultImports --downlevelIteration",
            "--resolveJsonModule",
            "-m esnext",
            "-t esnext",
            "--moduleResolution node",
            "--skipLibCheck",
            "--emitDeclarationOnly -d",
            "--outDir lib",
            tscWatchFlag,
            "src/index.ts",
          ].join(" "),
          { echo: true },
        ),
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
  ]);

  console.log(results);
  if (!results.every((e) => e)) process.exit(1);
  console.log("build ok");
}
