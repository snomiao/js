import { 续函 } from "./函续";
import { 深等断言 } from "./测试";
import { 列交, 列值种数表, 列列翻转, 表列键交, 表键映 } from "./表列";

深等断言("列交")(
  列交([
    [1, 2, 3],
    [2, 3, 4],
  ]),
  [2, 3],
);
深等断言("表列键交")(
  表列键交([
    { a: 1, b: 2 },
    { b: 3, c: 4 },
  ]),
  ["b"],
);
深等断言("列列翻转")(
  列列翻转([
    [1, 2],
    [3, 4],
  ]),
  [
    [1, 3],
    [2, 4],
  ],
);
深等断言("列列翻转2次")(
  续函(
    列列翻转,
    列列翻转,
  )([
    [1, 2],
    [3, 4],
  ]),
  [
    [1, 2],
    [3, 4],
  ],
);
深等断言("列值种数表")(列值种数表([1, 2, 3, 3, 3, 2, ""]), { 1: 1, 2: 2, 3: 3, "": 1 });
深等断言("表键映")(表键映((k): string => `${k.toString()}${k.toString()}`)({ a: 1, b: 2 }), {
  aa: 1,
  bb: 2,
});

console.log("test ok");
