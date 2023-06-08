import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { request } from "./axios";

import  UserIdContext  from "../context/UserIdContext";

const useUserAuth = () => {
  const navigate = useNavigate();



  const userSignup = (data) => {
    console.log(data);
    return request({
      url: "/v1/users/sign-up/user",
      method: "POST",
      data: data,
      successMsg: "You have been signed up successfully",
    });
  };

  
  const userLogin = (data) => {
    console.log(data);
    return request({
      url: "/v1/users/sign-in/user",
      method: "POST",
      data: data,
      successMsg: "You have been logged in successfully",
    });
  };

  const userSignupMutation = () => {
    // const { setUserId } = useContext(UserIdContext); 
    return useMutation(userSignup, {
      onSuccess: (res) => {
        if (res.success) {
          localStorage.setItem("travelJWT", res.data.access_token);
          localStorage.setItem("userId", res.data.user._id);
          // setUserId(res.data.user._id);
          navigate("/");
        }
      },
      onError: (err) => console.log(err),
    });
  };

  const userLoginMutation = () => {
    return useMutation(userLogin, {
      onSuccess: (res) => {
        if (res.success) {
          localStorage.setItem("travelJWT", res.data.access_token);
          localStorage.setItem("userId", res.data.userBody._id);
          navigate("/");
        }
      },
      onError: (err) => console.log(err),
    });
  };

  return {
    userSignupMutation,
    userLoginMutation,
  };
};

export default useUserAuth;
