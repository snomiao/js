# snosay

A cli wrapper for say, crossplatform TTS (Text To Speech) Module for Node.js

## Usage Examples

```shell
npx -y -- snosay --list
# Microsoft David Desktop
# Microsoft Zira Desktop

npx -y -- snosay hello, world
npx -y -- snosay --voice "Microsoft David Desktop" --speed 0.5 hello, world
npx -y -- snosay --voice "Microsoft Zira Desktop" --speed 1.5 hello, world
npx -y -- snosay --voice "Microsoft Zira Desktop" --speed 1.5 --output ./hello-world.mp3 hello, world

# or install as global package
npm i -g snosay

snosay --list
snosay --voice "Microsoft David Desktop" --speed 0.5 hello, world
snosay --voice "Microsoft Zira Desktop" --speed 1.5 hello, world
snosay --voice "Microsoft Zira Desktop" --speed 1.5 --output ./hello-world.mp3 hello, world

# or use stdin
echo hello, world | snosay

# or use REPL mode

# snosay - REPL Mode: speak the lines you just type.
# try type anything and press enter
snosay

# try type anything and press enter
snosay -v "Microsoft Zira Desktop"

# you can kill the process if you need to stop saying
```

## Import as Library

```js
import { speak } from "snosay";
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
