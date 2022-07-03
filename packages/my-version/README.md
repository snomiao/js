# my-version

Prints my package.json version. depends working dir.

## Usage

```shell
# shell

npm i -g my-version

my-version
# 0.2.5

npx my-version
# 0.2.5
```

```javascript
// javascript
import { myVersion } from "my-version";

...

if (args["--version"]) console.log(`v${await myVersion()}`)
```

## Reference

- [pkg-dir - npm](https://www.npmjs.com/package/pkg-dir)

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
