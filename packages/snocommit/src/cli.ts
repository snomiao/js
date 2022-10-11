#!/usr/bin/env node

import snocommit, { types } from "./index";

cli().then();
async function cli() {
  
  const [node, js, ...rest] = process.argv;
  const cmdFromJS = types.find((e) => e === js.match(/(?:cli-|bin\/)(.*?)(?:\.[mc]?[tj]s)?$/)?.[1]);
  const { type, part, descs } = cmdFromJS
    ? (() => {
        const [part, ...descs] = rest;
        return { type: cmdFromJS, part, descs };
      })()
    : (() => {
        const [_cmd, part, ...descs] = rest;
        return { type: types.find((e) => e === _cmd), part, descs };
      })();
  const desc = descs.join(" ");
  if (!type) throw new Error(`commit type not found: ${rest[0]}`);
  await snocommit({ type, part, desc });
}
