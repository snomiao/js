export default async function getNodeForage() {
  const { NodeForage } = await import("nodeforage");
  const nodeforage = new NodeForage({ name: "nodeforage" }) as LocalForage;
  return nodeforage;
}
