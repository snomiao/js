export default function DIE(reason?: string | Error): never {
  if (typeof reason === "string") throw new Error(reason);
  throw reason;
}