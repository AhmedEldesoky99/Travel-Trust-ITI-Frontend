import React from "react";
import { Controller } from "react-hook-form";

import CustomDatePicker from "../../../../components/shared/Admin/DateRangePicker";
import CustomInput from "../../../../components/shared/FormComponents/CustomInput";
import CustomSelection from "../../../../components/Admin/customSelection";

import { ruleValidation } from "../../../../helpers/InputsValidation";

// const packagee = [
//   { value: "mm", label: "mm" },
//   { value: "aaa", label: "aa" },
//   { value: "sa", label: "sa" },
// ];
// const category = [
//   { value: "mm1", label: "mm1" },
//   { value: "aaa2", label: "aa2" },
//   { value: "sa3", label: "sa3" },
// ];

// const meals = [{ value: "mm21", label: "mm21" }];

const OverviewData = ({ register, errors, control }) => {
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
              mode=""
              options={[
                { value: "mm", label: "mm" },
                { value: "aa", label: "aa" },
              ]}
              placeHolder="Please select governorate"
              {...field}
            />
            {errors.city && (
              <p className="text-tertiary-red mt-1">{errors.city.message}</p>
            )}
          </>
        )}
      />

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
      <div className="mt-4">
        <CustomInput
          type="number"
          name="price_per_person"
          rule="price_per_person"
          label="Price per person *"
          register={register}
          errors={errors}
        />
      </div>

      <div className=" w-full mt-4">
        <CustomInput
          type="number"
          name="person_num"
          rule="person_num"
          label="Number of persons *"
          register={register}
          errors={errors}
        />
      </div>

      <div className="mt-4">
        <CustomInput
          type="text"
          name="dress_code"
          label="Dress Code"
          register={register}
          errors={errors}
        />
      </div>
    </>
  );
};

export default OverviewData;
