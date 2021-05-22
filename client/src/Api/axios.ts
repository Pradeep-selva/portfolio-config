import axios from "axios";
import { BASE_URL } from "../Configs";
import { secrets } from "../secrets";

const API_URL = `${BASE_URL}/api`;

const getInstance = () => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
      "x-api-key": secrets.xApiKey
    }
  });
};

const axiosInstance = {
  getInstance
};

export default axiosInstance;
