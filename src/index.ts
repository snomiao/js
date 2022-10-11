import path from "path";
import snorun from "snorun";
// breaking (part) description
export const types = ["fix", "styles", "feat", "breaking", "docs", "chore"] as const;
type Type = typeof types[number];
type PART = "-" | "." | string;
const cmdActions: Record<Type, (part: PART, desc: string) => Promise<any> | any> = {
  breaking: (part, desc) =>
    "(npm version major --no-workspaces-update || echo [WARN] error throws while version bump) && ",
  feat: (part, desc) =>
    "(npm version minor --no-workspaces-update || echo [WARN] error throws while version bump) && ",
  fix: (part, desc) =>
    "(npm version patch --no-workspaces-update || echo [WARN] error throws while version bump) && ",
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
    part = path.parse(process.cwd()).name;
  }
  const action = cmdActions[type];
  if (!action) throw new Error(`no such cmd: ${type}`);
  const cmdPrefix = await action(part, desc);

  const valid = Boolean(cmdActions[type]);
  if (valid) {
    const quoted = (e: string) => (e ? `(${e})` : "");
    const msg = `${type}${quoted(part)}: ${desc}`;
    const cmd = `${cmdPrefix}git add . && git commit -m "${msg}" && git pull && git push --tags`;
    // console.log(chalk.blue(`> ${cmd}`));
    await snorun(cmd);
  }
}
