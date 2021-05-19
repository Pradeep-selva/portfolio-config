export const RouteAuthKey = "isAdmin";

export const AuthTypes = {
  authorized: "1",
  unauthorized: "0"
};

export const isLoggedIn = !!parseInt(
  localStorage.getItem(RouteAuthKey) || AuthTypes.unauthorized
);
