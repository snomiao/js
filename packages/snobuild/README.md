# snobuild (WIP)

zero-configured esbuilder

## Usage

npx snobuild -h

## Feat

- [x] zero-configured node-platform module build
- [x] Automatically build you project into multiple modules
  - [x] cli (`lib/cli.js`)
  - [x] CommonJS module (`lib/index.mjs`)
  - [x] ESModule module (`lib/index.js`)
  - [x] TS Declarations (`lib/*.d.ts`)
- creating project profile
  - [x] fill entry points into `package.json` use `--init` option
- [x] watch mode
- [x] minify & sourcemaps control
- [x] you don't even need an `tsconfig.json` if your project is simple enough, we configured everything into `ESNext`, and compile everything from `src` into `lib`.

## input & output

- supported entry points:
  - src/index.ts
  - src/cli.ts
- outputs
  - lib

## Reference

- [esninja - npm](https://www.npmjs.com/package/esninja)

## Author

snomiao <snomiao@gmail.com>
