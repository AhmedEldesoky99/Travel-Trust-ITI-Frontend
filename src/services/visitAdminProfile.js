import { request } from "./axios";


export const getAdminData = (id) => {
    return request({ url: `/v1/user/profile/${id}`, method: "GET" });
  };