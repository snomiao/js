import "dotenv/config";
import { it } from "vitest";
import icalObjectFetch from "./icalObjectFetch";
it("fetch icsObj from url", async function () {
  const url = "https://www.officeholidays.com/ics/china";
  const icsObj = await icalObjectFetch(url);
  console.info(icsObj);
});
