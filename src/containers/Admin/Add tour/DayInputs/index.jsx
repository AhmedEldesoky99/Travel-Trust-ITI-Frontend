import React from "react";
import { Controller, useFieldArray } from "react-hook-form";

import CustomInput from "../../../../components/shared/FormComponents/CustomInput";
import StopLocationInputs from "../StopLocationInput";
import CustomButton from "../../../../components/shared/CustomButton";
import CustomDatePicker from "../../../../components/shared/Admin/TimePicker";
import CustomUploadImage from "../../../../components/Admin/uploadImage";

const DayInputs = ({ register, errors, control, index }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `plan.${index}.details`,
  });

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
            rules={{ required: true }}
            render={({ field }) => <CustomDatePicker {...field} />}
          />

          <h3 className="text-2xl">Where they will go during the day</h3>
          <StopLocationInputs
            register={register}
            errors={errors}
            fields={fields}
            remove={remove}
            nestedIndex={index}
          />

          <div className="flex justify-start mt-4">
            <CustomButton
              onClick={handleAppend}
              type="primary"
              value="Add location"
            />
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3">
          <Controller
            name={`plan.${index}.image`}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <span className="block mb-4">
                  (Pick a photo that highlight the day)
                </span>

                <CustomUploadImage
                  length={0}
                  fileList={field.value}
                  setFileList={field.onChange}
                  // {...field}
                />
              </>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default DayInputs;
