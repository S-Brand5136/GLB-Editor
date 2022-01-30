import React from "react";
import ReactDOM from "react-dom";
import MeshProvider from "./providers/MeshProvider";
import App from "./App";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <MeshProvider>
      <App />
    </MeshProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
