import { request } from "./axios";
import { useQuery } from "react-query";

export const useAdminReviews = () => {
  //1- Get Reviews
  //1- Get Reviews By Id
  const getAdminReviews = ({ queryKey }) => {
    const organizerID = queryKey[1];
    console.log("organizerID", organizerID);

    return request({
      url: `/v1/comments/?limit=0&id=${organizerID}`,
      method: "GET",
    });
  };

  const AdminReviewsById = (organizerID) => {
    return useQuery(["adminReviewsById", organizerID], getAdminReviews);
  };

  return {
    AdminReviewsById,
  };
};


