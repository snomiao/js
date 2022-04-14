export const 不晚于 = (乘数: number) => ({
    秒前: { $not: { $gt: new Date(+new Date().getTime() - 1e3 * 乘数) } },
    秒后: { $not: { $gt: new Date(+new Date().getTime() + 1e3 * 乘数) } },
    分钟前: { $not: { $gt: new Date(+new Date().getTime() - 60e3 * 乘数) } },
    分钟后: { $not: { $gt: new Date(+new Date().getTime() + 60e3 * 乘数) } },
    小时前: { $not: { $gt: new Date(+new Date().getTime() - 3600e3 * 乘数) } },
    小时后: { $not: { $gt: new Date(+new Date().getTime() + 3600e3 * 乘数) } },
    天前: { $not: { $gt: new Date(+new Date().getTime() - 86400e3 * 乘数) } },
    天后: { $not: { $gt: new Date(+new Date().getTime() + 86400e3 * 乘数) } },
    月前: {
        $not: { $gt: new Date(+new Date().getTime() - 30 * 86400e3 * 乘数) },
    },
    月后: {
        $not: { $gt: new Date(+new Date().getTime() + 30 * 86400e3 * 乘数) },
    },
    年前: {
        $not: { $gt: new Date(+new Date().getTime() - 365 * 86400e3 * 乘数) },
    },
    年后: {
        $not: { $gt: new Date(+new Date().getTime() + 365 * 86400e3 * 乘数) },
    },
});

export const 不早于 = (乘数: number) => ({
    秒前: { $not: { $lt: new Date(+new Date().getTime() - 1e3 * 乘数) } },
    秒后: { $not: { $lt: new Date(+new Date().getTime() + 1e3 * 乘数) } },
    分钟前: { $not: { $lt: new Date(+new Date().getTime() - 60e3 * 乘数) } },
    分钟后: { $not: { $lt: new Date(+new Date().getTime() + 60e3 * 乘数) } },
    小时前: { $not: { $lt: new Date(+new Date().getTime() - 3600e3 * 乘数) } },
    小时后: { $not: { $lt: new Date(+new Date().getTime() + 3600e3 * 乘数) } },
    天前: { $not: { $lt: new Date(+new Date().getTime() - 86400e3 * 乘数) } },
    天后: { $not: { $lt: new Date(+new Date().getTime() + 86400e3 * 乘数) } },
    月前: {
        $not: { $lt: new Date(+new Date().getTime() - 30 * 86400e3 * 乘数) },
    },
    月后: {
        $not: { $lt: new Date(+new Date().getTime() + 30 * 86400e3 * 乘数) },
    },
    年前: {
        $not: { $lt: new Date(+new Date().getTime() - 365 * 86400e3 * 乘数) },
    },
    年后: {
        $not: { $lt: new Date(+new Date().getTime() + 365 * 86400e3 * 乘数) },
    },
});

export const 晚于 = (乘数: number) => ({
    秒前: { $gt: new Date(+new Date().getTime() - 1e3 * 乘数) },
    秒后: { $gt: new Date(+new Date().getTime() + 1e3 * 乘数) },
    分钟前: { $gt: new Date(+new Date().getTime() - 60e3 * 乘数) },
    分钟后: { $gt: new Date(+new Date().getTime() + 60e3 * 乘数) },
    小时前: { $gt: new Date(+new Date().getTime() - 3600e3 * 乘数) },
    小时后: { $gt: new Date(+new Date().getTime() + 3600e3 * 乘数) },
    天前: { $gt: new Date(+new Date().getTime() - 86400e3 * 乘数) },
    天后: { $gt: new Date(+new Date().getTime() + 86400e3 * 乘数) },
    月前: { $gt: new Date(+new Date().getTime() - 30 * 86400e3 * 乘数) },
    月后: { $gt: new Date(+new Date().getTime() + 30 * 86400e3 * 乘数) },
    年前: { $gt: new Date(+new Date().getTime() - 365 * 86400e3 * 乘数) },
    年后: { $gt: new Date(+new Date().getTime() + 365 * 86400e3 * 乘数) },
});
export const 早于 = (乘数: number) => ({
    秒前: { $lt: new Date(+new Date().getTime() - 1e3 * 乘数) },
    秒后: { $lt: new Date(+new Date().getTime() + 1e3 * 乘数) },
    分钟前: { $lt: new Date(+new Date().getTime() - 60e3 * 乘数) },
    分钟后: { $lt: new Date(+new Date().getTime() + 60e3 * 乘数) },
    小时前: { $lt: new Date(+new Date().getTime() - 3600e3 * 乘数) },
    小时后: { $lt: new Date(+new Date().getTime() + 3600e3 * 乘数) },
    天前: { $lt: new Date(+new Date().getTime() - 86400e3 * 乘数) },
    天后: { $lt: new Date(+new Date().getTime() + 86400e3 * 乘数) },
    月前: { $lt: new Date(+new Date().getTime() - 30 * 86400e3 * 乘数) },
    月后: { $lt: new Date(+new Date().getTime() + 30 * 86400e3 * 乘数) },
    年前: { $lt: new Date(+new Date().getTime() - 365 * 86400e3 * 乘数) },
    年后: { $lt: new Date(+new Date().getTime() + 365 * 86400e3 * 乘数) },
});
