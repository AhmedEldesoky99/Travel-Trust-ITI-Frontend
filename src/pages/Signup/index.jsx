/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import CustomInput from "../../components/shared/FormComponents/CustomInput";
import CustomButton from "../../components/shared/CustomButton";

import Google from "../../assets/images/Logo/Google.svg";
import Logo from "../../assets/images/Logo/Tlogo.svg";

import useUserAuth from "../../services/useUserAuth";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  const { userSignupMutation } = useUserAuth();
  const { mutate, isLoading } = userSignupMutation();

  const registerHandler = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <div className="flex 2xs:flex-col lg:flex-row ">
      <div className="relative 2xs:h-[20vh] 2xs:w-[100vw] lg:w-[50vw] lg:h-[100vh]  sm:block 2xs:bg-sign-up-user bg-cover bg-left bg-no-repeat">
        <div className="bg-black bg-opacity-50 2xs:h-[20vh] 2xs:w-[100vw] lg:h-[100vh] lg:w-[50vw] flex flex-col justify-end">
          <div className="flex justify-center items-center lg:absolute lg:top-[56px] lg:left-[56px] 2xs:h-[30vh] lg:h-[5rem]">
            <Link to="/">
              <img className="inline-block" src={Logo} />
            </Link>
          </div>
          <div className="text-white 2xs:hidden md:text-base md:block xl:text-xl 2xl:text-2xl px-12 py-3">
            <p>"Wherever yo go becomes a part of you somehow"</p>
            <p>-Anita Desal-</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center 2xs:w-[100vw] lg:w-[50vw] 2xs:h-[80vh] lg:h-[100vh] 2xs:p-5  xl:mt-0 ">
        <h1 className="md:text-3xl 2xs:text-base sm:text-xl 2xs:my-4 font-bold">
          Create an account
        </h1>
        <button className="btn btn-wide bg-white text-gray-700 border-gray-500 mb-4 max-w-[547px] 2xs:w-full h-16  hover:text-white hover:bg-black">
          <img src={Google} className="h-5 pr-2 mb-1" />{" "}
          <span className="normal-case 2xs:text-sm sm:text-base 2xl:text-xl">
            Sign up with google
          </span>
        </button>
        <div className="flex flex-row items-center mb-4">
          <hr className="h-px bg-gray-600 border-0 w-28" />
          <p className="px-5 2xs:text-md sm:text-lg">or with</p>
          <hr className="h-px bg-gray-600 border-0 w-28" />
        </div>

        <form
          onSubmit={handleSubmit(registerHandler)}
          className="max-w-[547px] w-full flex flex-col justify-center space-y-2"
        >
          <CustomInput
            type="text"
            name="username"
            label="Username*"
            rule="username"
            register={register}
            errors={errors}
          />
          <CustomInput
            type="email"
            name="email"
            label="Email*"
            rule="email"
            register={register}
            errors={errors}
          />
          <CustomInput
            type="number"
            name="phone"
            label="Phone Number*"
            rule="phone_Num"
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
          <CustomInput
            type="password"
            label="Confirm Password*"
            name="confirm_password"
            rule="confirm_password"
            register={register}
            errors={errors}
          />
          {watch("confirm_password") !== watch("password") &&
          getValues("confirm_password") ? (
            // eslint-disable-next-line react/no-unescaped-entities
            <p className="text-red-600">Password doesn't match</p>
          ) : null}
          <div className="flex flex-col mt-2 mb-6 items-center justify-center">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name=""
                  id="checkbox"
                  className="focus:accent-primary-green checkbox-xs"
                />
                <label
                  htmlFor="checkbox"
                  className="text-md font-semibold ml-2 "
                >
                  Remember me
                </label>
              </div>
              <a href="" className="text-md font-medium text-primary-green">
                forgot password ?
              </a>
            </div>
            <div className="w-80 mt-8 mb-3 text-center flex items-center justify-center">
              <CustomButton
                submit="submit"
                isLoading={isLoading}
                value="Sign up"
                type="ternary"
                width="w-[100%]"
              />
            </div>
          </div>
        </form>
        <p className="text-md font-medium">
          Already have an account?
          <Link
            to="/login"
            className="text-md font-semibold underline ml-2 text-primary-green"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
