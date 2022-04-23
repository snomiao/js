import { readPackageUp } from "read-pkg-up";

export async function myVersion() {
  const { packageJson } = await readPackageUp();
  return packageJson.version;
}
