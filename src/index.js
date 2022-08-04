import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import Providers from "./providers/Providers.comp";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Providers>
    <App />
  </Providers>
);
