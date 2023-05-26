import React from "react";
import { useForm } from "react-hook-form";

import Navbar from "../../components/shared/Navbar";
import CustomInput from "../../components/shared/FormComponents/CustomInput";
import TourCard from "../../components/shared/TourCard";
import Footer from "../../components/shared/Footer";
import CustomButton from "../../components/shared/CustomButton";
import EachGovernorate from "../EachGovernorate";
import Sales from "../Sales";
import TourWideCard from "../../components/shared/TourWideCard";
import TourDetails from "../TourDetails";
import CustomMap from "../../components/shared/Map";
import AllTours from './../AllTours/index';


const SharedComponents = () => {
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
    <>
      <Navbar />
      {/* <TourDetails /> */}
      {/* <CustomMap height="15rem" setLocation={console.log} /> */}
      {/* <TourWideCard /> */}
      {/* <Sales /> */}
      {/* <EachGovernorate /> */}
      {/* <form className="mt-20" onSubmit={handleSubmit(registerHandler)}>
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
          <p className="text-red-600">Password doesn't match</p>
        ) : null}
        <CustomButton value="Sign up" type="primary" />
      </form> */}
      {/* <TourCard /> */}
      <AllTours/>
      <Footer />
    </>
  );
};

export default SharedComponents;
