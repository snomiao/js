import sha1 from "sha1";
import { promises } from "fs";
import { join } from "path";
import { env } from "process";

export default async function commandWrapperFileCreate(wraperName: string, command: string) {
  const wrapperFolder = join(env.USERPROFILE, `/.schcal/wrapper`);
  await promises.mkdir(wrapperFolder, { recursive: true });
  const safeWrapperName = wraperName.replace(/[^a-zA-Z0-9]+/g, "_").slice(0, 32);
  const safeWrapperFileName = sha1(command) + "-" + safeWrapperName;
  const wrapperPath = join(wrapperFolder, `/` + safeWrapperFileName + ".vbs");
  const quotedCommand = await promises
    .access(command)
    .then(() => `"${command}"`)
    .catch(() => command);
  const vbsSafeCommand = quotedCommand.replace(/"/g, '""');
  const wrapperContent = `WScript.CreateObject("WScript.Shell").run("${vbsSafeCommand}")`;
  await promises.writeFile(wrapperPath, wrapperContent, "utf16le");
  return wrapperPath;
}
