# chrome-dev

Launch puppeteer and open your pages with devtools.

## Usage

```shell

# install
npm i -g chrome-dev

# or without install
npx chrome-dev

# launch chrome with empty page
chrome-dev

# laucnh chrome with ./extension loaded as extension
chrome-dev -e ./extension

# same as above and open example.com in the first page
chrome-dev -e ./extension https://example.com

# launch chrome and open http://localhost:3000
chrome-dev -p 3000

# show version
chrome-dev -v

# show help
chrome-dev -h
```

## Author & License

Author: snomiao <snomiao@gmail.com>
LICENSE: GPLv3
