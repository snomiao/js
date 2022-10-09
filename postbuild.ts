import fsp from "fs/promises";
import { cmds } from "./src/index";
await Promise.all(
  cmds.map((cmd) =>
    fsp
      .copyFile("./dist/cli.mjs", `./dist/cli-${  cmd  }.mjs`)
      .then((e) => console.log(`cli-${  cmd  } copied`)),
  ),
);
console.log("post build done");
