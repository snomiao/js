#!/usr/bin/env node
import arg from "arg";
import { myVersion } from "my-version";
import { resolve } from "path";
import puppeteer from "puppeteer";

(async function () {
  const args = arg({
    "-e": "--extension",
    "--extension": String,
    "-p": "--port",
    "--port": Number,
    "-v": "--version",
    "--version": Boolean,
  });

  // check version
  if (args["--version"]) return console.log(`v${await myVersion()}`);

  // load extension
  const chromeArgs = [];
  if (args["--extension"]) {
    const extensionPath = resolve(process.cwd(), args["--extension"]);
    chromeArgs.push(`--load-extension=${extensionPath}`);
  }

  // launch browser
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    ignoreDefaultArgs: true, //["--disable-extensions"],
    args: [...chromeArgs],
    defaultViewport: null,
    ignoreHTTPSErrors: true,
  });

  // open urls
  const urls = args._;
  if (args["--port"]) urls.push(`https://localhost:${args["--port"]}/`);
  if (urls.length) console.log("open urls: ", urls);

  // need more page
  while ((await browser.pages()).length < urls.length) await browser.newPage();

  const pages = await browser.pages();
  await Promise.allSettled(pages.map((page, i) => page.goto(urls[i])));

  console.log("All pages opened");
})();
