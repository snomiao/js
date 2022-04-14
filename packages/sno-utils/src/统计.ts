import { 求于 } from "./函式";
import { 续函 } from "./函续";
import { 列, 列列, 数, 表列 } from "./类型";
import { 列值种数表, 表键值映, 表值列, 列映, 数列和 } from "./表列";
import { 表值映, 表列翻转 } from "./表列";

export function 列熵(列: any[]) {
    const n = 列.length;
    return 求于(
        列,
        续函(
            列值种数表,
            表键值映(值 => 值),
            表值列,
            列映(i => i / n),
            列映(p => -p * Math.log2(p)),
            数列和
        )
    );
}
export function 表列熵表(表列: 表列) {
    return 表值映(列熵)(表列翻转(表列));
}
// export const 最长共列输出 = (矩阵:列列, a:列, b:列, x:数, y:数) =>
//     !x || !y
//         ? ''
//         : a[x - 1] === b[y - 1]
//             ? 最长共列输出(矩阵, a, b, x - 1, y - 1) + a[x - 1]
//             : 矩阵[y][x - 1] > 矩阵[y - 1][x]
//                 ? 最长共列输出(矩阵, a, b, x - 1, y)
//                 : 最长共列输出(矩阵, a, b, x, y - 1)
// export const 最长共列 = (a:列, b:列) => {
//     const w = a.length, h = b.length
//     const m = Array(1 + h).fill(0).map(() => Array(1 + w).fill(0))
//     for (let y = 0; y < h; y++)
//         for (let x = 0; x < w; x++)
//             m[1 + y][1 + x] =
//                 a[x] === b[y]
//                     ? m[y][x] + 1
//                     : Math.max(m[y][1 + x], m[1 + y][x])
//     return 最长共列输出(m, a, b, w, h)
// }
