import React from "react";
import { Controller } from "react-hook-form";

import CustomDatePicker from "../../../../components/shared/Admin/DateRangePicker";
import CustomInput from "../../../../components/shared/FormComponents/CustomInput";
import CustomSelection from "../../../../components/Admin/customSelection";

import {
  getAllCategories,
  getTopDestinations,
} from "../../../../services/Home";
import { useQuery } from "react-query";

const packagee = [
  { value: "Free parking", label: "Free parking" },
  { value: "Accomandation", label: "Accomandation" },
  { value: "Guide", label: "Guide" },
  { value: "Insurance", label: "Insurance" },
  { value: "Transportation", label: "Transportation" },
];

const meals = [
  { value: "Breakfast", label: "Breakfast" },
  { value: "Lunch", label: "Lunch" },
  { value: "Dinner", label: "Dinner" },
  { value: "Snacks", label: "Snacks" },
];

const OverviewData = ({ register, errors, control }) => {
  //-------------- state --------------

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery("categories", getAllCategories);

  const { data: cities } = useQuery("TopDestinations", getTopDestinations);

  console.log("categories", categories);
  console.log("cities", cities);

  const citiesOptions = cities?.data?.map((city) => {
    return { value: city._id, label: city.title };
  });

  const categoriesOptions = categories?.data?.map((category) => {
    return { value: category._id, label: category.name };
  });

  return (
    <>
      <CustomInput
        type="text"
        name="title"
        label="Title *"
        rule="title"
        register={register}
        errors={errors}
      />
      <Controller
        name="city"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Governorate selection is required",
          },
        }}
        render={({ field }) => (
          <>
            <CustomSelection
              //TO DO: center placeholder
              mode="multiple"
              options={citiesOptions}
              placeHolder="Please select governorate"
              {...field}
            />
            {errors.city && (
              <p className="text-tertiary-red mt-1">{errors.city.message}</p>
            )}
          </>
        )}
      />
      <div className="mb-4">
        <Controller
          name="date"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Date is required",
            },
          }}
          render={({ field }) => (
            <>
              <CustomDatePicker {...field} />
              {errors.date && (
                <p className="text-tertiary-red mt-1">{errors.date.message}</p>
              )}
            </>
          )}
        />
      </div>
      <CustomInput
        type="number"
        name="price_per_person"
        rule="price_per_person"
        label="Price per person *"
        register={register}
        errors={errors}
      />

      <CustomInput
        type="number"
        name="person_num"
        rule="person_num"
        label="Number of persons *"
        register={register}
        errors={errors}
      />

      <CustomInput
        type="text"
        name="dress_code"
        label="Dress Code"
        register={register}
        errors={errors}
      />

      <Controller
        name="description"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Description is required",
          },
        }}
        render={({ field }) => (
          <>
            <label htmlFor="description" className=" block text-lg mb-2 ">
              Write description for your tour:
            </label>

            <textarea
              className=" border-[1px] border-black w-full rounded-lg focus-visible:border-black invalid:border-tertiary-red "
              {...field}
              id="description"
              name="description"
              rows="4"
              cols="50"
            ></textarea>
            {errors.description && (
              <p className="text-tertiary-red mt-1 ">
                {errors.description.message}
              </p>
            )}
          </>
        )}
      />

      <Controller
        name="include"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Package include is required",
          },
        }}
        render={({ field }) => (
          <>
            <CustomSelection
              mode="multiple"
              options={packagee}
              placeHolder="Please pick what your package tour include"
              span="Package tour include :"
              {...field}
            />
            {errors.include && (
              <p className="text-tertiary-red mt-1 ">
                {errors.include.message}
              </p>
            )}
          </>
        )}
      />

      <Controller
        name="category"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Tour activites is required",
          },
        }}
        render={({ field }) => (
          <>
            <CustomSelection
              mode="multiple"
              options={categoriesOptions}
              placeHolder="Please pick tour activites"
              span="Tour activites :"
              {...field}
            />
            {errors.category && (
              <p className="text-tertiary-red mt-1 ">
                {errors.category.message}
              </p>
            )}
          </>
        )}
      />

      <Controller
        name="meals"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Meals is required",
          },
        }}
        render={({ field }) => (
          <>
            <CustomSelection
              mode="multiple"
              options={meals}
              placeHolder="Please pick meals included in tours"
              span="Meals included :"
              {...field}
            />
            {errors.meals && (
              <p className="text-tertiary-red mt-1">{errors.meals.message}</p>
            )}
          </>
        )}
      />
    </>
  );
};

export default OverviewData;
