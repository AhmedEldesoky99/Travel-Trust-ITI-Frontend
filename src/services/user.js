import { useQuery } from "react-query";
import { request } from "./axios";



const getUserById = (userId) => {
  return request({ url: `/v1/user/profile/${userId}`, method: "GET" });
};


export const getUserData = (userId) => {
  return useQuery(
    ["user-data", userId],
    () => getUserById(userId),
    {
      enabled: !!userId,
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      }
    });
};


