# mono-pkgs (WIP)

Update monorepo packages.json repos

## Feat

- [ ] Check worktree clean before run with `git diff --quiet`
- [ ] Update `packages/**/package.json` from /package.json
  - [ ] repository: `${root.repository}/tree/${mainBranchName}/${pkgRelDir}`
  - [ ] homepage: `${repository}#readme`
  - [ ] topiced bugs `${repo}/issues?q=is%3Aissue+is%3Aopen+${package_name}`
  - [ ] license `${root.license}`
- [ ] copy `/LICENSE.md` into packages
- [ ] aggregate links of `packages/**/README.md` into `/INDEX.md`
- [ ] overwrite or keep existed option
- [ ] respect .gitignores

## Reference

- [node.js - Configure repository field on package.json on monorepo - Stack Overflow](https://stackoverflow.com/questions/52922529/configure-repository-field-on-package-json-on-monorepo)
