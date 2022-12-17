# snocommit

A Simple way to commit changes in current folder.

Example: `fix <part> [description..]`

part can be a dot '.' which means you want use current folder name as part

## Install

```shell
pnpm install -g snocommit
# or
yarn install -g snocommit
# or
npm install -g snocommit
```

## Usage & Workflow

```shell

# ...doing fixes changes ... and cd into your worked dir
# and run this > fix . cwd

$ ./ > cd packages/snocommit
$ ./packages/snocommit> fix . cwd
> git add . && git commit -m "fix(snocommit): cwd" && git pull && git push

REM all avaliable commands

# short alias
styles <part> [description..]
docs <part> [description..]
fix <part> [description..]
feat <part> [description..]
breaking <part> [description..]
chore <part> [description..]

# full command
snocommit styles <part> [description..]
snocommit docs <part> [description..]
snocommit fix <part> [description..]
snocommit feat <part> [description..]
snocommit breaking <part> [description..]
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
