/* eslint-disable no-unused-vars */
import UploadCoverImg from "./Upload/Cover";
import UploadProfileImg from "./Upload/Profile";
import CustomButton from "../../shared/CustomButton/index";
import CustomInput from "../../shared/FormComponents/CustomInput";
import useUploadImage from "../../../hooks/useUploadImage";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "antd";
import Icon from "../../../utils/icons";
import UserImage from "../../../assets/images/UserProfile/userprofile.png";

const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const {
    userImageUrl,
    userCoverUrl,
    userImageRef,
    userCoverRef,
    handleButtonClick,
    onImageChange,
  } = useUploadImage();
  

  const editProfileHandler = (data) => {
    // console.log(data);
    setLoading(true);
    // call Api
    // setLoading(false);
    // setOpenModal(false);
  };
  return (
    <>
      <div className="max-w-[973px] w-screen">
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

          <div className="px-20 pb-[60px]">
            <div className="flex w-full gap-5 justify-between">
              <div className="w-full">
                <CustomInput
                  type="text"
                  name="First Name"
                  label="First Name"
                  rule="firstName"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="w-full">
                <CustomInput
                  type="text"
                  name="First Name"
                  label="First Name"
                  rule="firstName"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex w-full gap-5 justify-between">
              <div className="w-full">
                <CustomInput
                  type="text"
                  name="First Name"
                  label="First Name"
                  rule="firstName"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="w-full">
                <CustomInput
                  type="text"
                  name="First Name"
                  label="First Name"
                  rule="firstName"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex w-full gap-5 justify-between">
              <div className="w-full">
                <CustomInput
                  type="text"
                  name="First Name"
                  label="First Name"
                  rule="firstName"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="w-full">
                <CustomInput
                  type="text"
                  name="First Name"
                  label="First Name"
                  rule="firstName"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="">
              <CustomInput
                type="text"
                name="First Name"
                label="First Name"
                rule="firstName"
                register={register}
                errors={errors}
              />
            </div>
            <div className="flex w-full gap-5 justify-between">
              <div className="w-full">
                <CustomInput
                  type="text"
                  name="First Name"
                  label="First Name"
                  rule="firstName"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="w-full">
                <CustomInput
                  type="text"
                  name="First Name"
                  label="First Name"
                  rule="firstName"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="w-full flex justify-end gap-5 mt-8">
              <CustomButton
                value="Cancel"
                type="quadruple"
                width="max-w-[142px] w-full h-full"
              />
              <CustomButton
                value="Submit"
                type="secondary"
                width="max-w-[142px] w-full h-full"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
