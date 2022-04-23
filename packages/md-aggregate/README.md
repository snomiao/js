# MD-Aggregate

Aggregate README.md with CHANGELOG.md or whatever.

## Usage

```shell
npx md-aggregate CHANGELOG.md README.md --write

# or

npm i -g md-aggregate
md-aggregate CHANGELOG.md README.md --w
```

### help

```plaintext
md-aggregate [...src] dst [options]

Example: md-aggregate CHANGELOG.md README.md -w

Options:
  -v, --version : show version
  -h, --help    : show help
  -w, --write   : write mode (when missing you will get preview in console)
```

## Description

Insert markdown documents into one document, and level up the titles,

For Example, you have README.md like this

```markdown
# README.md

## OTHER

...OTHER
```

and CHANGELOG.md like this

```markdown
# CHANGE LOG

## x.x.x

...CHANGELOG
```

It will be append or replaced into README.md like this:

```markdown
# README

## OTHER

...OTHER

## CHANGE LOG

### x.x.x

...CHANGELOG

...

## License

License: GPLv3
Author: snomiao <snomiao@gmail.com>
```
