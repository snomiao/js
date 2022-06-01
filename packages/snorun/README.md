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
