import path from "path";
import snorun from "snorun";

export default async function jsxRename({} = {}) {
  const jsPath = process.argv[1];
  const eslintrcPath = path
    .resolve(path.parse(jsPath).dir, "./conf/.eslintrc.json")
    .replace(/\\/g, "/");
  const cmd = `eslint -c ${eslintrcPath} --ext js --no-color -f json .`;
  const result = await snorun(cmd).stdout;
  console.log(JSON.stringify(JSON.parse(result), null, 4));
}
