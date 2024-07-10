import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UseStateApp1 from "./UseStateApp1";
import UseStateApp2 from "./UseStateApp2";
import UseEffectApp1 from "./UseEffectApp1";
import UseEffectApp2 from "./UseEffectApp2";
import CalApp from "./CalApp";
import UseContextApp1 from "./UseContextApp1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UseContextApp1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
