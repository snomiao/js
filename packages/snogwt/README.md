# snogwt (sno git worktree)

a simple git worktree helper that checkout your branch into repo/worktrees/branch@repo/

Examples:

```shell

cd your_repo

# try create develop branch and checkout into ./worktrees/develop@your_repo, and open vscode to edit it
snogwt develop

# try create develop branch and checkout into ./worktrees/develop@your_repo
snogwt develop --no-vscode

# try remove develop branch's worktree if it's checked out somewhere.
snogwt --remove develop

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