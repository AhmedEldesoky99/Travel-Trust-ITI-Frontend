import { Controller, useForm } from "react-hook-form";

import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";
import OverviewData from "../../../../containers/Admin/Add tour/Overview";
import CustomSelection from "../../../../components/Admin/customSelection";
import { useTour } from "../../../../services/useTour";
import { useEffect, useState } from "react";

const AddOverview = ({}) => {
  //-------------- state --------------
  const { tourID, formData, setFormData, onhandleSubmit } =
    useAddTourFormContext();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });

  useEffect(() => {
    reset({ ...formData });
  }, [formData._id]);

  console.log("render", formData);

  return (
    <>
      <div className="rounded-2xl shadow-md p-10 mt-10 bg-white">
        <h2 className=" font-semibold text-4xl">
          {tourID === "add" ? "Create your own tour" : "Update tour"}
        </h2>
        {tourID === "add" && (
          <p className="mt-4  text-xl">
            When filling out information for your tour, we've designed a
            user-friendly multi-step form to guide you through the process.<br></br> Our
            form is broken down into several easy-to-follow steps, so you can
            take your time and fill out each section at your own pace.
          </p>
        )}

        <h2 className="text-2xl mb-6 font-medium mt-8 ">Tour Information</h2>
        <form onSubmit={handleSubmit(onhandleSubmit)}>
          <div className=" flex flex-col w-full md:mt-8">
            <OverviewData
              tourID={tourID}
              onhandleSubmit={onhandleSubmit}
              register={register}
              errors={errors}
              control={control}
            />
          </div>
          <input type="submit" id="form-1" className="hidden" />
        </form>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-end mt-10 mb-10 gap-5">
        <label htmlFor="form-1" className="btn w-64">
          Next
        </label>
      </div>
    </>
  );
};

export default AddOverview;
