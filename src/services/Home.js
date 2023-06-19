import { request } from "./axios";

export const getAllCategories = () => {
  return request({ url: "/v1/categories", method: "GET" });
};

export const getTopDestinations = () => {
  return request({ url: "/v1/cities", method: "GET" });
};

export const getTopReviews = () => {
  return request({ url: "/v1/comments", method: "GET" });
};

export const getAllTours = () => {
  return request({
    url: "v1/tours",
    method: "GET",
  });
};

export const getRecommendedTour = () => {
  return request({ url: "/v1/recommendations", method: "GET" });
};

export const getAllDestinations = () => {
  return request({ url: "/v1/destinations", method: "GET" });
};
