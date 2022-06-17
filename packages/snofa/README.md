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

## Reference

- [tubo - npm](https://www.npmjs.com/package/tubo)
- [Ramda Documentation](https://ramdajs.com/docs/)
- [selfrefactor/rambda](https://github.com/selfrefactor/rambda)
- [Lodash Documentation](https://lodash.com/docs/)
