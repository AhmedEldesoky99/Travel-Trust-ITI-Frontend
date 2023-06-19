import { request } from "./axios";


export const getSales = () => {
    return request({ url: "/v1/tours/sales", method: "GET" });
  };