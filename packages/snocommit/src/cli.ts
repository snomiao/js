#!/usr/bin/env node

import { cmds } from "./index";
const [node, js, ...rest] = process.argv;
const cmdFromJS = cmds.find((e) => e === js.match(/(?:cli-|bin\/)(.*?)(?:\.[mc]?[tj]s)?$/)?.[1]);
const { cmd, part, descs } = cmdFromJS
  ? (() => {
      const [part, ...descs] = rest;
      return { cmd: cmdFromJS, part, descs };
    })()
  : (() => {
      const [cmd, part, ...descs] = rest;
      return { cmd, part, descs };
    })();
const desc = descs.join(" ");
const valid = cmds.includes(cmd as any);
console.log(process.argv);
console.log([node, js, cmd, part, desc], { valid });
