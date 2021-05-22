import { ApiEndpoints } from "../Configs";
import Axios from "./axios";

export const getAboutContent = () =>
  Axios.getInstance()
    .get(ApiEndpoints.about)
    .then((response) => response.data);

export const updateAboutContent = (payload: {
  description: string;
  skills: Array<string>;
}) =>
  Axios.getInstance()
    .put(ApiEndpoints.about, payload)
    .then((response) => response.data);
