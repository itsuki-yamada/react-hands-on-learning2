import React from "react";
import ReactDOM from "react-dom";
import data from "./data.json";
import "./index.css";
import { Menu } from "./Menu";

ReactDOM.render(
  <React.StrictMode>
    <Menu recipes={data} title="Delicious Recipes" />
  </React.StrictMode>,
  document.getElementById("root")
);
