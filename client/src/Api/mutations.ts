import { ApiEndpoints, IAbout } from "../Configs";
import Axios from "./axios";

export const updateAboutContent = (payload: IAbout) =>
  Axios.getInstance()
    .put(ApiEndpoints.about, payload)
    .then((response) => response.data);
