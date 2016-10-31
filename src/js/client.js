import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router"

import Layout from "./components/Layout";

var app = document.getElementById("app");
ReactDOM.render(<Layout/>, app);
