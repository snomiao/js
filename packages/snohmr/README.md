# snohmr

🔥 Hot Module Replacement for Node.{mjs|ts} by snomiao

## Why?

- Native ESModule Support compared to node-hmr
- TypeScript friendly

## Example

```ts
// src/test.ts
import snohmr from "snohmr";

await snohmr<typeof import("./consoleLog")>("src/consoleLog.ts", async (m) => {
  m.default("hello, world"); //prints hello, world to stdout
  m.error("hello, world"); //prints hello, world in stderr
  return true; // return truthy to stop watch and return this value as final value, falsy to continue.
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