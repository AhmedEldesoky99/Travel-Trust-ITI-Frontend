/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import CustomInput from "../../../components/shared/FormComponents/CustomInput";
import CustomButton from "../../../components/shared/CustomButton";

import Logo from "../../../assets/images/Logo/Tlogo.svg";

import { mainAdminLoginMutation } from "../../../services/mainAdminLogin";

const MainAdminLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading, isSuccess, data } = mainAdminLoginMutation();

  const registerHandler = (data) => {
    mutate(data);
  };

  const navigate = useNavigate();
  isSuccess && navigate(`admin/alltours/${data?.data?.userBody?._id}`);

  return (
    <div className="flex 2xs:flex-col lg:flex-row ">
      <div className="relative 2xs:h-[30vh] 2xs:w-[100vw] lg:w-[50vw] lg:h-[100vh]  sm:block 2xs:bg-mainAdminBG bg-cover bg-left bg-no-repeat">
        <div className="bg-black bg-opacity-50 2xs:h-[30vh] 2xs:w-[100vw] lg:h-[100vh] lg:w-[50vw] flex flex-col justify-end">
          <div className="flex justify-center items-center lg:absolute lg:top-[56px] lg:left-[56px] 2xs:h-[30vh] lg:h-[5rem]">
            <Link to="/">
              <img className="inline-block" src={Logo} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center 2xs:w-[100vw] lg:w-[50vw] 2xs:h-[60vh] lg:h-[100vh] 2xs:p-5  xl:mt-0  ">
        <h1 className="md:text-3xl 2xs:text-3xl font-bold">Welcome</h1>
        <p className="text-xl mb-8 mt-2">Please enter your details below</p>

        <form
          onSubmit={handleSubmit(registerHandler)}
          className="max-w-[547px] w-full flex flex-col justify-center space-y-2"
        >
          <CustomInput
            type="email"
            name="email"
            label="Email*"
            rule="email"
            register={register}
            errors={errors}
          />
          <CustomInput
            type="password"
            label="Password*"
            name="password"
            rule="password"
            register={register}
            errors={errors}
          />
          <div className="flex flex-col mt-2 mb-6 items-center justify-center">
            <div className="w-80 mt-8 mb-8 text-center flex items-center justify-center">
              <CustomButton
                submit="submit"
                isLoading={isLoading}
                value="Login"
                type="ternary"
                width="w-[100%]"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainAdminLogin;
