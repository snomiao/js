export function DIE(reason?: string | Error): never {
  if (typeof reason === "string") throw new Error(reason);
  throw reason;
}
export default DIE;
