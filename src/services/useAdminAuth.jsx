import { request } from "./axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const useAdminAuth = () => {
  const navigate = useNavigate();

  const adminSignup = (data) => {
    console.log(data);
    return request({
      url: "/v1/users/sign-up/admin",
      method: "POST",
      data: data,
      successMsg: "You have been signed up successfully",
    });
  };

  const adminLogin = (data) => {
    console.log(data);
    return request({
      url: "/v1/users/sign-in/admin",
      method: "POST",
      data: data,
      successMsg: "You have been logged in successfully",
    });
  };

  const adminSignupMutation = () => {
    return useMutation(adminSignup, {
      onSuccess: (res) => {
        console.log(res.data.success, "ahmed");
        if (res.data.success) {
          console.log("Navigate", "signup");
          localStorage.setItem("travelJWT", res.data.access_token);
          localStorage.setItem("localId", res.data.user._id);
          navigate(`/admin/alltours/${res.data.userBody._id}`);
        }
      },
      onError: (err) => console.log(err),
    });
  };

  const adminLoginMutation = () => {
    return useMutation(adminLogin, {
      onSuccess: (res) => {
        console.log(res);
        if (res.success) {
          console.log("Navigate login");
          localStorage.setItem("travelJWT", res.data.access_token);
          localStorage.setItem("userId", res.data.userBody._id);
          navigate(`/admin/alltours/${res.data.userBody._id}`);
        }
      },
      onError: (err) => console.log(err),
    });
  };

  return {
    adminSignupMutation,
    adminLoginMutation,
  };
};

export default useAdminAuth;
