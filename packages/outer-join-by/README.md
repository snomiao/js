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
