# random-choice

random-choice a value in array

## Usage

```typescript
import randomChoose, { randomKeyChoose } from "random-choose";

const a = [3, 4, 5, 6];

console.log(randomChoose(a)); // one of 3, 4, 5, 6
console.log(randomKeyChoose(a)); // one of 0, 1, 2, 3

const obj = { a: "q", s: "w", d: "e", f: "r" };

console.log(randomChoose(obj)); // one of q,w,e,r
console.log(randomKeyChoose(obj)); // one of a,s,d,f
```

## Test

```typescript
import { expect, it } from "vitest";
import randomChoose, { randomKeyChoose } from ".";
it("random-choice", () => {
  const a = [3, 4, 5, 6];

  console.log(randomChoose(a)); // one of 3, 4, 5, 6
  console.log(randomKeyChoose(a)); // one of 0, 1, 2, 3

  expect(a.includes(randomChoose(a))).toBe(true);
  expect([...a.keys()].includes(randomKeyChoose(a))).toBe(true);

  expect(randomChoose(null)).toBe(undefined);
  expect(randomKeyChoose(null)).toBe(undefined);

  expect(randomChoose([])).toBe(undefined);
  expect(randomKeyChoose([])).toBe(undefined);

  const obj = { a: "q", s: "w", d: "e", f: "r" };
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  console.log(randomChoose(obj)); // one of q,w,e,r
  console.log(randomKeyChoose(obj)); // one of a,s,d,f

  expect(values.includes(randomChoose(obj))).toBe(true);
  expect(keys.includes(randomKeyChoose(obj))).toBe(true);

  expect(randomChoose(null)).toBe(undefined);
  expect(randomKeyChoose(null)).toBe(undefined);

  expect(randomChoose({})).toBe(undefined);
  expect(randomKeyChoose({})).toBe(undefined);
});
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
