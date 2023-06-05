import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";

import Header from "../../containers/UserProfile/Header";
import ProfileTabs from "../../containers/UserProfile/ProfileTabs";

import CustomInput from "./../../components/shared/FormComponents/CustomInput/index";
import CustomButton from "../../components/shared/CustomButton";

import useUploadImage from "./../../hooks/useUploadImage";

import Icon from "../../utils/icons";
import UserImage from "../../assets/images/UserProfile/userprofile.png";

const UserProfile = () => {
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
      <Header />
      <ProfileTabs showModal={showModal} />

      <Modal
        title="Edit Your Profile"
        open={openModal}
        onCancel={handleCancel}
        footer={null}
        centered
        bodyStyle={{ height: 400, overflow: "auto" }}
      >
        <form onSubmit={handleSubmit(editProfileHandler)}>
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

          <div className="mt-[75px]">
            <CustomInput
              edit
              type="text"
              name="username"
              label="Username"
              register={register}
              rule="username"
              errors={errors}
            />
            <CustomInput
              edit
              type="number"
              name="phone"
              label="Phone Number"
              register={register}
              rule="phone_Num"
              errors={errors}
            />
            <CustomInput
              edit
              type="text"
              name="city"
              label="City"
              register={register}
              rule="city"
              errors={errors}
            />
            <textarea
              {...register("bio")}
              className="textarea border-black px-2.5 py-4 2xs:text-sm 2xl:text-lg w-full resize-none focus:outline-none"
              placeholder="Write something about yourself"
              name="bio"
            ></textarea>
            <div className="flex justify-end gap-2">
              <CustomButton
                onClick={handleCancel}
                type="quadruple"
                value="Cancel"
              />
              <CustomButton
                submit="submit"
                type="secondary"
                value="Save"
                isLoading={loading}
              />
            </div>
          </div>
        </form>
      </Modal>

      <Modal
        title={
          <span className="2xs:text-base md:text-lg 2xl:text-xl">
            Are you sure you want to delete this item?
          </span>
        }
        open={openDeleteModal}
        onCancel={handleDeleteCancel}
        footer={null}
        centered
      >
        <p className="2xs:text-sm sm:text-base 2xl:text-lg">
          This will delete the item permanently
        </p>
        <div className="flex justify-end gap-2 mt-5">
          <button
            onClick={handleDeleteCancel}
            className="2xs:text-sm md:text-base 2xl:text-lg normal-case btn bg-transparent h-[2.5rem] min-h-[2.5rem] border border-solid border-black text-black py-1 px-2 rounded-lg hover:bg-black hover:text-white transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleOk}
            className={` ${
              loading ? "loading" : ""
            } font-semibold 2xs:text-base md:text-lg 2xl:text-xl normal-case btn bg-transparent h-[2.5rem] min-h-[2.5rem] border border-solid border-tertiary-red text-tertiary-red py-1 px-3 rounded-lg hover:bg-tertiary-red hover:border-tertiary-red hover:text-white transition duration-300`}
          >
            Yes
          </button>
        </div>
      </Modal>
    </>
  );
};

export default UserProfile;
