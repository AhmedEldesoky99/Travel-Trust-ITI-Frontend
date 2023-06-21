import { request } from "./axios";

export const getAllDestinations = () => {
  return request({
    url: "/v1/destinations",
    method: "GET",
  });
};
