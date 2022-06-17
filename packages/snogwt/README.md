# snogwt (sno git worktree)

a simple git worktree helper that checkout your branch into repo/worktrees/branch@repo/

## Examples:

```shell

cd your_repo

snogwt develop
# try create develop branch
# and checkout into repo/worktrees/develop@your_repo,
# add /worktrees to .gitignore if not existed
# and try open vscode to edit it

snogwt develop --no-vscode
snogwt develop -n
# same as above but don't open vscode

snogwt --remove develop
# try remove develop branch's worktree if it's checked out somewhere.
# then you can remove the branch by 'git branch remove ...

# list all worktrees, same as "git worktree list"
snogwt --list
snogwt -l
snogwt

```

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
