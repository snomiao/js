import path from "path";
import snorun from "snorun";
import { pkgUp } from "pkg-up";
// breaking (part) description
export const types = ["fix", "styles", "feat", "breaking", "docs", "chore", 'refactor'] as const;
type Type = typeof types[number];
type PART = "-" | "." | string;
const cmdActions: Record<Type, (part: PART, desc: string) => Promise<any> | any> = {
  breaking: (part, desc) =>
    `(npm version major --no-workspaces-update${
      " || echo [WARN] error throws while version bump)" && ")"
    } && `,
  feat: (part, desc) =>
    `(npm version minor --no-workspaces-update${
      " || echo [WARN] error throws while version bump)" && ")"
    } && `,
  fix: (part, desc) =>
    `(npm version patch --no-workspaces-update${
      " || echo [WARN] error throws while version bump)" && ")"
    } && `,
  refactor: (part, desc) => "",
  chore: (part, desc) => "",
  docs: (part, desc) => "",
  styles: (part, desc) => "",
};
type snoCommitOptions = {
  type: Type;
  part: PART;
  desc: string;
};

export default async function snocommit({ type, part, desc }: snoCommitOptions) {
  if (!desc) throw new Error("missing desc");
  if (part === ".") {
    const pkgPath = await pkgUp({ cwd: process.cwd() });
    const pkgName = pkgPath && path.parse(path.parse(pkgPath).dir).name;
    const folderName = path.parse(process.cwd()).name;
    part = pkgName || folderName;
  }
  const action = cmdActions[type];
  if (!action) throw new Error(`no such cmd: ${type}`);
  const actionCmd = await action(part, desc);

  const valid = Boolean(cmdActions[type]);
  if (valid) {
    const quoted = (e: string) => (e ? `(${e})` : "");
    const msg = `${type}${quoted(part)}: ${desc}`;
    const gitsync_cmd = `git pull && git push --follow-tags`;
    const cmd = `git add . && git commit -m "${msg}" && ${actionCmd} ${gitsync_cmd}`;
    // console.log(chalk.blue(`> ${cmd}`));
    await snorun(cmd);
  }
}
