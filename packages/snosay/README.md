# snosay

A cli wrapper for [say - npm](https://www.npmjs.com/package/say), crossplatform TTS (Text To Speech) Module for Node.js

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

# speak texts from your clipboard, (Note: paste is a windows command)
paste | snosay

# congratulate when build done, and oops when the build fail
npm run build && snosay congratulate your built is success!! || snosay oh no the build fails

# you can kill the process if you need to stop saying
```

## Import as Library

```js
import { speak } from "snosay";
await speak("test passed", undefined, 2);
```

## API

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

## Roadmap

- [x] cli
- [ ] set default voice

## ref

- [How to build a CLI with Node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)
- [say - npm](https://www.npmjs.com/package/say)

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
