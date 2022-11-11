#!/usr/bin/env node
import commitTypes from "./commitTypes";
import snocommit from "./index";

cli().then();

async function cli() {
  const [node, js, ...rest] = process.argv;
  const cmdFromJS = commitTypes.find(
    (e) => e === js.match(/(?:cli-|bin\/)(.*?)(?:\.[mc]?[tj]s)?$/)?.[1],
  );
  const { type, scope, descs } = cmdFromJS
    ? (() => {
        const [scope, ...descs] = rest;
        return { type: cmdFromJS, scope, descs };
      })()
    : (() => {
        const [_cmd, scope, ...descs] = rest;
        return { type: commitTypes.find((e) => e === _cmd), scope, descs };
      })();
  const desc = descs.join(" ");
  if (!type) throw new Error(`commit type not found: ${rest[0]}`);
  await snocommit({ type, scope, desc });
}
