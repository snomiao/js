export const 文本抓取 = async (url: RequestInfo, options: RequestInit | undefined) => await fetch(url, options).then(e => e.text());
export const JSON抓取 = async (url: RequestInfo, options: RequestInit | undefined) => await fetch(url, options).then(e => e.json());
