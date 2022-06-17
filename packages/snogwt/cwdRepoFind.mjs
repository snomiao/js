import execSh from "exec-sh";
import { parse, resolve } from "path";

export async function cwdRepoFind() {
  const top = await execSh
    .promise("git rev-parse --show-toplevel", true)
    .then((e) => e.stdout.trim());
  if (!top) throw new Error("fail to get git rev-parse --show-toplevel");
  const repodir = resolve(top); /* process.cwd() */
  const repodirname = parse(repodir).name;
  return { repodir, top, repodirname };
}
