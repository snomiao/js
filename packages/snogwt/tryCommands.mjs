import execSh from "exec-sh";

export async function tryCommands(...cmds) {
  while (cmds.length) await tryCommand(cmds.shift());
  async function tryCommand(cmd) {
    console.log(`> ${cmd}`);
    await execSh.promise(cmd).catch((e) => null);
  }
}
