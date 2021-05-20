import React from "react";
import { Route, Switch } from "react-router-dom";
import { RouteNames } from "../Configs";
import { Home, Login } from "../Pages";
import AuthRoute from "./AuthRoute";

export const Routes = () => (
  <Switch>
    <Route exact path={RouteNames.login} component={Login} />
    <AuthRoute exact path={RouteNames.home} component={Home} />
  </Switch>
);
