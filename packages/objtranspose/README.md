# objtranspose

Transpose arrayOfObject <==> objectOfArray with typescript typed result.

## Usage

```typescript
import objTranspose, { aoj2joa, joa2aoj } from "objtranspose";

const aoj = [
  { a: 1, b: 2, c: null },
  { a: 2, c: 3 },
  { a: 3, c: 4 },
];
const joa = {
  a: [1, 2, 3],
  b: [2, undefined, undefined],
  c: [null, 3, 4],
};

console.log(objTransipose(aoj)); // => joa
console.log(objTranspose(joa)); // => aoj
```

## Test

### [Test](src/objTrans.test.ts)

```typescript
import { it } from "mocha";
import objTranspose, { aoj2joa, joa2aoj } from "./objTrans";

const aoj = [
  { a: 1, b: 2, c: null },
  { a: undefined, c: 3 },
  { a: 3, c: 4 },
];
const joa = {
  a: [1, undefined, 3],
  b: [2, undefined, undefined],
  c: [null, 3, 4],
};

const throws = () => {
  throw new Error("");
};
const shouldEq = (a, b) => JSON.stringify(a) === JSON.stringify(b) || throws();
//
it("use aoj2joa transpose Array of Object to Object of Array", () => {
  shouldEq(aoj2joa(aoj), joa);
});
it("use joa2aoj transpose Object of Array to Array of Object", () => {
  shouldEq(aoj, joa2aoj(joa));
});
it("use objtranspose transpose Array of Object to Object of Array", () => {
  shouldEq(objTranspose(aoj), joa);
});
it("use objtranspose transpose Object of Array to Array of Object", () => {
  shouldEq(aoj, objTranspose(joa));
});
it("use objtranspose transpose Array of Object twice and get it self", () => {
  shouldEq(objTranspose(objTranspose(aoj)), aoj);
});
it("use objtranspose transpose Object of Array twice and get it self", () => {
  shouldEq(joa, objTranspose(objTranspose(joa)));
});
```

### Test Result

```plaintext

  ✔ use aoj2joa transpose Array of Object to Object of Array
  ✔ use joa2aoj transpose Object of Array to Array of Object
  ✔ use objtranspose transpose Array of Object to Object of Array
  ✔ use objtranspose transpose Object of Array to Array of Object
  ✔ use objtranspose transpose Array of Object twice and get it self
  ✔ use objtranspose transpose Object of Array twice and get it self

  6 passing (17ms)

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
