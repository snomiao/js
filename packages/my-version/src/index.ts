import { readPackageUp } from "read-pkg-up";

export default async function myVersion() {
  const { packageJson } = await readPackageUp();
  return packageJson.version;
}
