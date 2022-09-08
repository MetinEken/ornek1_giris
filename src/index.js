import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// ! Web sayfasina basilacak olan herseyi olusturan veya guncelleyen method
// ? render method’u 2 parametre alir
// ** 1. parametre hangi modulu render edecegidir.
// ** 2. parametre nerede render edilecegidir.
ReactDOM.render(
  <React.StrictMode>
    <App />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
