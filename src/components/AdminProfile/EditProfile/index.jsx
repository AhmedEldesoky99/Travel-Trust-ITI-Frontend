/* eslint-disable no-unused-vars */
import UploadCoverImg from "./Upload/Cover";
import UploadProfileImg from "./Upload/Profile";
import CustomButton from "../../shared/CustomButton/index";
import CustomInput from "../../shared/FormComponents/CustomInput";
import useUploadImage from "../../../hooks/useUploadImage";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "antd";
import Icon from "../../../utils/icons";
import UserImage from "../../../assets/images/UserProfile/userprofile.png";
import "./style.css";
import { useQuery } from "react-query";
import { getTopDestinations } from "../../../services/Home";
import CustomSelection from "../../Admin/customSelection";
import { useUser } from "../../../services/user";

const languages = [
  { value: "Arabic", label: "Arabic" },
  { value: "English", label: "English" },
  { value: "French", label: "French" },
  { value: "Germany", label: "Germany" },
  { value: "Italy", label: "Italy" },
];

const EditProfile = () => {
  //----------- states -----------
  const [admin, setAdmin] = useState();

  //custom hooks
  //useform
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  //upload
  const {
    userImageUrl,
    userCoverUrl,
    userImageRef,
    userCoverRef,
    handleButtonClick,
    onImageChange,
  } = useUploadImage();

  //----------- handlers -----------
  // const { data: cities } = useQuery("TopDestinations", getTopDestinations);
  const { updateProfileMutation } = useUser();

  const { mutate } = updateProfileMutation;

  const editProfileHandler = (data) => {
    console.log(data);

    // call Api
    //update user
    mutate(data);
    // setLoading(false);
    // setOpenModal(false);
  };

  // const citiesOptions = cities?.data?.map((city) => {
  //   return { value: city._id, label: city.title };
  // });
  return (
    <>
      <div className="md:max-w-[973px] md:w-screen flex items-stretch">
        <form
          onSubmit={handleSubmit(editProfileHandler)}
          className=" gap-4  flex flex-col max-w-[973px] w-screen"
        >
          <div
            className={`relative hero place-items-start min-h-[10rem] mb-20 ${
              !userCoverUrl ? "bg-lighter-gray" : ""
            }`}
            style={{
              backgroundImage: `url(${userCoverUrl})`,
            }}
          >
            <div className="h-full w-full flex justify-center items-center">
              <div>
                <input
                  {...register("user-cover")}
                  id="coverImage"
                  className="hidden"
                  type="file"
                  accept="image/*"
                  name="user-cover"
                  onChange={(e) => onImageChange(e, "userCover")}
                />
                <Button
                  icon={<Icon name="addImage" />}
                  onClick={() => handleButtonClick("coverBtn")}
                  className="my-custom-btn flex justify-center items-center gap-2 border-none shadow-none"
                >
                  <span className="2xs:text-sm sm:text-base 2xl:text-xl">
                    Add cover photo
                  </span>
                </Button>
              </div>
            </div>

            <div className="absolute bottom-0 left-[5%] avatar translate-y-1/2">
              <div className="relative w-24 rounded-full border-2 border-solid border-white">
                <img
                  className="object-cover"
                  src={userImageUrl ? userImageUrl : UserImage}
                />
              </div>
              <input
                {...register("user-image")}
                id="profileImage"
                className="hidden"
                type="file"
                accept="image/*"
                name="user-image"
                onChange={(e) => onImageChange(e, "userImage")}
              />
              <Button
                icon={<Icon name="camera" />}
                onClick={() => handleButtonClick("imgBtn")}
                className="my-custom-btn absolute bottom-0 right-0 translate-y-1/4 flex justify-center items-center bg-white p-4 rounded-full"
              ></Button>
            </div>
          </div>

          <div className="px-20 pb-[60px] flex flex-col gap-4">
            <div className="flex md:flex-row 2xs:flex-col w-full md:gap-5 justify-between">
              <div className="w-full">
                <CustomInput
                  type="text"
                  name="username"
                  label="Name"
                  rule="username"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="w-full">
                <CustomInput
                  type="text"
                  name="job"
                  label="Job"
                  rule="job"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex md:flex-row 2xs:flex-col w-full md:gap-5 justify-between">
              <div className="w-full">
                {/* <Controller
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
                        mode=""
                        options={citiesOptions}
                        placeHolder="Please select governorate"
                        {...field}
                      />
                      {errors.city && (
                        <p className="text-tertiary-red mt-1">
                          {errors.city.message}
                        </p>
                      )}
                    </>
                  )}
                /> */}
              </div>
            </div>

            <div className="w-full">
              <CustomInput
                type="text"
                name="phone"
                label="Phone number"
                rule="firstName"
                register={register}
                errors={errors}
              />
            </div>

            <Controller
              name="bio"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Description is required",
                },
              }}
              render={({ field }) => (
                <>
                  {/* <label htmlFor="description" className=" block text-lg mb-2 ">
                    Write description for your tour:
                  </label> */}

                  <textarea
                    className=" p-4 border-[1px] border-black w-full rounded-lg focus-visible:border-black invalid:border-tertiary-red "
                    {...field}
                    id="description"
                    name="description"
                    placeHolder="write something about yourself"
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
              name="languages"
              control={control}
              // rules={{
              //   required: {
              //     value: true,
              //     message: "Meals is required",
              //   },
              // }}
              render={({ field }) => (
                <>
                  <CustomSelection
                    mode="multiple"
                    options={languages}
                    placeHolder="Please pick languages"
                    span="languages  :"
                    {...field}
                  />
                  {errors.languages && (
                    <p className="text-tertiary-red mt-1">
                      {errors.languages.message}
                    </p>
                  )}
                </>
              )}
            />

            {/* <Controller
              name="governorate_expertise"
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
                    mode="multiple"
                    options={citiesOptions}
                    placeHolder="Select your governorate expertise"
                    {...field}
                  />
                  {errors.governorate_expertise && (
                    <p className="text-tertiary-red mt-1">
                      {errors.governorate_expertise.message}
                    </p>
                  )}
                </>
              )}
            /> */}

            <div className="w-full flex md:justify-end 2xs:justify-center gap-5 mt-8">
              <CustomButton
                value="Cancel"
                type="quadruple"
                width="max-w-[142px] w-full h-full"
              />
              <CustomButton
                value="Submit"
                type="secondary"
                width="max-w-[142px] w-full h-full"
                // onClick={editProfileHandler}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
