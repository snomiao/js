import snorun from "snorun";
import commitTypes from "./commitTypes";
import maybeQuoted from "./maybeQuoted";
import scopeParse from "./scopeParse";
type Type = typeof commitTypes[number];
type SCOPE = "-" | "." | "@" | ":" | string;

// const cmdActions: Record<Type, (scope: SCOPE, desc: string) => Promise<any> | any> = {
//   breaking: (scope, desc) =>
//     `(npm version major --no-workspaces-update${
//       " || echo [WARN] error throws while version bump)" && ")"
//     }`,
//   feat: (scope, desc) =>
//     `(npm version minor --no-workspaces-update${
//       " || echo [WARN] error throws while version bump)" && ")"
//     }`,
//   fix: (scope, desc) =>
//     `(npm version patch --no-workspaces-update${
//       " || echo [WARN] error throws while version bump)" && ")"
//     }`,
//   refactor: (scope, desc) => "",
//   chore: (scope, desc) => "",
//   docs: (scope, desc) => "",
//   styles: (scope, desc) => "",
// };
type snoCommitOptions = {
  type: Type;
  scope: SCOPE;
  desc: string;
};

export default async function snocommit({ type, scope, desc }: snoCommitOptions) {
  if (!desc) throw new Error("missing desc");
  const parsedPart = await scopeParse(scope);
  // const versioningAction = cmdActions[type];
  // if (!versioningAction) throw new Error(`no such cmd: ${type}`);
  // const versioningCmd = await versioningAction(parsedPart, desc);
  // const valid = Boolean(cmdActions[type]);
  // if (valid) {
  const msgtitle = `${type}${maybeQuoted(parsedPart)}: ${desc.slice(0, 35)}`;
  const desc2 = ((msgtitle.startsWith("!") && "BREAKING CHANGE:") || "") + desc;
  const msgcmd = `-m "${msgtitle}" -m "${desc2}"`;
  const gitsync_cmd = `git pull && git push --follow-tags`;
  true &&
    (await snorun(`git add . && git commit ${msgcmd}`)) &&
    // (!versioningCmd
    //   ? true
    //   : (await snorun(versioningCmd)) &&
    ((await snorun(`(git add . && git commit ${msgcmd})`)) || true) &&
    // )
    (await snorun(gitsync_cmd));
  // }
}
