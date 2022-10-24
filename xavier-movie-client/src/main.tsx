import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import "./index.css";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Navbar />
        <div className="lg:mx-96 mx-10 min-w-fit">
            <Router />
        </div>
    </React.StrictMode>
);
