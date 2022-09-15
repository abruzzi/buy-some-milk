import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Todo } from "./Todo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Todo items={[]} />
  </React.StrictMode>
);
