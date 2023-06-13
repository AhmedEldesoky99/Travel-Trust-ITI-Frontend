import CustomMap from "../../../../components/shared/Map";
import CustomInput from "../../../../components/shared/FormComponents/CustomInput";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";
import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";
import CustomButton from "../../../../components/shared/CustomButton";

const AddMeetingPoint = () => {
  const { formData, handlePrev, onhandleSubmit } = useAddTourFormContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });

  return (
    <>
      <div className="rounded-2xl shadow-md p-10">
        <h3 className="text-3xl font-medium">Pick the meeting point</h3>

        <div className="  flex justify-center items-center flex-col">
          <form onSubmit={handleSubmit(onhandleSubmit)}>
            <div className=" w-[100vh] h-[60vh] mt-10 rounded-2xl">
              <Controller
                name="meeting_point"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <CustomMap
                      coordinates={field.value}
                      setLocation={field.onChange}
                    />
                  </>
                )}
              />
            </div>
            <p className="mt-4 mb-8 text-center">
              (Be Careful any scrolling in the map area will cause the meeting
              point to change)
            </p>
            <div className=" mt-6">
              <CustomInput
                type="text"
                name="description"
                label="Description"
                rule="description"
                register={register}
                errors={errors}
              />
            </div>
            <input type="submit" id="form-4" className="hidden" />
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-end mt-10 mb-10 gap-5">
        <CustomButton
          type="quadruple"
          value="Previous"
          width="w-64"
          onClick={handlePrev}
        />
        <label htmlFor="form-4" className="btn w-64">
          Next
        </label>
      </div>
    </>
  );
};

export default AddMeetingPoint;