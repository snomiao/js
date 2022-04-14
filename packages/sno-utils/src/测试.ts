export function 瞄(值: any) {
    return console.log(值), 值;
}
export function 瞄于(名义: any, ...解释: any) {
    return (值: any) => (console.log(名义, 值, ...解释), 值);
}
export function 深等断言(名义: any) {
    return function (甲: any, 乙: any) {
        甲 = JSON.stringify(甲);
        乙 = JSON.stringify(乙);
        甲 === 乙 || console.error(`${名义}深等断言失败: ${甲}!==${乙}`);
    };
}
