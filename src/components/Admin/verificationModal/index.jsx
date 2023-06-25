import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import CustomButton from "../../shared/CustomButton";
import CustomUploadImage from "../uploadImage";

import { uploadIdentityMutation } from "../../../services/mainAdmin";

const VerificationModal = ({ handleCancel }) => {
  const [error, setError] = useState();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = uploadIdentityMutation();

  let formData = new FormData();
  //
  const uploadIdHandler = (data) => {
    console.log("photos", data);
    if (data.front[0].originFileObj.name === data.back[0].originFileObj.name) {
      setError("Please pick 2 different photos .. a front and back ID ");
      return;
    }
    const uplaodForm = {
      front_civil_photo: data.front[0].originFileObj,
      back_civil_photo: data.back[0].originFileObj,
    };
    console.log({ uplaodForm });

    Object.entries(uplaodForm).map(([key, value]) =>
      formData.append(`${key}`, value)
    );

    // // call Api
    mutate(formData);
    handleCancel("verify");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(uploadIdHandler)}
        className=" gap-16  flex flex-col max-w-[850px] w-screen"
      >
        <div className="flex flex-col justify-center items-center gap-4 ">
          <h3 className=" text-2xl font-bold">Verification Form</h3>
          <p className=" text-center text-xl w-[80%]">
            To access our services, we require a 
            <span className="p-4 text-primary-green font-semibold">
               valid identification card
            </span>
            for identity verification.
          </p>
          <p className=" text-center text-gray-500 text-base w-[80%]">
            (Please upload a clear image of your government-issued ID such as a
            driver's license, passport, or national ID card.)
          </p>

          <div className="flex flex-col justify-center items-center gap-4 rounded-2xl shadow-md p-10 w-[80%] mt-10">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <Controller
                name={`front`}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "front Id card photo is required",
                  },
                }}
                render={({ field }) => (
                  <>
                    <div className="flex justify-center items-center flex-col">
                      <div className="flex justify-center items-center flex-col">
                        <CustomUploadImage
                          length={0}
                          fileList={field.value}
                          setFileList={field.onChange}
                          // {...field}
                        />
                        <span className="block mb-4">
                          (Upload your front Id card photo)
                        </span>
                      </div>
                      {errors?.front && (
                        <p className="text-tertiary-red mt-1 ">
                          {errors?.front.message}
                        </p>
                      )}
                    </div>
                  </>
                )}
              />

              <Controller
                name={`back`}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Back Id card photo is required",
                  },
                }}
                render={({ field }) => (
                  <>
                    <div className="flex justify-center items-center flex-col">
                      <div className="flex justify-center items-center flex-col">
                        <CustomUploadImage
                          length={0}
                          fileList={field.value}
                          setFileList={field.onChange}
                          // {...field}
                        />
                        <span className="block mb-4">
                          (Upload your back Id card photo)
                        </span>
                      </div>
                      {errors?.back && (
                        <p className="text-tertiary-red mt-1 ">
                          {errors?.back.message}
                        </p>
                      )}
                    </div>
                  </>
                )}
              />
            </div>
            {error && <p className="text-tertiary-red mt-1">{error}</p>}
          </div>
          <p>
            We take your privacy and security seriously and will only use the
            information for verification purposes.
          </p>
        </div>
        <div className="w-full flex md:justify-end 2xs:justify-center gap-5 mt-8">
          {/* <CustomButton
                value="Cancel"
                type="quadruple"
                width="max-w-[142px] w-full h-full"
                onClick={handleCancel}
              /> */}
          <CustomButton
            value="Submit"
            submit="submit"
            type="secondary"
            width="max-w-[142px] w-full h-full"
            isLoading={isLoading}
          />
        </div>
      </form>
    </>
  );
};

export default VerificationModal;
