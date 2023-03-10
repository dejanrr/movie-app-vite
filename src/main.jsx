import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MovieState } from "./Context/MovieContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MovieState>
      <App />
    </MovieState>
  </BrowserRouter>
);
