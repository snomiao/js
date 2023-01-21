import MDictJS from "mdict-js";
const MDictTS = (MDictJS as any).default as typeof MDictJS;

export default async function mdxEntries(mdxFile: string) {
  const mdx = new MDictTS(mdxFile);
  const words = mdx.keyList.map(({ keyText }) => keyText);
  const entires = words.map(
    (word) => [word, mdx.lookup(word).definition?.replace(/[\x00\r]/gm, "")] as const,
  );
  return entires;
}
