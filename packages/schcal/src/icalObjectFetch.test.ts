import "dotenv/config";
import icalObjectFetch from "./icalObjectFetch";

it("fetch icsObj from url", async function () {
  this.timeout(30e3);
  const url = "https://www.officeholidays.com/ics/china";
  const icsObj = await icalObjectFetch(url);
  console.info(icsObj);
});
