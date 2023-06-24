import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "./axios";

//1- Get all tours
const AllTours = () => {
  return request({
    url: `/v1/tours`,
    method: "GET",
  });
};

export const getAllTours = () => {
  return useQuery(["allTours"], AllTours);
};

//2- Get all Locals
const AllLocals = () => {
  return request({
    url: `/v1/admin/organizers`,
    method: "GET",
  });
};

export const getAllLocals = () => {
  return useQuery(["allLocals"], AllLocals);
};

//3- Get all Reviews
const getMainAdminReviews = () => {
  return request({
    url: `/v1/comments/?limit=0`,
    method: "GET",
  });
};

export const mainAdminReviewsById = () => {
  return useQuery("mainAdminReviewsById", getMainAdminReviews);
};

//4-upload Identity docs
const uploadIdentity = (identityform) => {
  return request({
    url: "/v1/user/profile/upload-identity",
    method: "POST",
    data: identityform,
    formData: true,
    successMsg:
      "You have submited your form sucessfully .. please wait for your verification",
  });
};

export const uploadIdentityMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(uploadIdentity, {
    onSuccess: (res) => {
      console.log(res);
      queryClient.invalidateQueries("user-data");
    },
    onError: (err) => console.log(err),
  });
};
