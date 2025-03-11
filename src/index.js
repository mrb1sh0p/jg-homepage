import "./theme.css";
import i18n from "./i18n/config";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="container">
          <App />
        </div>
      </Router>
    </I18nextProvider>
  </React.StrictMode>
);
