/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/shared/FormComponents/CustomInput";
import Google from "../../assets/images/Logo/Google.svg";
import Logo from "../../assets/images/Logo/Tlogo.svg";
import CustomButton from "../../components/shared/CustomButton";

const SignUp = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        watch,
        getValues,
      } = useForm();
      const registerHandler = (data) => {
        console.log(data);
      };
  return (
    <div className="flex flex-row">
      <div className="md:bg-sign-up-user lg:w-[50vw] lg:h-[100vh] lg:block 2xs:hidden  bg-cover bg-left bg-no-repeat">
        <div className="bg-black bg-opacity-50 h-[100vh] flex flex-col justify-end pl-5 pb-5">
          <div className="absolute top-10 left-5 h-[5rem] w-[6.2rem] ">
            <img src={Logo} />
          </div>
          <p className="text-white text-2xl pb-3">
            “Wherever you go becomes <br />a part of you somehow”
          </p>
          <p className="text-white text-lg"> - Anita Desal - </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:w-[50vw] 2xs:w-[100vw] xl:mt-0 my-auto h-[100vh]">
        <h1 className="md:text-4xl 2xs:text-3xl md:mb-10 2xs:mb-4">
          Create an account
        </h1>
        <button className="btn bg-white text-gray-700 border-gray-500 mb-4 hover:text-white hover:bg-black max-w-[540px] h-16 w-[60%] md:w-80">
          {" "}
          <img src={Google} className="h-5 pr-2 mb-1" /> sign up with google
        </button>
        <div className="flex flex-row items-center">
          <hr className="h-px bg-gray-600 border-0 w-28" />
          <p className="px-5 text-lg">or with</p>
          <hr className="h-px bg-gray-600 border-0 w-28" />
        </div>
        <form form onSubmit={handleSubmit(registerHandler)} className="max-w-[547px] xl:w-full flex flex-col justify-center gap-4">
            <CustomInput
            type="text"
            name="Username"
            label="username"
            rule="username"
            register={register}
            errors={errors}
            />
            <CustomInput
            type="email"
            name="E-mail"
            label="email"
            rule="email"
            register={register}
            errors={errors}
            />
            <CustomInput
            type="text"
            name="Phone number"
            label="phoneNum"
            rule="phoneNum"
            register={register}
            errors={errors}
            />
            <CustomInput
            type="password"
            label="Password"
            name="password"
            rule="password"
            register={register}
            errors={errors}
            />
            <CustomInput
            type="password"
            label="Confirm Password"
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
                <div className="w-80 mb-5 text-center flex items-center justify-center">
                    <CustomButton value="Sign up" type="ternary" width="w-[100%]" />
                </div>
            </div>
        </form>
        <p className="text-sm">
          Already have an account?
          <a href="" className="text-sm pl-1 text-cyan-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
