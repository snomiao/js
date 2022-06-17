# monopkgs (WIP)

Update monorepo `packages/**/package.json`, and LICENSES

## Usage

```shell
cd $monorepo && npx monopkgs
```

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

## Reference

- [node.js - Configure repository field on package.json on monorepo - Stack Overflow](https://stackoverflow.com/questions/52922529/configure-repository-field-on-package-json-on-monorepo)

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
