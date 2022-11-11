export default function maybeQuoted(e: string) {
  return e ? `(${e})` : "";
}
