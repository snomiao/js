import path from "path";
import { pkgUp } from "pkg-up";
import snorun from "snorun";
// breaking (part) description
export const types = ["fix", "styles", "feat", "breaking", "docs", "chore"] as const;
type Type = typeof types[number];
type PART = "-" | "." | string;
const cmdActions: Record<Type, (part: PART, desc: string) => Promise<any> | any> = {
  breaking: (part, desc) =>
    `(npm version major --no-workspaces-update${
      " || echo [WARN] error throws while version bump)" && ")"
    }`,
  feat: (part, desc) =>
    `(npm version minor --no-workspaces-update${
      " || echo [WARN] error throws while version bump)" && ")"
    }`,
  fix: (part, desc) =>
    `(npm version patch --no-workspaces-update${
      " || echo [WARN] error throws while version bump)" && ")"
    }`,
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

  // pkg name
  if (part === "@") {
    const pkgPath = await pkgUp({ cwd: process.cwd() });
    const pkgName = pkgPath && path.parse(path.parse(pkgPath).dir).name;
    part = pkgName;
  }

  // folder name
  if (part === ".") {
    const folderName = path.parse(process.cwd()).name;
    part = folderName;
  }
  const versioningAction = cmdActions[type];
  if (!versioningAction) throw new Error(`no such cmd: ${type}`);
  const versioningCmd = await versioningAction(part, desc);

  const valid = Boolean(cmdActions[type]);
  if (valid) {
    const quoted = (e: string) => (e ? `(${e})` : "");
    const msg = `${type}${quoted(part)}: ${desc}`;
    const gitsync_cmd = `git pull && git push --follow-tags`;

    true &&
      (await snorun(`git add . && git commit -m "${msg}"`)) &&
      (!versioningCmd
        ? true
        : (await snorun(versioningCmd)) &&
          ((await snorun(`(git add . && git commit -m "${msg}")`)) || true)) &&
      (await snorun(gitsync_cmd));
  }
}
