# Matrix Expand

## Example

```typescript
import matrixExpand from "matrix-expand";
const matrix = {
  minify: [false, true],
  format: ["esm", "cjs"] ,
  entryName: ["cli", "index", null].filter(Boolean),
};
const expanded = matrixExpand(matrix);
const buildOpts = expanded.map(({ entryName, format, minify }) => {
  const ext = { esm: ".mjs", cjs: ".cjs", iife: ".user.cjs" }[format];
  return {
    format,
    minify,
    entryPoints: [`src/${entryName}.ts`],
    outfile: `dist/${entryName}${minify ? ".min" : ""}${ext}`,
    jsx: "automatic",
  };
});
```
