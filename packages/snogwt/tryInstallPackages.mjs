import execSh from "exec-sh";

export async function tryInstallPackages(checkoutPath) {
  if (0) {
  } else if (`${checkoutPath}/pnpm-lock.yaml`)
    await execSh.promise(`cd ${checkoutPath} && pnpm i`).catch(() => null);
  else if (`${checkoutPath}/yarn.lock`)
    await execSh.promise(`cd ${checkoutPath} && yarn`).catch(() => null);
  else if (`${checkoutPath}/package-lock.json`)
    await execSh.promise(`cd ${checkoutPath} && npm instasll`).catch(() => null);
}
