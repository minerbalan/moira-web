import axios, { AxiosPromise, AxiosRequestConfig, Method } from "axios";
import config from "../config";

const fetchApi = <T>(
  url: string,
  method: Method,
  data?: object,
  params?: object,
  headers?: object
): AxiosPromise<T> => {
  if (config.api.baseUrl == undefined) {
    throw Error("Need API_BASE_URL .env");
  }

  const axiosOption: AxiosRequestConfig = {
    url: url,
    method: method,
    baseURL: config.api.baseUrl,
    data: data,
    params: params,
    headers: headers,
    withCredentials: true,
  };

  return axios(axiosOption);
};

export default fetchApi;
