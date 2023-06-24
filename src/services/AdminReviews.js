import { request } from "./axios";

export const getAdminReviews = (id) => {
    return request({
      url: `/v1/comments?limit=1&id=${id}`,
      method: "GET",
    });
  };