import React from "react";
import { ReactDOM } from "react-dom/client";
import App from "./App";
import index from "./index.css"
import { createBrowseRouter, RouterProvier } from "react-router-dom"
import home from "./router/home/home";

const router = createBrowseRouter([
    { path: "/", element: <home /> }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.ScriptMode>
        <RouterProvier router = {router} />
    </React.ScriptMode>
)