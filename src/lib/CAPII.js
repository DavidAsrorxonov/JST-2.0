import axios from "axios";
import { API_URL } from "../constants/api";
import Toast from "../components/ui/Toast";

const capi = axios.create({
  baseURL: API_URL,
});

capi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers["Content-Type"] = "application/json";
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

capi.interceptors.response.use(
  (res) => res,
  (err) => {
    if (
      err.response &&
      err.response.status === 401 &&
      err.response.data.message === "Token expired"
    ) {
      Toast({
        desciption:
          "Your token has expired, you will be logged out in 4 seconds",
        color: "danger",
        duration: 4000,
      });

      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/";
      }, 4000);
    }

    return Promise.reject(err);
  }
);

export default capi;
