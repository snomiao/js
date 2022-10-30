import execSh from "exec-sh";
const defaultOptions = { cwd: process.cwd() };
/**
 * A dead simple wrapper of `git rev-parse --show-toplevel`
 * @returns path of top level git
 */
export default async function topLevelGit(options?: { cwd?: string }) {
  options = { ...defaultOptions, ...options };
  const topdir = await execSh
    .promise("git rev-parse --show-toplevel", true)
    .then((e) => e.stdout.trim());
  if (!topdir) throw new Error("fail to get git rev-parse --show-toplevel");
  return topdir;
}
