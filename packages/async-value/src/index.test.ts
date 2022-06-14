import asyncValue from "./index";
(async function () {
  console.log(
    await asyncValue(12)
      .pipe((v) => v * 12) // 144
      .valueOf(),
  );
})();
