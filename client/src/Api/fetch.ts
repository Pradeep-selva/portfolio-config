import { ApiEndpoints } from "../Configs";
import Axios from "./axios";

export const getAboutContent = () =>
  Axios.getInstance()
    .get(ApiEndpoints.about)
    .then((response) => response.data);

export const getProjects = () =>
  Axios.getInstance()
    .get(ApiEndpoints.projects)
    .then((response) => response.data);
