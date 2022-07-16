import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import Providers from "./providers/Providers.comp";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
