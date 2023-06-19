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
import "./style.css";

const EditProfile = () => {
  // ------- hooks --------
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { userImageUrl, userCoverUrl, onImageChange } = useUploadImage();

  // --------- States -----------
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // --------- Handlers -----------
  const showModal = (type) => {
    type === "delete" ? setOpenDeleteModal(true) : setOpenModal(true);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleDeleteCancel = () => {
    setOpenDeleteModal(false);
  };

  const handleOk = () => {
    setLoading(true);
    //Call Api
    // setLoading(false);
    // setOpenDeleteModal(false);
  };

  const editProfileHandler = (data) => {
    console.log(data);
    setLoading(true);
    // call Api
    // setLoading(false);
    // setOpenModal(false);
  };
  return (
    <>
      <div className="md:max-w-[973px] md:w-screen flex items-stretch">
        <form
          onSubmit={handleSubmit(editProfileHandler)}
          className=" gap-16  flex flex-col max-w-[973px] w-screen"
        >
          <div
            className={`relative hero place-items-start min-h-[10rem] bg-cover bg-center ${
              !userCoverUrl ? "bg-lighter-gray" : ""
            }`}
            style={{
              backgroundImage: `url(${userCoverUrl})`,
            }}
          >
            <div className="h-full w-full flex justify-center items-center">
              <div>
                <input
                  {...register("user-cover", {
                    onChange: (e) => onImageChange(e, "userCover"),
                  })}
                  id="coverImage"
                  className="hidden"
                  type="file"
                  accept="image/*"
                  name="user-cover"
                />
                <label
                  htmlFor="coverImage"
                  className="cursor-pointer flex justify-center items-center gap-2 hover:text-primary-green transition duration-300"
                >
                  <Icon name="addImage" />
                  <span className="2xs:text-sm sm:text-base 2xl:text-xl">
                    Add cover photo
                  </span>
                </label>
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
                {...register("user-image", {
                  onChange: (e) => onImageChange(e, "userImage"),
                })}
                id="profileImage"
                className="hidden"
                type="file"
                accept="image/*"
                name="user-image"
              />
              <label
                htmlFor="profileImage"
                className="cursor-pointer absolute bottom-0 right-0 translate-y-1/4 bg-white p-2 shadow-md rounded-full hover:text-primary-green transition duration-300"
              >
                <Icon name="camera" />
              </label>
            </div>
          </div>

          <div className="px-20 pb-[60px] flex flex-col gap-4">
            <div className="flex md:flex-row 2xs:flex-col w-full md:gap-5 justify-between">
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
            <div className="flex md:flex-row 2xs:flex-col w-full md:gap-5 justify-between">
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
            <div className="flex md:flex-row 2xs:flex-col w-full md:gap-5 justify-between">
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
            <textarea
              {...register("bio")}
              className="textarea border-black px-2.5 py-4 2xs:text-sm 2xl:text-lg w-full resize-none focus:outline-none"
              placeholder="Write something about yourself"
              name="bio"
            ></textarea>
            </div>
            <div className="flex md:flex-row 2xs:flex-col w-full md:gap-5 justify-between">
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
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
