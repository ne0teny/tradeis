import React, { createRoot } from "react-dom/client";
import Component_7deed0e3 from "./components/Component_7deed0e3";
import { mockData } from "./mockData";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "1920px", height: "4510px" }} data-ignore="used only for top most containter width">
    <Component_7deed0e3 {...mockData} />
  </div>
);
