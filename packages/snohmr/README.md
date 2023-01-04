# snohmr

## 🔥 Hot Module Replacement for Node.{js,mjs,ts} in ESM

- Native ESModule Support compared to node-hmr
- TypeScript friendly

## Install

```bash
npm i -D snohmr
pnpm i -D snohmr
```

## Examples

The file needs to be HMR debugging

```typescript
// parse.ts
export default function parse(data: string) {
  console.log(data);
  return JSON.parse(data);
}
```

And the data loader is calling `parse.ts` by snohmr.

```typescript
// index.ts
import snohmr from "snohmr";

// load data
const data = await load();
// = '{"....": "...."}'

// parse as normal dynamic import
const module = await import("./parse");
module.default(data).then(console.log);
// = {"....": "...."}

// parse with SNOHMR
for await (const { default: parse } of snohmr(() => import("./parse")))
  await parse(data).then(console.log).catch(console.error);
// = {"....": "...."}
```

## Reference

- [node-hmr - npm](https://www.npmjs.com/package/node-hmr)

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
