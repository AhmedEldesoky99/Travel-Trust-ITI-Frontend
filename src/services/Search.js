/* eslint-disable no-unused-vars */
import { request } from "./axios";
// import { useMutation } from "react-query";

export const getSearchResults = (data) => {


  return request({
    url: `/v1/tours?limit=1`,
    method: "POST",
    data:data
  });
};

