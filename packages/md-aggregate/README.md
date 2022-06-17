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
