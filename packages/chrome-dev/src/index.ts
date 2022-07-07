import { resolve } from "path";
import puppeteer from "puppeteer";
// puppeteer.brows
/**
 * chrome-dev
 * Author: snomiao <snomiao@gmail.com>
 */
export default async function chromeDev({
  inputs = [] as string[],
  extension = "",
  openExtensionPage = undefined as boolean,
  devtools = false,
  ignoreHTTPSErrors = true,
  ignoreDefaultArgs = false,
  port = 0,
  dotenv = true,
  ...otherArgs
} = {}) {
  // console.log("otherArgs=", otherArgs);

  // open urls
  const urls = new Set(inputs);

  // TODO: match PORT=80, HOST=localhost, URL=localhost:80 and parse into URL
  if (port) urls.add(`https://localhost:${port}/`);

  const chromeArgs = [];
  // load extension
  if (extension) {
    const extensionPath = resolve(process.cwd(), extension);
    chromeArgs.push(`--load-extension=${extensionPath}`);
    // urls.add("chrome://extensions");
  }
  if (dotenv) {
    await import("dotenv/config");
  }
  // launch browser
  const browser = await puppeteer.launch({
    headless: false,
    devtools,
    ignoreDefaultArgs: ignoreDefaultArgs ? true : ["--disable-extensions"],
    args: [...chromeArgs],
    defaultViewport: null,
    ignoreHTTPSErrors,
  });

  // need more page
  if (urls.size) console.log("open urls: ", [...urls.values()]);
  while ((await browser.pages()).length < urls.size) await browser.newPage();

  const pages = await browser.pages();
  await Promise.allSettled(pages.map((page, i) => page.goto([...urls.values()][i])));

  console.log("All pages opened");
}
