import { request } from "./axios";


export const getSearchOptions = () => {
    return request({ url: "/v1/cities", method: "GET" });
  };