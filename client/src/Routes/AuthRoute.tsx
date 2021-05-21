import React from "react";
import { Redirect, Route } from "react-router";
import { isLoggedIn, RouteNames } from "../Configs";

const AuthRoute = ({ component: Component, inverse, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) =>
      !isLoggedIn() ? (
        <Redirect to={RouteNames.login} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default AuthRoute;
