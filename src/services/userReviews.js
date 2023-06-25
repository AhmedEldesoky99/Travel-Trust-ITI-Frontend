import { request } from "./axios";

export const getUserReviews = (id) => {
    return request({
      url: `/v1/comments/user/${id}`,
      method: "GET",
    });
  };