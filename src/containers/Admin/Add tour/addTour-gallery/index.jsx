import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Form } from "antd";
const { Item } = Form;

import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";
import CustomButton from "../../../../components/shared/CustomButton";
import CustomUploadImage from "../../../../components/Admin/uploadImage";

const AddGallery = () => {
  const { formData, onhandleSubmit, handlePrev } = useAddTourFormContext();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });

  return (
    <>
      <div className="rounded-2xl shadow-md p-10 mt-10  bg-white">
        <h3 className="text-3xl mt-10 font-medium">Upload Highlight images</h3>
        <Form onFinish={handleSubmit(onhandleSubmit)}>
          <div className="flex justify-start items-center flex-wrap md:flex-nowrap mt-10">
            <Controller
              name="highlight_files"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Image is required",
                },
              }}
              render={({ field }) => (
                <>
                  <div className="flex flex-col content-start">
                    <CustomUploadImage
                      length={6}
                      fileList={field.value}
                      setFileList={field.onChange}
                    />
                    {errors.highlight_files && (
                      <p className="text-tertiary-red mt-1">
                        {errors.highlight_files.message}
                      </p>
                    )}
                  </div>
                </>
              )}
            />
          </div>

          <h3 className="text-3xl mt-10 font-medium">Upload food images</h3>
          <div className="flex justify-start items-center flex-wrap md:flex-nowrap mt-10">
            <Controller
              name="food_files"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Image is required",
                },
              }}
              render={({ field }) => (
                <>
                  <div className="flex flex-col content-start">
                    <CustomUploadImage
                      length={2}
                      fileList={field.value}
                      setFileList={field.onChange}
                      // {...field}
                    />
                    {errors.food_files && (
                      <p className="text-tertiary-red mt-1">
                        {errors.food_files.message}
                      </p>
                    )}
                  </div>
                </>
              )}
            />
          </div>
          <input type="submit" id="form-3" className="hidden" />
        </Form>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-end mt-10 mb-10 gap-5">
        <CustomButton
          type="quadruple"
          value="Previous"
          width="w-64"
          onClick={handlePrev}
        />
        <label htmlFor="form-3" className="btn w-64">
          Next
        </label>
      </div>
    </>
  );
};

export default AddGallery;
