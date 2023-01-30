# snobuild (WIP)

Pre-configured esbuild cli wrapper

## Usage

```shell
npm i -D snobuild

> snobuild -h

Options:
      --init       initialize package.json                             [boolean]
      --dev        +sourcemap -minify +tsc                             [boolean]
      --prod       -sourcemap +minify                                  [boolean]
      --lib        +bundle +external +sourcemap +minify +tsc           [boolean]
      --deploy     +bundle -external -sourcemap +minify                [boolean]
      --bundle     bundle deps                                         [boolean]
      --external   bundle ignore package.json dependencies             [boolean]
      --sourcemap  output sourcemaps                                   [boolean]
      --minify     minify outputs                                      [boolean]
      --tsc        run tsc                                             [boolean]
  -i, --input      input dir                                            [string]
  -o, --outdir     output dir                                           [string]
  -w, --watch      watch mode                                          [boolean]
  -s, --serve      serve mode (wip)                                    [boolean]
  -h, --help       Show help                                           [boolean]
  -v, --version    Show version number                                 [boolean]
```

## Feat

- [x] Zero-configured node-platform module build
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
- [ ] TODO: support React projects

## input & output

- supported entry points:
  - src/index.ts
  - src/cli.ts
- outputs
  - lib

## Reference

- [esninja - npm](https://www.npmjs.com/package/esninja)

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
