import React from "react";
import { Redirect, Route } from "react-router";
import { AuthTypes, RouteAuthKey, RouteNames } from "../Configs";

const AuthRoute = ({ component: Component, inverse, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) =>
      !parseInt(
        localStorage.getItem(RouteAuthKey) || AuthTypes.unauthorized
      ) ? (
        <Redirect to={RouteNames.login} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default AuthRoute;
