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

## Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [1.1.11](https://github.com/snomiao/js/compare/md-aggregate@0.1.10...md-aggregate@1.1.11) (2022-05-03)

**Note:** Version bump only for package md-aggregate

### [0.1.10](https://github.com/snomiao/js/compare/md-aggregate@0.1.9...md-aggregate@0.1.10) (2022-04-23)

**Note:** Version bump only for package md-aggregate

### [0.1.9](https://github.com/snomiao/js/compare/md-aggregate@0.1.8...md-aggregate@0.1.9) (2022-04-23)

**Note:** Version bump only for package md-aggregate

### [0.1.8](https://github.com/snomiao/js/compare/md-aggregate@0.1.7...md-aggregate@0.1.8) (2022-04-23)

#### Bug Fixes

- srcContentWithoutSectionStart ([ec8f862](https://github.com/snomiao/js/commit/ec8f862a50da91470bb670789849d58fef069ae3))

### [0.1.7](https://github.com/snomiao/js/compare/md-aggregate@0.1.6...md-aggregate@0.1.7) (2022-04-23)

#### Bug Fixes

- replace # => ## ([bfc6e79](https://github.com/snomiao/js/commit/bfc6e798e455714dea2caf181614003ba243e3f2))
- srcContentWithoutSectionStart ([3837654](https://github.com/snomiao/js/commit/383765497b9964381eaf5f65483e94a043f4bdf0))

### [0.1.6](https://github.com/snomiao/js/compare/md-aggregate@0.1.5...md-aggregate@0.1.6) (2022-04-21)

**Note:** Version bump only for package md-aggregate

### [0.1.5](https://github.com/snomiao/js/compare/md-aggregate@0.1.4...md-aggregate@0.1.5) (2022-04-20)

**Note:** Version bump only for package md-aggregate

### [0.1.4](https://github.com/snomiao/js/compare/md-aggregate@0.1.3...md-aggregate@0.1.4) (2022-04-20)

**Note:** Version bump only for package md-aggregate

### [0.1.3](https://github.com/snomiao/js/compare/md-aggregate@0.1.2...md-aggregate@0.1.3) (2022-04-20)

**Note:** Version bump only for package md-aggregate

### [0.1.2](https://github.com/snomiao/js/compare/md-aggregate@0.1.1...md-aggregate@0.1.2) (2022-04-20)

#### Bug Fixes

- writeFile in monopkgs ([d18e90a](https://github.com/snomiao/js/commit/d18e90a90dc8fc053092938148247dd3717d51c9))

### [0.1.1](https://github.com/snomiao/js/compare/md-aggregate@0.1.0...md-aggregate@0.1.1) (2022-04-20)

**Note:** Version bump only for package md-aggregate

### [0.1.0](https://github.com/snomiao/js/compare/md-aggregate@0.0.8...md-aggregate@0.1.0) (2022-04-20)

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
