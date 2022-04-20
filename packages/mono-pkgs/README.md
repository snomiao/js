# mono-pkgs (WIP)

Update monorepo packages.json repos

## Feat & Roadmap

- [ ] Check worktree clean before run with `git diff --quiet` (you can run manually)
- [x] Update `packages/**/package.json` from `/package.json`
  - [x] repository: `${root.repository}/tree/${mainBranchName}/${pkgRelDir}`
  - [x] homepage: `${repository}#readme`
  - [x] bugs search `${repo}/issues?q=is%3Aissue+is%3Aopen+${package_name}`
  - [x] license `${root.license}`
  - [x] author `${root.author}`
  - [ ] format with `sort-package-json` if installed in root repo
- [ ] copy `/LICENSE.md` into packages
- [ ] aggregate links of `packages/**/README.md` into `/INDEX.md`
- [x] args config:
  - [ ] read `pnpm-workspaces.yaml` or not
  - [ ] read workspaces in `package.json` or not
  - [ ] overwrite or keep existed fields
  - [ ] overwrite or keep existed files
- [x] respect .gitignores

PR's welcome.

## Author

Author: snomiao@gmail.com
LICENSE: GPLv3

## Reference

- [node.js - Configure repository field on package.json on monorepo - Stack Overflow](https://stackoverflow.com/questions/52922529/configure-repository-field-on-package-json-on-monorepo)
