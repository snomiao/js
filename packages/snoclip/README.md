# snoclip (WIP)

- I'm trying to make a clipboard cli tool which can be used for:
  - stdin to clipboard (use `readline`)
  - listen clipboard to stdout use `clipboard-watch clipboardy`
    - DONE nodegyp build on windows
    - TODO Solve the errors below. welcome to PR me.

Met errors below:

```batch
.\packages\snoclip>node src/index.js
.\node_modules\.pnpm\bindings@1.2.1\node_modules\bindings\bindings.js:91
  throw err
  ^

Error: Could not locate the bindings file. Tried:
 → .\node_modules\.pnpm\ref@1.3.5\node_modules\ref\build\binding.node
 → .\node_modules\.pnpm\ref@1.3.5\node_modules\ref\build\Debug\binding.node
 → .\node_modules\.pnpm\ref@1.3.5\node_modules\ref\build\Release\binding.node
 → .\node_modules\.pnpm\ref@1.3.5\node_modules\ref\out\Debug\binding.node
 → .\node_modules\.pnpm\ref@1.3.5\node_modules\ref\Debug\binding.node
 → .\node_modules\.pnpm\ref@1.3.5\node_modules\ref\out\Release\binding.node
 → .\node_modules\.pnpm\ref@1.3.5\node_modules\ref\Release\binding.node
 → .\node_modules\.pnpm\ref@1.3.5\node_modules\ref\build\default\binding.node
 → .\node_modules\.pnpm\ref@1.3.5\node_modules\ref\compiled\18.6.0\win32\x64\binding.node
    at bindings (.\node_modules\.pnpm\bindings@1.2.1\node_modules\bindings\bindings.js:88:9)
    at Object.<anonymous> (.\node_modules\.pnpm\ref@1.3.5\node_modules\ref\lib\ref.js:5:47)
    at Module._compile (node:internal/modules/cjs/loader:1120:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1174:10)
    at Module.load (node:internal/modules/cjs/loader:998:32)
    at Module._load (node:internal/modules/cjs/loader:839:12)
    at Module.require (node:internal/modules/cjs/loader:1022:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (.\node_modules\.pnpm\ffi@2.3.0\node_modules\ffi\lib\ffi.js:6:11)
    at Module._compile (node:internal/modules/cjs/loader:1120:14) {
  tries: [
    '.\\node_modules\\.pnpm\\ref@1.3.5\\node_modules\\ref\\build\\binding.node',
    '.\\node_modules\\.pnpm\\ref@1.3.5\\node_modules\\ref\\build\\Debug\\binding.node',
    '.\\node_modules\\.pnpm\\ref@1.3.5\\node_modules\\ref\\build\\Release\\binding.node',
    '.\\node_modules\\.pnpm\\ref@1.3.5\\node_modules\\ref\\out\\Debug\\binding.node',
    '.\\node_modules\\.pnpm\\ref@1.3.5\\node_modules\\ref\\Debug\\binding.node',
    '.\\node_modules\\.pnpm\\ref@1.3.5\\node_modules\\ref\\out\\Release\\binding.node',
    '.\\node_modules\\.pnpm\\ref@1.3.5\\node_modules\\ref\\Release\\binding.node',
    '.\\node_modules\\.pnpm\\ref@1.3.5\\node_modules\\ref\\build\\default\\binding.node',
    '.\\node_modules\\.pnpm\\ref@1.3.5\\node_modules\\ref\\compiled\\18.6.0\\win32\\x64\\binding.node'
  ]
}

Node.js v18.6.0
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
