#!/usr/bin/env node
import myVersion from "./index";

(async function () {
  console.log(await myVersion());
})();
