import axios from "axios";
import { BASE_URL } from "../Configs";

const API_URL = `${BASE_URL}/api`;

const getInstance = (baseURL = API_URL) => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
      "x-api-key": `${process.env.REACT_APP_X_API_KEY}`
    }
  });
};

const axiosInstance = {
  getInstance
};

export default axiosInstance;
