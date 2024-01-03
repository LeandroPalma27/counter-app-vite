import React from "react";
import ReactDOM from "react-dom/client";
import '../src/App.css'
import { Home } from "./components/Home";
import Home2 from "./components/Home2";

const divRoot = document.getElementById("root");
ReactDOM.createRoot(divRoot).render(
    <React.StrictMode>
        <Home title="Home1" name="Tati" age={23}/>
        <Home2 title="Home2" age={20}/>
    </React.StrictMode>
);
