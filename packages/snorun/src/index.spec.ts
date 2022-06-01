import snorun from "./index";
((await snorun("echo asdf")) && (await snorun("echo succ"))) || (await snorun("echo fail"));

console.log("TEST OK");
