export default function DIE(reason?: string | Error): never {
  throw reason;
}
