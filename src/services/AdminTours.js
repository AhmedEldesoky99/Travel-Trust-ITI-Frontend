import { request } from "./axios";

export const getAdminTours = (id) => {
    return request({
      url: `/v1/tours/organizer/${id}`,
      method: "GET",
    });
  };