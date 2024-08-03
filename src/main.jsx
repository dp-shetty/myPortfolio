import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css'
import { Provider } from "react-redux";
import { iconBgStore } from "./store.js";
import CursorAnimate from "./components/CursorAnimate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={iconBgStore}>
      <CursorAnimate />
      <App />
    </Provider>
  </>
);
