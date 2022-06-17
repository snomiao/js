export default async function getLocalForage() {
  const localforage = await import("localforage");
  return localforage.default || localforage;
}
