import snorun from "./index";

((await snorun("echo asdf")) && (await snorun("echo succ"))) || (await snorun("echo fail"));

console.log("## echo test OK");

console.log((await snorun("echo asdf").stdout) === "asdf");

console.log("## stdout test OK");
