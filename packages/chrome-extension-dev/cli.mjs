#!/usr/bin/env node

import arg from "arg";
import { myVersion } from "my-version";
import { resolve } from "path";
import puppeteer from "puppeteer";
(async function () {
  const args = arg({
    "-e": "--extension",
    "--extension": String,
    "-v": "--version",
    "--version": Boolean,
  });

  // check version
  if (args["--version"]) return console.log(`v${await myVersion()}`);

  const extensionPath = resolve(process.cwd(), args["--extension"] || "./");
  console.log(process.cwd(), args["--extension"], extensionPath);

  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    ignoreDefaultArgs: true, //["--disable-extensions"],
    args: [
      `--load-extension=${extensionPath}`,
      //   "--window-size=1920,1080"
    ],
    defaultViewport: null,
    ignoreHTTPSErrors: true,
  });

  // open urls
  const urls = args._;
  if (urls.length) console.log("open urls: ", urls);

  // need more page
  while ((await browser.pages()).length < urls.length) await browser.newPage();

  const pages = await browser.pages();
  await Promise.allSettled(pages.map((page, i) => page.goto(urls[i])));

  console.log("All pages opened");
})();
