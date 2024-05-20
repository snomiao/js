import { expect, it } from "vitest";
import DIE from ".";

it("dies", () => {
  let err: any;
  try {
    const token = process.env.TOKEN ?? DIE("Missing Token");
    console.log(token);
  } catch (e) {
    err = e;
  }
  expect(err.message).eq("Missing Token");
});

it("lives", () => {
  const token = "123" ?? DIE("Missing Token");
  console.log(token);
  expect(token).equals("123");
});
