import { isBrowser, isNode } from "is-where";
const bothforage = await (async function () {
  if (isBrowser()) return await (await import("./getLocalForage")).default();
  if (isNode()) return await (await import("./getNodeForage")).default();
  throw new Error("bothforage not supported environment");
})();
export default bothforage;
