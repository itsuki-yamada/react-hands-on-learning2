import express from "express";
import * as fs from "fs";
import * as path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import data from "../src/data.json";
import { Menu } from "../src/Menu";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/*", (req, res) => {
  console.log("common");
  const renderedHtml = ReactDOMServer.renderToString(
    <Menu recipes={data} title="Delicious Recipes" />
  );

  const indexFile = path.resolve("./build-server/index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    return res.send(
      data.replace(
        `<div id="root"></div>`,
        `<div id="root">${renderedHtml}</div>`
      )
    );
  });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
