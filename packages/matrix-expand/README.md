# Matrix Expand

Expand map of arrays to matrix (array of maps).

## Example

```typescript
import matrixExpand from "matrix-expand";
const matrix = {
  minify: [false, true],
  format: ["esm", "cjs"],
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

## About

### License

GPLv3 - [The GNU General Public License v3.0 - GNU Project - Free Software Foundation](https://www.gnu.org/licenses/gpl-3.0.en.html)

### Author

Author: snomiao <snomiao@gmail.com>
Website: [snomiao.com](https://snomiao.com)

### Sponsors

- None yet.

Claim your sponsorship by donating snomiao <[Email: snomiao@gmail.com](mailto:snomiao@gmail.com)>

### Contribute

The main repo is in [here](https://github.com/snomiao/js#readme), any issue and PR's welcome.
