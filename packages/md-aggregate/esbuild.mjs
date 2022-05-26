import esbuild from "esbuild";
await Promise.all([
  esbuild.build({
    entryPoints: ["src/index.ts", "src/cli.ts"],
    platform: "node",
    minify: true,
    sourcemap: true,
    outdir: "lib/esm",
    format: "esm",
  }),
  esbuild.build({
    entryPoints: ["src/index.ts", "src/cli.ts"],
    platform: "node",
    minify: true,
    sourcemap: true,
    outdir: "lib/cjs",
    format: "cjs",
    outExtension: { ".js": ".cjs" },
  }),
]);
