import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Link } from "react-router-dom";
import { Route } from "react-router";
import App from "./App";
import "./App.scss";
import AutoRefresh from "./pages/autoRefresh";
import Index from "./pages/Index";
import GameFilter from "./pages/GameFilter";

ReactDOM.render(
    <HashRouter>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/refresh">refresh</Link>
        </li>
        <li>
            <Link to="/gameFilter">filter gamges</Link>
        </li>
        <Route exact path="/" component={Index} />
        <Route path="/refresh" component={AutoRefresh} />
        <Route path="/gameFilter" component={GameFilter} />
        <App />
    </HashRouter>,
    document.querySelector("#root")
);
