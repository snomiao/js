import snorun from "snorun";

export async function tryInstallPackages(checkoutPath: string) {
  if (`${checkoutPath}/pnpm-lock.yaml`) return await snorun(`cd ${checkoutPath} && pnpm i`);
  if (`${checkoutPath}/yarn.lock`) return await snorun(`cd ${checkoutPath} && yarn`);
  if (`${checkoutPath}/package-lock.json`) return await snorun(`cd ${checkoutPath} && npm i`);
}
