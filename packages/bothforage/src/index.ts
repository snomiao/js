const bothforage = await (async function () {
  if (globalThis.process) {
    const { NodeForage } = await import("nodeforage");
    const nodeforage = new NodeForage({ name: "nodeforage" }) as LocalForage;
    return nodeforage;
  } else {
    const localforage = await import("localforage");
    await localforage.ready();
    const defaultExport = (localforage as any)?.default as LocalForage;
    return defaultExport || localforage;
  }
})();
export default bothforage;
