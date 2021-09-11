
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import * as dotenv from "dotenv";

import AdminLayout from "layouts/Admin.js";


ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route path="" render={(props) => <AdminLayout {...props} />} />
        </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
