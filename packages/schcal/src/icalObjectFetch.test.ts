import "dotenv/config";
import { describe, it } from "vitest";
import icalObjectFetch from "./icalObjectFetch";
describe("fetcher", () => {
  it("fetch icsObj from url", async function () {
    if (!process.cwd().endsWith("schcal")) return "skip";
    const url = "https://www.officeholidays.com/ics/china";
    const icsObj = await icalObjectFetch(url);
    console.info(icsObj);
  });
});
