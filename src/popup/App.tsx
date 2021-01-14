// import { createMemoryHistory } from "history";
import React from "react";
import { hot } from "react-hot-loader/root";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import "./App.scss";
import AutoRefresh from "./pages/autoRefresh";
import GameFilter from "./pages/GameFilter";
import Index from "./pages/Index";
import LastLogin from "./pages/LastLogin";
import Notifications from "./pages/notifications";

// const history = createMemoryHistory();
window.addEventListener(
    "getChromeData",
    function (data) {
        // do Chrome things;
        console.log({ data }, "I got chrome data (background script)");
    },
    false
);
const App = () => {
    console.log("App.tsx");
    // console.log({ history });
    // const style = {
    //     width: "500px",
    // };
    // const pages = ["autoRefresh", "Index", "GameFilter", "Nofications"];
    return (
        <>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                crossOrigin="anonymous"
            />
            <nav className="navbar navbar-expand-lg" style={{ width: "500px" }}>
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
                    <li className="nav-item">
                        <Link to="/notifications">notifications </Link>
                    </li>
                </ul>
            </nav>
            <Route exact path="/" component={Index} />
            <Route path="/refresh" component={AutoRefresh} />
            <Route path="/gameFilter" component={GameFilter} />
            <Route path="/lastLogin" component={LastLogin} />
            <Route path="/notifications" component={Notifications} />
        </>
    );
};

export default hot(App);
