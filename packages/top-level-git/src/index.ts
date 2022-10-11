import execSh from "exec-sh";
export default async function topLevelGit() {
  const topdir = await execSh
    .promise("git rev-parse --show-toplevel", true)
    .then((e) => e.stdout.trim());
  if (!topdir) throw new Error("fail to get git rev-parse --show-toplevel");
  return topdir;
}
