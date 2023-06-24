import { request } from "./axios";

export const getAllTours = () => {
    return request({
      url: "v1/tours",
      method: "GET",
    });
  };