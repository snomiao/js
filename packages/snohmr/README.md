# SNOHMR-2

## 🔥 Hot Module Replacement for Node.{js,mjs,ts} in ESM

- TypeScript support
- Watch latest changes
- Native ESModule support (compared to node-hmr)
- Boost your Node.TS development with just ONE line of for-await-of

## Install

```bash
npm i -D snohmr
pnpm i -D snohmr
```

## Examples

### 🔥 HMR in same file ♾

Running a module from an cli or somewhere else, and the file need to be debugging is ....

```typescript
// /src/demo/self.ts
import snohmr from "../index";

export default async function main() {
  await new Promise(() => setTimeout(r, 1000)); // so heavy data loader
  const str = '["JSON"]';
  // SNOHMR magic incantation applied!
  for await (const module of snohmr(() => import("./self"))) {
    // const module is always latest version
    const { myparse } = module;
    // print latest myparse result immediately while you change this file,
    console.log({ parsedObject: myparse(str) });
    // = { parsedObject: ["JSON"] }
  }
}
export function myparse(input: string) {
  console.log({ input });
  return JSON.parse(input);
}
export function mystringify(input: any) {
  console.log({ input });
  return JSON.stringify(input);
}
```

### 🔥 HMR parse.ts from an loader 🔬

The file needs to be HMR debugging

```typescript
// /parse.ts
export default function parse(data: string) {
  console.log(data);
  return JSON.parse(data);
}
```

And the data loader is calling `parse.ts` by snohmr.

```typescript
// /cli.ts
import snohmr from "snohmr";

// load data
const data = await load(); // heavy function

// if this is your original way to call parse function from dynamic import
{
  const { default: parse } = await import("./parse");
  await parse(data).then(console.log);
}
```

```typescript
// and then simpliy replace it with below then enjoy parse with SNOHMR
{
  for await (const { default: parse } of snohmr(() => import("./parse")))
    await parse(data).then(console.log).catch(console.error);
}
```

## Reference

- This package is inspired from [node-hmr - npm](https://www.npmjs.com/package/node-hmr)

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
