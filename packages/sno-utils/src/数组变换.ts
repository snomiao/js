import { 表压平 } from "./表列";

// if (module === require.main) (async () => {
//     console.log(
//         Object.entries(表压平({ 结构: { asdf: { zxcv: '123' }, 782: ',,,' }, x: [1, 2, 3] })))
//     // .length
//     // === `{"结构.782":",,,","结构.asdf.zxcv":"123","x.0":1,"x.1":2,"x.2":3}`
//     // , '结构压平出错')

//     // console.log(
//     //     结构数组向CSV转换([
//     //         { asdf: 'zx"cv', 123: 456 },
//     //         { asdf: 'zx"cv', 782: ',,,' },
//     //         { asdf: { zxcv: new Date() }, 782: ',,,' },
//     //     ]), '结构数组CSV')
// })().then(console.log).catch(console.error)

// export function 结构数组向CSV转换(结构数组: object[], 分割符 = ',') {
//     const 平展结构数组 = 结构数组.map(结构 => 表压平(结构))
//     const 字段数组 = Object.keys(Object.fromEntries(平展结构数组
//         .flatMap(结构 => Object.keys(结构))
//         .map((键: string) => [键, null])));
//     const 表格阵 = [
//         字段数组,
//         ...平展结构数组.map(结构 => 字段数组.map((键: string) => 结构[键]))
//     ];
//     const CSV = 表格阵.map((表行: any[]) => 表行.map((值: any) => {
//         if (typeof 值 === 'undefined') {
//             return ''
//         } else if (typeof 值 === 'string') {
//             return '"' + 值.replace(/"/g, '""') + '"'
//         } else {
//             值 = 值.toString()
//             return 值.match(/[",\r\n\s]+/)
//                 ? '"' + 值.replace(/"/g, '""') + '"'
//                 : 值
//         }
//     }).join(分割符)).join('\n');
//     return CSV;
// }
