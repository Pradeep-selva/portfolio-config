import { secrets } from "../secrets";

export const AuthTypes = {
  authorized: "1",
  unauthorized: "0"
};

export const isLoggedIn = () =>
  !!parseInt(localStorage.getItem(secrets.authKey) || AuthTypes.unauthorized);
