import { request } from "./axios";

export const getAdminReviews = (id) => {
    return request({
      url: `/v1/comments/user/${id}`,
      method: "GET",
    });
  };