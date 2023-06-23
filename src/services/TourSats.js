import { request } from "./axios";


export const getStats = () => {
    return request({ url: "/v1/tours/statistics", method: "GET" });
  };