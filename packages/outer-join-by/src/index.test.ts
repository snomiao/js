import { deepStrictEqual } from "assert";
import { it } from "vitest";
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
