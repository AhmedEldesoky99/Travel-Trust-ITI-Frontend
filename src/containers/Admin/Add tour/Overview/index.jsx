import CustomDatePicker from "../../../../components/shared/Admin/DateRangePicker";
import { useForm } from "react-hook-form";

import CustomInput from "../../../../components/shared/FormComponents/CustomInput";
import React from "react";
import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";
import { useRef } from "react";

const OverviewData = ({ onhandleSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    getValues,
  } = useForm();
  // console.log(ref);
  const { formData, handleChange, nextBtn } = useAddTourFormContext();
  console.log("newRef", nextBtn);
  return (
    <>
      {/* <CustomDatePicker/> */}
      <h2 className="text-2xl mb-6 font-medium">Tour Information</h2>
      <form
        onSubmit={handleSubmit(onhandleSubmit)}
        className="max-w-[547px] w-full flex flex-col justify-center space-y-2 mb-4"
      >
        <CustomInput
          type="text"
          name="title"
          label="Title *"
          rule="title"
          value={formData?.title}
          register={register}
          errors={errors}
          onChange={handleChange}
        />

        <select
          name="selectGov"
          rule="selectGov"
          value={formData?.selectGov}
          onChange={handleChange}
          className="select select-bordered border-black w-full mb-4 h-16 "
        >
          <option disabled>Select Governorate</option>
          <option value="1">Normal Apple</option>
          <option value="2">Normal Orange</option>
          <option value="3">Normal Tomato</option>
        </select>

        <CustomInput
          type="number"
          name="price"
          rule="price"
          value={formData?.price}
          label="Price per user *"
          register={register}
          errors={errors}
          onChange={handleChange}
        />

        <div className="flex gap-4">
          <div className=" w-full">
            <CustomInput
              type="number"
              name="duration"
              rule="duration"
              value={formData?.duration}
              label="Duration in Days*"
              register={register}
              errors={errors}
              onChange={handleChange}
            />
          </div>
          <div className=" w-full">
            <CustomInput
              type="number"
              name="personsNum"
              rule="personsNum"
              value={formData?.personsNum}
              label="Number of persons *"
              register={register}
              errors={errors}
              onChange={handleChange}
            />
          </div>
        </div>

        <CustomInput
          type="textarea"
          name="description"
          rule="description"
          value={formData?.description}
          label="Description*"
          register={register}
          errors={errors}
          onChange={handleChange}
        />

        <CustomInput
          type="text"
          name="dressCode"
          value={formData?.dressCode}
          label="Dress Code"
          register={register}
          errors={errors}
          onChange={handleChange}
        />

        <button ref={nextBtn} type="submit" className="">
          submit
        </button>
      </form>
    </>
  );
};

export default OverviewData;
