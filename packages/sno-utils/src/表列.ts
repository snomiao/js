/**
 * Copyright 2019-2021 snomiao(snomiao@gmail.com)
 */

/**
 * 表列实用函数
 * author: snomiao(snomiao@gmail.com)
 */
import { 求于 } from "./函式";
import { 续函, 进行 } from "./函续";
import { 值, 列, 列列, 对列, 归函, 数列, 映函, 筛函, 表, 表列, 键 } from "./类型";

// if (require.main === module) (async () => {
//     深等断言('列交')(
//         列交([[1, 2, 3], [2, 3, 4]]),
//         [2, 3])
//     深等断言('表列键交')(
//         表列键交([{ a: 1, b: 2 }, { b: 3, c: 4 }]),
//         ['b'])
//     深等断言('列列翻转')(
//         列列翻转([[1, 2], [3, 4]]),
//         [[1, 3], [2, 4]])
//     深等断言('列列翻转2次')(
//         续函(列列翻转, 列列翻转)([[1, 2], [3, 4]]),
//         [[1, 2], [3, 4]])
//     深等断言('列值种数表')(
//         列值种数表([1, 2, 3, 3, 3, 2, '']),
//         { 1: 1, 2: 2, 3: 3, '': 1 })
//     深等断言('表键映')(
//         表键映((k): string => `${k.toString()}${k.toString()}`)({ a: 1, b: 2 }),
//         { aa: 1, bb: 2 })
// })().then(console.log).catch(console.error)

export function 表压平(结构: object): object {
    return 求于(
        结构,
        续函(
            表对列,
            列映(([键, 值]) => {
                if (typeof 值 === "object" && 值.toString() === "[object Object]") {
                    return Object.entries(表压平(值)).map(([子键, 值]) => [键 + "." + 子键, 值]);
                }
                return [[键, 值]];
            }),
            列列平压,
            对列表
        )
    );
}
export const 列不含值 = (列: 列) => (值: 值) => !列.includes(值);
export const 列不含值否 = (列: 列) => (值: 值) => !列.includes(值);
export const 列交 = (列列: 列[]) => 列列.reduce((甲, 乙) => 甲.filter(值 => 乙.includes(值)));
export const 列值种数表 = (列: 列) =>
    列.reduce((表, 值) => {
        表[值] = 表[值] || 0;
        表[值]++;
        return 表;
    }, {});
export const 列列平压 = (列列: 列列) => 列列.flat();
export const 列列翻转 = (列列: 值[][]) => 列列[0]?.map((_, 序) => 列列.map(列 => 列[序]));
export const 成列 = (值: any) => (列长: number) => Array(列长).fill(值);
export const 零成列 = (列长: number) => Array(列长).fill(0);
export const 一成列 = (列长: number) => Array(列长).fill(1);
export const 列反 = (列: 列) => 列.reverse();
export const 列含 = (前: 列, 后: 列) => 列筛(值 => 后.includes(值))(前);
// export const 列含值 = (列: 列) => (值: 值) => 列.includes(值)
export const 列含值否 = (列: 列) => (值: 值) => 列.includes(值);
export const 列差 = (前: 列, 后: 列) => 列筛(值 => !后.includes(值))(前);
export const 列并 = (列列: 列[]) => [...列列平压(列列)];
export const 列序映 = (函: (值: 值, 序: number) => any) => (列: 列) => 列.map((值, 序) => 函(值, 序));
export const 列归 =
    (函: 归函 = e => e, 初值?: 值) =>
    (列: 列) =>
        列.reduce(函, 初值);
export const 列映 =
    (函: 映函 = e => e) =>
    (列: 列) =>
        列.map(值 => 函(值));
export const 列筛 =
    (函: 筛函 = e => e) =>
    (列: 列) =>
        列.filter(函);
export const 列错 = (前: 列, 后: 列) => 前.map((值, i) => [值, 后[i]]);
export const 对列表 = (对列: 对列) => Object.fromEntries(对列);
export const 数列和 = (数列: 数列) => 数列.reduce((前, 后) => 前 + 后);
export const 数列生成 = (数量: number, 偏移 = 0) => [...Array(数量).keys()].map(值 => 值 + 偏移);
export const 数列积 = (数列: 数列) => 数列.reduce((前, 后) => 前 * 后);
export const 表值列 = (表: 表) => Object.values(表);
export const 表值列不含值 = (表: 表) => 列不含值否(表值列(表));
export const 表值列不含值否 = (表: 表) => 列不含值否(表值列(表));
export const 表值列交 = (表列: 表列) => 列交(表列值列(表列));
export const 表值列值种数表 = (表: 表) => 列值种数表(表值列(表));
export const 表值列列平压 = (表列: 表列) => 列列平压(表列值列(表列));
export const 表值列列翻转 = (表列: 表列) => 列列翻转(表列值列(表列));
export const 表值列反 = (表: 表) => 列反(表值列(表));
export const 表值列含 = (前: 表, 后: 表) => 列含(表值列(前), 表值列(后));
export const 表值列含值 = (表: 表) => 列含值否(表值列(表));
export const 表值列含值否 = (表: 表) => 列含值否(表值列(表));
export const 表值列差 = (前: 表, 后: 表) => 列差(表值列(前), 表值列(后));
export const 表值列并 = (表列: 表列) => 列并(表列值列(表列));
export const 表值列序映 = (函: (值: 值, 序: number) => any, 表: 表) => 列序映(函)(表值列(表));
export const 表值列归 = (函: (前: 值, 后: 值) => any, 表: 表) => 列归(函, 表值列(表));
export const 表值列映 = (函: (值: 值) => any, 表: 表) => 列映(函)(表值列(表));
export const 表值列筛 = (函: (值: 值) => boolean, 表: 表) => 列筛(函)(表值列(表));
export const 表值列错 = (前: 表, 后: 表) => 列错(表值列(前), 表值列(后));
export const 表值映 = (函: (值: 值) => any) => (表: 表) => 对列表(表对列(表).map(([名称, 位置]) => [名称, 函(位置)]));
export const 表值筛 = (函: (值: 值) => boolean) => (表: 表) => 对列表(表对列(表).filter(([, 位置]) => 函(位置)));
export const 表列值列 = (表列: 表列) => 列映(表值列)(表列);
export const 表列填充翻转 = (表列: 表列) => 对列表(表列键交(表列).map(键 => [键, 表列.map(表 => 表[键])]));
export const 表列提取 = (表列: 表列, 字段列表: string | string[]) => 对列表(表对列(表列).filter(([k]) => 字段列表.includes(k)));
export const 表列翻转 = (表列: 表列) => 对列表(表列键交(表列).map(键 => [键, 表列.map(表 => 表[键]).filter(e => e !== undefined)]));
export const 表列键交 = (表列: 表列) => 列交(表列键列(表列));
export const 表列键列 = (表列: 表列) => 列映(表键列)(表列);
export const 表对列 = (表: 表) => Object.entries(表);
export const 表投影 = (表: 表, 字段列表: string | string[]) => 对列表(表对列(表).filter(([k]) => 字段列表.includes(k)));
export const 表键值反转 = (表: 表) =>
    求于(
        表,
        表键值映(([键, 值]) => [值, 键])
    );
export const 表键值映 = (函: (键值: [string, any]) => [string, any]) => (表: 表) => 对列表(表对列(表).map(函));
export const 表键值筛 = (函: (键值: [string, any]) => boolean) => (表: 表) => 对列表(表对列(表).filter(函));
export const 表键列 = (表: 表) => Object.keys(表);
export const 表键列不含值否 = 续函(表键列, 列不含值否);
export const 表键列交 = (表列: 表列) => 列交(表列键列(表列));
export const 表键列值种数表 = (表: 表) => 列值种数表(表键列(表));
export const 表键列列平压 = (表列: 表列) => 列列平压(表列键列(表列));
export const 表键列列翻转 = (表列: 表列) => 列列翻转(表列键列(表列));
export const 表键列反 = (表: 表) => 列反(表键列(表));
export const 表键列含 = (前: 表, 后: 表) => 列含(表键列(前), 表键列(后));
export const 表键列含值 = (表: 表) => 列含值否(表键列(表));
export const 表键列含值否 = (表: 表) => 列含值否(表键列(表));
export const 表键列差 = (前: 表, 后: 表) => 列差(表键列(前), 表键列(后));
export const 表键列并 = (表列: 表列) => 列并(表列键列(表列));
export const 表键列序映 = (函: (值: 值, 序: number) => any, 表: 表) => 列序映(函)(表键列(表));
export const 表键列归 = (函: (前: 值, 后: 值) => any, 表: 表) => 列归(函, 表键列(表));
export const 表键列映 = (函: (值: 值) => any, 表: 表) => 列映(函)(表键列(表));
export const 表键列筛 = (函: (键: 键) => boolean, 表: 表) => 列筛(函)(表键列(表));
export const 表键列错 = (前: 表, 后: 表) => 列错(表键列(前), 表键列(后));
export const 表键映 = (函: (键: 键) => any) => (表: 表) => 对列表(表对列(表).map(([名称, 位置]) => [函(名称), 位置]));
export const 表键筛 = (函: (键: 键) => boolean) => (表: 表) => 对列表(表对列(表).filter(([名称]) => 函(名称)));

// export function 表按键拆解(拆解函数: (键: 键) => boolean, 拆解键名 = '键', 拆解值名 = '值') {
//     return (表: 表) => {
//         const 拆解键列: string[] = Object.keys(表).filter(拆解函数);
//         if (!拆解键列.length) return [表]
//         const 拆解对象 = 表键筛(键 => !拆解函数(键), 表);
//         const 拆解对象列 = 拆解键列.map(拆解键 => ({ ...拆解对象, [拆解键名]: 拆解键, [拆解值名]: 表[拆解键] }));
//         return 拆解对象列;
//     }
// }
