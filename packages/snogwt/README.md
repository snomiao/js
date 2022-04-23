# snogwt (sno git worktree)

a simple git worktree helper that checkout your branch into repo/worktrees/branch@repo/

Examples:

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

## Author & License

Author: snomiao <snomiao@gmail.com>
LICENSE: GPLv3

## ref

- [How to build a CLI with Node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)
- [say - npm](https://www.npmjs.com/package/say)
