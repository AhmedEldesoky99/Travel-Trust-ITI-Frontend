import { request } from "./axios";

export const getEachGovernorateTours = (id) => {
    return request({
      url: `/v1/tours/city/${id}?limit=5`,
      method: "GET",
    });
  };