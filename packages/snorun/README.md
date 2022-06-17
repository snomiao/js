# snorun

Run & interact with shell command like in node without pain.

## Feat

- Returns true if command exited with code 0 and otherwise false.
- pipe stdin and stdout and stderr with your main process

## Usage

If you like to do this in shell,

```shell
echo command && echo succ || echo fail
```

then you can convert them into javascript

```javascript
import snorun from "snorun";

const result =
  ((await snorun("echo command")) && (await snorun("echo succ"))) || (await snorun("echo fail"));

// result = true

// and your console will show like this
// > command
// > succ
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
