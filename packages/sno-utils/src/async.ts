/**
 * Copyright 2019-2023 snomiao(snomiao@gmail.com)
 */

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function waitFor(fn, checkInterval) {
  let re = null;
  while (!(re = fn())) await sleep(8);
  return re;
}
