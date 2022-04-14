# @snomiao/say

A cli wrapper for say

## Usage Examples

```shell
npx -y -- @snomiao/say --list
# Microsoft David Desktop
# Microsoft Zira Desktop

npx -y -- @snomiao/say hello, world
npx -y -- @snomiao/say --voice "Microsoft David Desktop" --speed 0.5 hello, world
npx -y -- @snomiao/say --voice "Microsoft Zira Desktop" --speed 1.5 hello, world
npx -y -- @snomiao/say --voice "Microsoft Zira Desktop" --speed 1.5 --output ./hello-world.mp3 hello, world

# or

npm i -g @snomiao/say

say --list
say --voice "Microsoft David Desktop" --speed 0.5 hello, world
say --voice "Microsoft Zira Desktop" --speed 1.5 hello, world
say --voice "Microsoft Zira Desktop" --speed 1.5 --output ./hello-world.mp3 hello, world

# you can kill the process if you need to stop saying
```

## Import as Library

```js
import { speak } from "@snomiao/say";
await speak("test passed", undefined, 2);
```

## Declares

```ts
export declare const speak: (
  text: string,
  voice?: string | undefined,
  speed?: number | undefined,
) => Promise<void>;
export declare const stop: () => Promise<void>;
export declare const getInstalledVoices: () => Promise<string[]>;
export declare const exportFile: (
  text: string,
  voice?: string | undefined,
  speed?: number | undefined,
  filePath?: string | undefined,
) => Promise<void>;
```

## Author & License

Author: snomiao <snomiao@gmail.com>
LICENSE: GPLv3

## ref

- [How to build a CLI with Node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)
