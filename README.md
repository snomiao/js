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

For Example, you have README.md CHANGELOG.md like this

```markdown
# README.md

## OTHER

...
```

```markdown
# Change Log

## x.x.x

...
```

It will be append or replaced into README.md like this:

```markdown
# README

## OTHER

...

## Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.0](https://github.com/snomiao/js/compare/md-aggregate@0.0.8...md-aggregate@0.1.0) (2022-04-20)

#### Features

- escapeStringRegexp ([a1263b3](https://github.com/snomiao/js/commit/a1263b33a1d15502bcb4b0b26f804cd1fa0a17c3))

### [0.0.8](https://github.com/snomiao/js/compare/md-aggregate@0.0.7...md-aggregate@0.0.8) (2022-04-20)

#### Bug Fixes

- add prettier and selflink to CHANGELOG.md ([df03f61](https://github.com/snomiao/js/commit/df03f61e2d3a5b46e87cecec592b67ceaad1381d))

### [0.0.7](https://github.com/snomiao/js/compare/md-aggregate@0.0.6...md-aggregate@0.0.7) (2022-04-20)

#### Bug Fixes

- apply write md-aggregate ([2aa4291](https://github.com/snomiao/js/commit/2aa4291997dea136e7769d7b6986e6e818da37ef))

### [0.0.6](https://github.com/snomiao/js/compare/md-aggregate@0.0.5...md-aggregate@0.0.6) (2022-04-20)

**Note:** Version bump only for package md-aggregate

### [0.0.5](https://github.com/snomiao/js/compare/md-aggregate@0.0.4...md-aggregate@0.0.5) (2022-04-20)

#### Bug Fixes

- apply md-aggregate ([2343a8d](https://github.com/snomiao/js/commit/2343a8dc6567da2093198e466a05aed60639484d))

### [0.0.4](https://github.com/snomiao/js/compare/md-aggregate@0.0.3...md-aggregate@0.0.4) (2022-04-20)

**Note:** Version bump only for package md-aggregate

### [0.0.3](https://github.com/snomiao/js/compare/md-aggregate@0.0.2...md-aggregate@0.0.3) (2022-04-20)

**Note:** Version bump only for package md-aggregate

### 0.0.2 (2022-04-20)

**Note:** Version bump only for package md-aggregate

## License

License: GPLv3
Author: snomiao <snomiao@gmail.com>
