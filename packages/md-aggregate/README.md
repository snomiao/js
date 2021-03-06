# MD-Aggregate

Aggregate README.md with CHANGELOG.md or whatever.md.

## Install

```shell
npm i -g md-aggregate
```

## Usage

```plaintext
md-aggregate <target> [input..]

aggregate markdown files

Options:
  -w, --write    write mode (when missing you will get preview in console)
                                                                     [boolean]  -i, --input    source markdown files                                 [array]  -t, --target   destination markdown file                            [string]  -h, --help     Show help                                           [boolean]  -v, --version  Show version number                                 [boolean]

Examples:
  preview:   md-aggregate README.md CHANGELOG.md
  one:       md-aggregate README.md CHANGELOG.md -w
  multi:     md-aggregate README.md ABOUT.md LICENSE.md CHANGELOG.md -w
  multi:     md-aggregate README.md -i ABOUT.md -i LICENSE.md -i CHANGELOG.md
             -w
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
```

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

## Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [2.1.9](https://github.com/snomiao/js/compare/md-aggregate@2.1.8...md-aggregate@2.1.9) (2022-07-03)

**Note:** Version bump only for package md-aggregate

### [2.1.8](https://github.com/snomiao/js/compare/md-aggregate@2.1.7...md-aggregate@2.1.8) (2022-07-03)

#### Bug Fixes

- **md-aggregate:** remove symlink due to permission issue ([46e7fd6](https://github.com/snomiao/js/commit/46e7fd68b98e5bfcdea945d69588cc73604e1a66))

### [2.1.7](https://github.com/snomiao/js/compare/md-aggregate@2.1.6...md-aggregate@2.1.7) (2022-07-03)

#### Bug Fixes

- **md-aggregate:** prettier deps ([a7cdff8](https://github.com/snomiao/js/commit/a7cdff81a38d6a3b09eda84479f57305d3c68d25))

### [2.1.6](https://github.com/snomiao/js/compare/md-aggregate@2.1.2...md-aggregate@2.1.6) (2022-07-03)

#### Bug Fixes

- bump versions ([5919ed1](https://github.com/snomiao/js/commit/5919ed121623654879820b063cc4d4252dee47d6))
- **md-aggregate:** imports ([a80e012](https://github.com/snomiao/js/commit/a80e0125a6d1476f73cfa83a93b72e4a9bc3c605))
- **md-aggregate:** postversion ([7b9cdf7](https://github.com/snomiao/js/commit/7b9cdf70c5a8258e1fd26956b0f38a55e309b4c6))
- **md-aggregate:** wrap with aiife ([155b9d1](https://github.com/snomiao/js/commit/155b9d1004a2abd3c1503db587be8352cb4e4e55))

### [2.1.2](https://github.com/snomiao/js/compare/md-aggregate@2.1.1...md-aggregate@2.1.2) (2022-06-17)

**Note:** Version bump only for package md-aggregate

### [2.1.1](https://github.com/snomiao/js/compare/md-aggregate@2.1.0...md-aggregate@2.1.1) (2022-06-17)

**Note:** Version bump only for package md-aggregate

### [2.1.0](https://github.com/snomiao/js/compare/md-aggregate@1.1.12...md-aggregate@2.1.0) (2022-06-17)

#### Bug Fixes

- **all:** update docs ([0c84651](https://github.com/snomiao/js/commit/0c84651ebba4a14fcb105611ddeb7a51ff887a36))
- **md-aggregate:** use esbuild ([92b8891](https://github.com/snomiao/js/commit/92b88918b39ed2d1050fa5bc7397f260eaf6af53))
- **md-aggregate:** use snobuild and update docs ([7acf192](https://github.com/snomiao/js/commit/7acf19281bbf444c2bb6aad1f02423f603f6fb2b))
- **snoval:** rename pkg ([3b86bf7](https://github.com/snomiao/js/commit/3b86bf7dfba2c0630eabe6a7fc1edce9de03066b))

#### Features

- **md-aggregate:** multi input ([fcf0b6e](https://github.com/snomiao/js/commit/fcf0b6ed6e799ef1288aeb324ea66b7ab36701d2))

Note: This section is orginally written in CHANGELOG.md file and is merged into README.md to show how this project works.

### [1.1.12](https://github.com/snomiao/js/compare/md-aggregate@1.1.11...md-aggregate@1.1.12) (2022-05-12)

**Note:** Version bump only for package md-aggregate

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
