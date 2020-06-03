import React from "react";
//imports like ^^ means its coming from the node modules.
import ReactDOM from "react-dom";
import "./index.css";

//we must destructor any named export
import { App } from "./App";

//use to pull in html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
