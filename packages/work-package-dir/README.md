# work-package-dir

cd into package.json directory

## Usage

Assume you have files as ...

```plaintext
/root/pkg/package.json
/root/pkg/data/my.csv
/root/pkg/src/tools/myscript.tsx
```

and you want to ...

```bash
cd /root/pkg/src/tools
tsx myscript.tsx
```

then there the script should be

```typescript
// myscript.tsx

process.cwd();
// = /root/pkg/src/tools/

// await read("data/my.csv")
// ❌

await workPackageDir();

process.cwd();
// = /root/pkg/

await read("data/my.csv");
// ✅
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
