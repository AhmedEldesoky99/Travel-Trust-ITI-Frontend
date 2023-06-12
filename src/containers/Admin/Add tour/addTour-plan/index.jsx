import DayInputs from "../../../../containers/Admin/Add tour/DayInputs";
import Categories from "../../../../containers/Admin/Add tour/Categories";
import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";
import { useFieldArray, useForm } from "react-hook-form";
import CustomButton from "../../../../components/shared/CustomButton";
import EachDayForm from "../eachDayForm.jsx";
import { useState } from "react";
import StopLocationInputs from "../StopLocationInput";

const AddPlan = ({}) => {
  const { formData, handlePrev, onhandleSubmit } = useAddTourFormContext();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "plan",
  });
  return (
    <>
      <form onSubmit={handleSubmit(onhandleSubmit)} className="mt-8">
        <div className="rounded-2xl shadow-md p-10 ">
          <h2 className="text-3xl font-medium">Customize Your Plan</h2>{" "}
          {fields.map((field, index) => {
            return (
              <>
                <DayInputs
                  key={field.id}
                  index={index}
                  register={register}
                  errors={errors}
                  control={control}
                />
              </>
            );
          })}
        </div>
        <input type="submit" id="form-2" className="hidden" />
        <div className="flex flex-col items-center md:flex-row md:justify-end mt-10 mb-10 gap-5">
          <CustomButton
            type="quadruple"
            value="Previous"
            width="w-64"
            onClick={handlePrev}
          />
          <label htmlFor="form-2" className="btn w-64">
            Next
          </label>
        </div>
      </form>
    </>
  );
};

export default AddPlan;
