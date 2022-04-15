import { defineConfig } from "rollup";
import pkg from "./package.json";

export default defineConfig({
  input: pkg.main,
  output: [
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    {
      file: pkg.cjs,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.umd,
      name: "snoUtils",
      format: "umd",
      sourcemap: true,
    },
    {
      file: pkg.iife,
      name: "snoUtils",
      format: "iife",
      sourcemap: true,
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [],
});
