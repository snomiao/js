# chrome-dev

Launch puppeteer and open your pages with devtools.

## Usage

```shell
npm i -g chrome-dev

chrome-dev
# launch chrome with empty page

chrome-dev -e ./extension
# laucnh chrome with ./extension loaded as extension

chrome-dev -e ./extension https://example.com
# same as above and open example.com in the first page

chrome-dev -p 3000
# launch chrome and open http://localhost:3000

chrome-dev -v
# show version

```

## Author & License

Author: snomiao <snomiao@gmail.com>
LICENSE: GPLv3
