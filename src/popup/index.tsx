import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./App.scss";
// const navStyle = {};
ReactDOM.render(
    <HashRouter>
        {/* <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossOrigin="anonymous"
        />
        <nav className="navbar navbar-expand-lg" style={navStyle}>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/refresh">refresh</Link>
                </li>
                <li className="nav-item">
                    <Link to="/gameFilter">filter gamges</Link>
                </li>
                <li className="nav-item">
                    <Link to="/lastLogin">activity state</Link>
                </li>
            </ul>
        </nav>
        <Route exact path="/" component={Index} />
        <Route path="/refresh" component={AutoRefresh} />
        <Route path="/gameFilter" component={GameFilter} />
        <Route path="/lastLogin" component={LastLogin} />*/}
        <App />
    </HashRouter>,
    document.querySelector("#root")
);
