import path from "path";
import { pkgUp } from "pkg-up";

export default async function scopeParse(scope: string) {
  const partRule = {
    "@": async () => await cwdPkgNameGet(),
    ".": () => cwdFolderNameGet(),
    ":": () => "",
    "-": () => "",
  };
  const parsedPart = (await (partRule[scope]?.())) || scope;
  return parsedPart;
  async function cwdPkgNameGet() {
    const pkgPath = await pkgUp({ cwd: process.cwd() });
    return pkgPath && path.parse(path.parse(pkgPath).dir).name;
  }

  function cwdFolderNameGet() {
    return path.parse(process.cwd()).name;
  }
}
