# PiServer

Dead simple piping server connecting two universe between HTTP-requests and stdio-CLI. Worked line by line.

## Usage

```shell
piserve | snosay --voice "Microsoft David Desktop"
```

```shell

# sending text to stdout
curl http://localhost:25971/ -d "Hello, World" -H "content-type: text/plain"
curl http://localhost:25971/text/Hello,%20World
curl http://localhost:25971/?text=Hello,+World
curl http://localhost:25971/ -d "{""text"":""Hello, World""}" -H "content-type: application/json"

# stop server
curl http://localhost:25971/stop
```

## Example Scenarios

While I receive lots of messages from my gf. I want know what she's talking about as soon as possible, even without switching into my telegram app. So I made this to SPEAK the latest message from telegram.

1. Run command to setup an speaking server

```batch
piserve | snosay --voice "Microsoft David Desktop"
```

1. Copy and paste the this userscript to your tampermonkey

```js
// ==UserScript==
// @name               Telegram Speaker
// @namespace          snomiao@gmail.com
// @author             snomiao@gmail.com
// @version            0.0.1
// @description        Speak telegram
// @match              https://*.telegram.org/z/
// @grant              none
// @run-at             document-start
// @license            GPL-3.0+
// @supportURL         https://github.com/snomiao/userscript.js/issues
// @contributionURL    https://snomiao.com/donate
// ==/UserScript==
//
// Prepare scripts sample:
//
// npm i -g piserve snosay
// piserve | snosay --voice "Microsoft Huihui Desktop"
//
const lastMsg = () =>
  [...document.querySelectorAll(".Message:not(.own) .text-content")]
    .map((e) => e.textContent)
    .reverse()[0];
const say = (s) => s && fetch("http://localhost:25971/?text=" + encodeURIComponent(s));
const chagnedFilterMaker = (init) => (e) => e !== init ? (init = e) : undefined;
const changedFilter = chagnedFilterMaker("");
const looper = () => (say(changedFilter(lastMsg())), 1);
while (looper()) await new Promise((r) => setTimeout(r, 1000));
```

## TODO

- [x] Should never run any command by http requests
- [ ] Read stdin by http requests
- [ ] Add host and port options
- [ ] Sending binary by base64
- [ ] Files upload or download

## Reference

- [https://www.npmjs.com/package/stdserve](https://www.npmjs.com/package/stdserve)
