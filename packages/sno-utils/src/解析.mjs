// TODO CSV、TSV、JSON 等解析

const 式试器 = 式 => 串 => 串?.match(式)?.[0]?.length;
const 分词 = (串, 符器表) => {
    let 词列 = [];
    const 增词 = (符, 长) => {
        长 && 词列.push([符, 串.slice(0, 长)]);
        串 = 串.slice(长);
        return 长;
    };
    const 符试列 = Object.entries(符器表);
    while (串) {
        let 长 = 0;
        const [符] = 符试列?.find(([_, 试]) => (长 = 试(串))) || [];
        if (!长) throw new Error("分词错：" + JSON.stringify(串));
        增词(符, 长);
    }
    return 词列;
};
const 表合词 = (词列, 合词规则表) => {
    const 词映列 = Object.entries(合词规则表);
    let s = 0;
    while (s < 词列.length) {
        let e = s + 1;
        while (e < 词列.length) {
            const 词列符串 = 词列
                .slice(s, e)
                .map(([符]) => 符)
                .join("");
            console.log(词列符串);
            const 规则 = 合词规则表[词列符串];
            if (规则) {
                const 词列值列 = 词列.slice(s, e).map(([, 字]) => 字);
                词列.splice(s, e - s, 规则(...词列值列));
            }
            e++;
        }
        s++;
    }
    return 词列;
};
const 合词 = (词列, 合词规则表列) => {
    合词规则表列.map(合词规则表 => {
        词列 = 表合词(词列, 合词规则表);
    });
    return 词列;
};

const 合词规则表列 = [
    // 元素合并
    {
        字串字串: (a, b) => ["字串", a.slice(0, -1) + '""' + b.slice(1)],
        _换行: (...x) => ["列", x.slice("")],
        _结束: (...x) => ["行", x.slice("")],
    },
    // // 元素处理
    // {
    //     串: ([a]) => ["字串", a.slice(1, -1)],
    //     字: ([a]) => ["串", a],
    // },
    // // 行处理
    // {
    //     割: ([a]) => null, 数: ([a]) => ["元", a]
    //     行割元: ([a, _, c]) => ["行", [...a, c]],
    //     行割割: ([a, _, c]) => ["行", [...a, c]],
    // },
];
const TSV解析 = 串 => {
    return 合词(
        分词(串, {
            字串: 式试器(/^"[\s\S]*?"/),
            分割: 式试器(/^,/),
            换行: 式试器(/^\r?\n/),
            数字: 式试器(/^\d+/),
            文本: 式试器(/^[^\r\n",]+/),
        }),
        合词规则表列
    );

    // 串: 式试器(/^字割/),
    // 割: 式试器(/^,/),
    // 行: 式试器(/^\r?\n/),
    // 数: 式试器(/^\d+/),
    // 字: 式试器(/^[^\r\n",]+/),
};

console.log(TSV解析('asdf,d,as\n"\n""\n",asdf,123.456e3'));

// "asdf".match('sd')=sd
