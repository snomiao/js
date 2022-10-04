import esbuild, { BuildOptions, Format } from "esbuild";
import { readFile, stat, writeFile } from "fs/promises";
import snorun from "snorun";
import sortPackageJson from "sort-package-json";
import matrixExpand from "./matrixExpand";

export const depKeys = [
  "dependencies",
  "devDependencies",
  "optionalDependencies",
  "peerDependencies",
  "bundleDependencies",
] as const;
/**
 * Author: snomiao <snomiao@gmail.com>
 */
export default async function snobuild({
  outdir = "dist" as string,
  // input = "src/index.ts" as string,
  init = undefined as boolean,
  bundle = true as boolean,
  bundleDependencies = true as boolean,
  bundleDevDependencies = false as boolean,
  bundleOptionalDependencies = false as boolean,
  bundlePeerDependencies = false as boolean,
  bundleBundleDependencies = true as boolean,
  bundleExcludes = "" as string,
  watch = undefined as boolean,
  // output setting
  // dev = undefined as boolean, // +sourcemap -minify
  // prod = undefined as boolean, // -sourcemap +minify
  // lib = undefined as boolean, // +bundle +external +sourcemap +minify +tsc
  // deploy = undefined as boolean, // +bundle -external -sourcemap +minify
  // sourcemap = undefined as boolean,
  // minify = undefined as boolean,
  // outputs
  // tsc = undefined as boolean, // declares
  // esm = undefined as boolean, // esm
  // cjs = undefined as boolean, // cjs
  // script = undefined as boolean, // show script to esbuild
  target = "ESNext" as string, // es2020 for node 14, and es6 for earler version
  verbose = undefined as boolean,
  //
  legalComments = undefined as esbuild.BuildOptions["legalComments"],
  ..._esbuildOptions
} = {}) {
  const esbuildOptions = _esbuildOptions as esbuild.BuildOptions;
  // inputs
  const indexPath = "src/index.ts";
  const cliPath = "src/cli.ts";

  const pkgPath = "package.json";
  const tsconfigPath = "tsconfig.json";

  if (init) await snorun("npm init -y");
  const pkgExisted = Boolean(await stat(pkgPath).catch(() => null));
  if (!pkgExisted) throw new Error("package.json not existed");

  const indexEntry = Boolean(await stat(indexPath).catch(() => null)) && indexPath;
  const cliEntry = Boolean(await stat(cliPath).catch(() => null)) && cliPath;
  const tsconfigExisted = Boolean(await stat(tsconfigPath).catch(() => null)) && tsconfigPath;

  const pkgJSON = await readFile(pkgPath, "utf-8");
  const pkg = JSON.parse(pkgJSON);
  if (cliEntry) pkg.bin ||= "dist/cli.mjs";
  if (cliEntry) pkg.keywords ||= [...new Set([...(pkg.keywords || []), "cli"])];
  pkg.main ||= `${outdir}/index.min.cjs`;
  pkg.module ||= `${outdir}/index.min.mjs`;
  pkg.types ||= `${outdir}/index.d.ts`;
  pkg.exports ||= {};
  pkg.exports.require ||= `./${outdir}/index.cjs`;
  pkg.exports.import ||= `./${outdir}/index.mjs`;
  pkg.files ||= [`${outdir}`];
  pkg.scripts ||= {};
  pkg.scripts.build ||= "snobuild";
  pkg.scripts.prepack ||= "npm run build";
  const sortedPkg = JSON.stringify(sortPackageJson(pkg), null, 2);
  await writeFile(pkgPath, sortedPkg);

  const external = [
    !bundleDependencies && Object.keys(pkg?.dependencies || {}),
    !bundleDevDependencies && Object.keys(pkg?.devDependencies || {}),
    !bundleOptionalDependencies && Object.keys(pkg?.optionalDependencies || {}),
    !bundlePeerDependencies && Object.keys(pkg?.peerDependencies || {}),
    !bundleBundleDependencies && Object.keys(pkg?.bundleDependencies || {}),
    bundleExcludes?.split?.(","),
  ]
    .filter(Boolean)
    .flat();

  if (verbose) console.log({ external });
  const baseOpts: BuildOptions = {
    sourcemap: true,
    bundle,
    external,
    target,
    platform: "node", // module resolve
    logLevel: "info",
    watch,
    incremental: watch,
    legalComments,
    ...esbuildOptions,
  };
  const matrix = {
    minify: [false, true],
    format: ["esm", "cjs"] as Format[],
    entryName: [cliEntry && "cli", indexEntry && "index"].filter(Boolean),
  };
  const expanded = matrixExpand(matrix);
  const buildOpts = expanded.map(({ entryName, format, minify }) => {
    const ext = { esm: ".mjs", cjs: ".cjs", iife: ".user.cjs" }[format];
    return {
      ...baseOpts,
      format,
      minify,
      entryPoints: [`src/${entryName}.ts`],
      outfile: `${outdir}/${entryName}${minify ? ".min" : ""}${ext}`,
    } as BuildOptions;
  });
  const results = await Promise.all(
    [
      ...buildOpts.map((e) => esbuild.build(e)),
      indexEntry && pkg.types && declarationsBuild(),
    ].filter(Boolean) // promised obj remaind to await
  );

  console.log(results);
  if (!results.every((e) => Boolean(e))) process.exit(1);
  console.log("build ok");

  async function declarationsBuild() {
    const tscWatchFlag = watch && " --watch";
    const tscBuildOptions = (indexEntry: string) =>
      [
        "--esModuleInterop --allowSyntheticDefaultImports --downlevelIteration",
        "--resolveJsonModule",
        "-m ESNext",
        "-t ESNext",
        "--moduleResolution node",
        "--skipLibCheck",
        "--emitDeclarationOnly",
        "--declaration",
        "--declarationMap",
        `--outDir ${outdir}`,
        tscWatchFlag,
        indexEntry,
      ].filter(Boolean);
    return tsconfigExisted
      ? await snorun(["tsc", tscWatchFlag])
      : await snorun(["tsc", ...tscBuildOptions(indexEntry)]);
  }
}
export function Configs(...args: Parameters<typeof snobuild>) {
  return args;
}
