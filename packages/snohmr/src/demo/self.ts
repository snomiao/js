import snohmr from "../";

export default async function main() {
  const str = '["JSON"]';
  for await (const { parse } of snohmr(() => import("./self"))) {
    const obj = parse(str);
    console.log(obj);
  }
}

export function stringify(data: any) {
  return JSON.stringify(data);
}
export function parse(data: string) {
  console.log(data);
  return JSON.parse(data);
}
