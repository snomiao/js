# snofa

Snomiao's Functional Async pipelines with typescript support.

## Usage

```typescript
// sync functional pipeline
// apply functions from left to right
snof(12, (v) => v * 12); // === 144
snof((v: number) => v * 12)(12); // === 144
snof(
  () => 12,
  (v) => v * 12,
)(); // === 144
snof(
  () => 12,
  snof((v) => v * 12),
)(); // === 144

// async functional pipeline
// apply functions from left to right
// it's not nessary to use await in nested snofa
await snofa(12, (v) => v * 12); // === 144
await snofa((v: number) => v * 12)(12); // === 144
await snofa(
  () => 12,
  (v) => v * 12,
); // === 144
await snofa(
  () => 12,
  snofa((v) => v * 12),
)(); // === 144
```

## TODO

- [ ] Build every single function exported into stand-alone package

## Reference

- [tubo - npm](https://www.npmjs.com/package/tubo)
- [Ramda Documentation](https://ramdajs.com/docs/)
- [selfrefactor/rambda](https://github.com/selfrefactor/rambda)
- [Lodash Documentation](https://lodash.com/docs/)

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

