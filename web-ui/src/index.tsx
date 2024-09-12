import React from "react";
import ReactDOM from "react-dom/client";
import About from "./About";
import "./index.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

disableReactDevTools();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>
);
