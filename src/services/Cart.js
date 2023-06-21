import { request } from "./axios";

export const getCart = () => {
    return request({
      url: "v1/cart",
      method: "GET",
    });
  };