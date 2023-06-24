import React from "react";
import { Controller, useFieldArray } from "react-hook-form";

import CustomInput from "../../../../components/shared/FormComponents/CustomInput";
import StopLocationInputs from "../StopLocationInput";
import CustomButton from "../../../../components/shared/CustomButton";
import CustomDatePicker from "../../../../components/shared/Admin/TimePicker";
import CustomUploadImage from "../../../../components/Admin/uploadImage";

const DayInputs = ({ register, errors, control, index }) => {
  //-------------- state --------------
  const { fields, append, remove } = useFieldArray({
    control,
    name: `plan.${index}.details`,
  });

  //-------------- handlers --------------
  const handleAppend = (e) => {
    e.preventDefault();
    append();
  };
  return (
    <>
      <h2 className="text-2xl mb-6 mt-12 font-medium">
        Day {index + 1} Details
      </h2>
      <div className="grid lg:grid-cols-6 lg:grid-flow-row auto-rows-max w-full  gap-10 h-fill md:mt-8 mt-32">
        <div className="col-span-6 lg:col-span-3">
          <CustomInput
            type="text"
            name={`plan.${index}.title`}
            label="Day Title*"
            rule="day_title"
            register={register}
            errors={errors}
          />

          <Controller
            name={`plan.${index}.time`}
            control={control}
            rules={{
              required: {
                value: true,
                message: "Start time and End time is required",
              },
            }}
            render={({ field }) => (
              <>
                <CustomDatePicker {...field} />
                {errors.plan?.[index]?.time && (
                  <p className="text-tertiary-red mt-1 mb-6">
                    {errors.plan?.[index]?.time?.message}
                  </p>
                )}
              </>
            )}
          />

          <h3 className="text-2xl">Where they will go during the day</h3>
          <StopLocationInputs
            key={index}
            register={register}
            errors={errors}
            fields={fields}
            remove={remove}
            nestedIndex={index}
          />

          <div className="w-full lg:flex lg:justify-start mt-4 ">
            <CustomButton
              onClick={handleAppend}
              type="secondary"
              width="w-full"
              value="Add location"
            />
          </div>
        </div>
        <div className=" col-span-6 lg:col-span-3">
          <Controller
            name={`plan.${index}.image_file`}
            control={control}
            render={({ field }) => (
              <>
                <div className="flex justify-center flex-col">
                  <span className="block mb-4">
                    (Pick a photo that highlight the day)
                  </span>

                  <CustomUploadImage
                    length={0}
                    fileList={field.value}
                    setFileList={field.onChange}
                    // {...field}
                  />
                </div>
              </>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default DayInputs;
