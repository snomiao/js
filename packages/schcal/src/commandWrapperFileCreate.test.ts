import { exec } from "child_process";
import { unlink } from "fs/promises";
import { promisify } from "util";
import { describe, it } from "vitest";
import commandWrapperFileCreate from "./commandWrapperFileCreate";
describe("command exec", () => {
  if (!process.cwd().endsWith("schcal")) {
    it("skipped", () => {});
    return; //"skip"
  }
  it("open long url", async () => {
    const url =
      // eslint-disable-next-line max-len
      "https://dreampuf.github.io/GraphvizOnline/#digraph%20G%20%7B%0A%0A%20%20subgraph%20cluster_0%20%7B%0A%20%20%20%20style%3Dfilled%3B%0A%20%20%20%20color%3Dlightgrey%3B%0A%20%20%20%20node%20%5Bstyle%3Dfilled%2Ccolor%3Dwhite%5D%3B%0A%20%20%20%20a0%20-%3E%20a1%20-%3E%20a2%20-%3E%20a3%3B%0A%20%20%20%20label%20%3D%20%22process%20%231%22%3B%0A%20%20%7D%0A%0A%20%20subgraph%20cluster_1%20%7B%0A%20%20%20%20node%20%5Bstyle%3Dfilled%5D%3B%0A%20%20%20%20b0%20-%3E%20b1%20-%3E%20b2%20-%3E%20b3%3B%0A%20%20%20%20label%20%3D%20%22process%20%232%22%3B%0A%20%20%20%20color%3Dblue%0A%20%20%7D%0A%20%20start%20-%3E%20a0%3B%0A%20%20start%20-%3E%20b0%3B%0A%20%20a1%20-%3E%20b3%3B%0A%20%20b2%20-%3E%20a3%3B%0A%20%20a3%20-%3E%20a0%3B%0A%20%20a3%20-%3E%20end%3B%0A%20%20b3%20-%3E%20end%3B%0A%0A%20%20start%20%5Bshape%3DMdiamond%5D%3B%0A%20%20end%20%5Bshape%3DMsquare%5D%3B%0A%7D";
    await testWrapper(url);
  });
  it("run a complex cmd commands", async () => {
    // eslint-disable-next-line max-len
    const url = `cmd /C echo running notepad and wait close && "C:\\Windows\\notepad.exe" "C:\\Windows\\system32\\drivers\\etc\\hosts" && echo done && pause`;
    await testWrapper(url);
  });
  it("open local file explorer by absolute path", async () => {
    await testWrapper("C:/Windows/");
  });
  it("start browser", async () => {
    await testWrapper("chrome");
  });
});

async function testWrapper(command: string) {
  const path = await commandWrapperFileCreate(command, command);
  console.log(path);
  await promisify(exec)(path);
  await unlink(path);
}
