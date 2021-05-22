import { ApiEndpoints, IAbout, IProject, UpdateTypes } from "../Configs";
import Axios from "./axios";

export const updateAboutContent = (payload: IAbout) =>
  Axios.getInstance()
    .put(ApiEndpoints.about, payload)
    .then((response) => response.data);

export const updateProjectContent = (payload: Array<IProject>) =>
  Axios.getInstance()
    .put(`${ApiEndpoints.workProjects}/${UpdateTypes.projects}`, {
      content: JSON.stringify(payload)
    })
    .then((response) => response.data);
