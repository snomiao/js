import path from "path";
import snorun from "snorun";
// breaking (part) description
export const types = ["fix", "styles", "feat", "breaking", "docs"] as const;
type Type = typeof types[number];
type PART = "-" | "." | string;
const cmdActions: Record<Type, (part: PART, desc: string) => Promise<any> | any> = {
  breaking: (part, desc) => "npm version major && " && "",
  feat: (part, desc) => "npm version minor && " && "",
  styles: (part, desc) => "npm version patch && " && "",
  docs: (part, desc) => "",
  fix: (part, desc) => "",
};
type snoCommitOptions = {
  type: Type;
  part: PART;
  desc: string;
};

export default async function snocommit({ type, part, desc }: snoCommitOptions) {
  if (part === ".") {
    part = path.parse(process.cwd()).name;
  }
  const action = cmdActions[type];
  if (!action) throw new Error(`no such cmd: ${type}`);
  const cmdPrefix = action(part, desc);

  const valid = Boolean(cmdActions[type]);
  if (valid) {
    const quoted = (e: string) => (e ? `(${e})` : "");
    const msg = `${type}${quoted(part)}: ${desc}`;
    const cmd = `${cmdPrefix}git add . && git commit -m "${msg}" && git pull && git push`;
    // console.log(chalk.blue(`> ${cmd}`));
    await snorun(cmd);
  }
}