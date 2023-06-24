/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "./axios";

const getUserById = (userId) => {
  return request({ url: `/v1/user/profile/${userId}`, method: "GET" });
};

export const getUserData = (userId) => {
  return useQuery(["user-data", userId], () => getUserById(userId), {
    enabled: userId ? true : false,
    onSuccess: (res) => {
      // console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

export const useUser = () => {
  //get user by Id

  //update user
  const updateProfile = (profile) => {
    console.log("update");

    return request({
      url: `/v1/user/profile`,
      method: "PATCH",
      data: profile,
      formData: true,
      successMsg: "You have updated your profile successfully",
    });
  };

  const updateProfileMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(updateProfile, {
      onSuccess: (res) => {
        console.log(res);
        queryClient.invalidateQueries("user-data");
      },
      onError: (err) => console.log(err),
    });
  };
  return {
    updateProfileMutation,
  };
};
