import React from "react";
import { Route, Switch } from "react-router-dom";
import { RouteNames } from "../Configs";
import { About, Home, Login, Projects } from "../Pages";
import AuthRoute from "./AuthRoute";

export const Routes = () => (
  <Switch>
    <Route exact path={RouteNames.login} component={Login} />
    <AuthRoute exact path={RouteNames.home} component={Home} />
    <AuthRoute exact path={RouteNames.about} component={About} />
    <AuthRoute exact path={RouteNames.projects} component={Projects} />
  </Switch>
);
