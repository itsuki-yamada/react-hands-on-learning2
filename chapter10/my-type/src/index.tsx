import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App item="jacket" />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
