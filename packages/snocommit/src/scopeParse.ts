import { parse } from "path";
import { pkgUp } from "pkg-up";

// const stopwords = ['src'] as const
export default async function scopeParse(scope: string) {
  const partRule = {
    "@": async () => await cwdPkgNameGet(),
    ".": () => cwdFolderNameGet(),
    ":": () => "",
    "-": () => "",
  };
  return (await partRule[scope]?.()) || scope;
}

async function cwdPkgNameGet() {
  const pkgPath = await pkgUp({ cwd: process.cwd() });
  return pkgPath && parse(parse(pkgPath).dir).name;
}

function cwdFolderNameGet() {
  return parse(process.cwd()).name;
}