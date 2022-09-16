import bodyParser from "body-parser";
import express from "express";
/**
 *
 * @author: snomiao <snomiao@gmail.com>
 */
export default async function piServe({ port = 25971 } = {}) {
  const app = express();
  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/", (req, res) => {
    const text =
      (req.path.startsWith("/text/") && decodeURIComponent(req.path.slice(6))) ||
      req.query.text ||
      req.body.text ||
      JSON.stringify(req.body);
    console.log(text);
    res.end();
  });
  app.listen(port);
}
