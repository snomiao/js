# snohmr

🔥 Hot Module Replacement for Node.{js,mjs,ts} in ESM

## Why?

- Native ESModule Support compared to node-hmr
- TypeScript friendly

## Example

```ts
// src/test.ts
import snohmr from "snohmr";

await snohmr<typeof import("./consoleLog")>("src/consoleLog.ts", async (m) => {
  m.default("hello, world"); //prints hello, world to stdout
  return true; // return truthy to stop watch and return this value as final value
  // or
  return undefined; // return falsy to continue watch
}); // return true

// src/consoleLog.ts
export default function consoleLog(...args: any[]) {
  // try modify this file
  console.log(...args);
}
```

## TODO

add more tests.

## Reference

- [node-hmr - npm]( https://www.npmjs.com/package/node-hmr )