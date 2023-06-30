import { useNavigate } from "react-router-dom";
import { request } from "./axios";
import { useMutation } from "react-query";

const mainAdminLogin = (data) => {
  return request({
    url: "/v1/users/sign-in/admin",
    method: "POST",
    data: data,
    successMsg: "You have been logged in successfully",
  });
};

export const mainAdminLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation(mainAdminLogin, {
    onSuccess: (res) => {
      if (res.success) {
        localStorage.setItem("adminId", res.data.userBody._id);
        localStorage.setItem("adminToken", res?.data?.access_token);
        navigate(`/admin/alltours/${res.data.userBody._id}`);
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
