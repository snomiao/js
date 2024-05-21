export default function DIE(reason?: string | Error): never {
  if (typeof reason === "string") throw reason.trim();
  throw reason;
}
