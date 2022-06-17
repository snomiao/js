# outer-join-by

Outer join two arrays of object by a key, and return a correct typed array of objects.

## Usage

```typescript
import { deepStrictEqual } from "assert";
import outerJoinBy from ".";

it("join by name", () => {
  const subscribers = [
    { email: "snomiao@gmail.com", name: "snomiao", joinAt: +new Date("2022-06-14T02:56:57.749Z") },
  ];
  const likes = [{ name: "snomiao", like: ["coding", "reading", "parkour"] }];
  const expected = [
    {
      email: "snomiao@gmail.com",
      name: "snomiao",
      like: ["coding", "reading", "parkour"],
      joinAt: +new Date("2022-06-14T02:56:57.749Z"),
    },
  ];
  const result = outerJoinBy("name", subscribers, likes);
  deepStrictEqual(result, expected);
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
