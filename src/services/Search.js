/* eslint-disable no-unused-vars */
import { request } from "./axios";


export const getSearchResults = (city,minPrice,maxPrice,category,status,rate) => {
    return request({ url: `/v1/tours?limit=100&city=${city}&minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}&status=${status}&rate=${rate}`, method: "GET" });
  };