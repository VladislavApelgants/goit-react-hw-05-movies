import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize/modern-normalize.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from "./components/App/App";
import "./components/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
