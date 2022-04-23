# my-version

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
