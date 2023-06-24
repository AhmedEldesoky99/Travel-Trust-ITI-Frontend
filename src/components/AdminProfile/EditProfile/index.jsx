/* eslint-disable no-unused-vars */
import { Controller, useForm } from "react-hook-form";

import CustomButton from "../../shared/CustomButton/index";
import CustomInput from "../../shared/FormComponents/CustomInput";
import CustomSelection from "../../Admin/customSelection";

import { useQuery } from "react-query";
import useUploadImage from "../../../hooks/useUploadImage";
import { getTopDestinations } from "../../../services/Home";
import { useUser } from "../../../services/user";

import UserImage from "../../../assets/images/UserProfile/userprofile.png";
import Icon from "../../../utils/icons";
import "./style.css";
const languages = [
  { value: "Arabic", label: "Arabic" },
  { value: "English", label: "English" },
  { value: "French", label: "French" },
  { value: "Germany", label: "Germany" },
  { value: "Italy", label: "Italy" },
];

const EditProfile = ({ admin, handleCancel, setIsModalOpen }) => {
  // ------- hooks --------
  console.log("admin jj", admin?.data);

  const {
    userImageUrl,
    userCoverUrl,
    userImageRef,
    userCoverRef,
    handleButtonClick,
    onImageChange,
  } = useUploadImage();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: admin?.data?.user?.username,
      job_profile: admin?.data?.user?.job_profile,
      city: admin?.data?.user?.city?._id,
      phone: admin?.data?.user?.phone,
      bio: admin?.data?.user?.bio,
      languages: admin?.data?.user?.languages,
      governorate_expertise: admin?.data?.user?.governorate_expertise?.map(
        (gov) => gov._id
      ),
    },
  });

  //----------- handlers -----------
  const { data: cities } = useQuery("TopDestinations", getTopDestinations);

  const { updateProfileMutation } = useUser();
  const { mutate, isLoading } = updateProfileMutation();

  let requestBody = new FormData();
  const editProfileHandler = (data) => {
    console.log("data bb", data);
    const removedKeys = [
      "languages",
      "governorate_expertise",
      "userCover",
      "userImage",
      "userCoverUrl",
      "userImageUrl",
      !data?.userImage[0] ? "photo" : "",
      !data?.userCover[0] ? "cover_photo" : "",
    ];

    let submitData = {
      ...data,
      photo: data?.userImage[0],
      cover_photo: data?.userCover[0],
    };

    console.log({ submitData });
    submitData = Object.fromEntries(
      Object.entries(submitData).filter(
        ([key, value]) => !removedKeys.includes(key)
      )
    );
    console.log("after", { submitData });

    for (let key in submitData) {
      requestBody.append(key, submitData[key]);
    }

    data?.languages?.map((item, index) =>
      requestBody.append(`languages[${index}]`, item)
    );
    data?.governorate_expertise?.map((item, index) =>
      requestBody.append(`governorate_expertise[${index}]`, item)
    );

    // call Api
    mutate(requestBody);
    if (!isLoading) setIsModalOpen(false);
  };

  const citiesOptions = cities?.data?.map((city) => {
    return { value: city._id, label: city.title };
  });
  return (
    <>
      <div className="md:max-w-[973px] md:w-screen flex items-stretch">
        <form
          onSubmit={handleSubmit(editProfileHandler)}
          className=" gap-16  flex flex-col max-w-[973px] w-screen"
        >
          <div
            className={`relative hero place-items-start min-h-[10rem] bg-cover bg-center mt-4 ${
              !admin?.data?.user?.cover_photo[0]?.url ? "bg-lighter-gray" : ""
            }`}
            style={{
              backgroundImage: `url(${
                userCoverUrl || admin?.data?.user?.cover_photo[0]?.url
              })`,
            }}
          >
            <div className="h-full w-full flex justify-center items-center">
              <div>
                <input
                  {...register("userCover", {
                    onChange: (e) => onImageChange(e, "userCover"),
                  })}
                  id="coverImage"
                  className="hidden"
                  type="file"
                  accept="image/*"
                  name="userCover"
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
                  src={userImageUrl || admin?.data?.user?.photo[0]?.url}
                />
              </div>
              <input
                {...register("userImage", {
                  onChange: (e) => onImageChange(e, "userImage"),
                })}
                id="profileImage"
                className="hidden"
                type="file"
                accept="image/*"
                name="userImage"
              />
              <label
                htmlFor="profileImage"
                className="cursor-pointer absolute bottom-0 right-0 translate-y-1/4 bg-white p-2 shadow-md rounded-full hover:text-primary-green transition duration-300"
              >
                <Icon name="camera" />
              </label>
            </div>
          </div>

          <div className="px-20 mt-4 pb-[60px] flex flex-col gap-4">
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
                  name="job_profile"
                  label="Job"
                  rule="job_profile"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex md:flex-row 2xs:flex-col w-full md:gap-5 justify-between">
              <div className="w-full">
                <Controller
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
                />
              </div>
            </div>

            <div className="w-full">
              <CustomInput
                type="number"
                name="phone"
                label="Phone number"
                rule="phone_Num"
                register={register}
                errors={errors}
              />
            </div>

            <Controller
              name="bio"
              control={control}
              render={({ field }) => (
                <>
                  <label htmlFor="bio" className=" block text-lg mb-2 ">
                    Write something about yourself:
                  </label>
                  <textarea
                    className=" p-4 border-[1px] border-black w-full rounded-lg focus-visible:border-black invalid:border-tertiary-red "
                    {...field}
                    id="bio"
                    name="bio"
                    placeholder="write something about yourself"
                    rows="4"
                    cols="50"
                  ></textarea>
                </>
              )}
            />
            <Controller
              name="languages"
              control={control}
              render={({ field }) => (
                <>
                  <CustomSelection
                    mode="multiple"
                    options={languages}
                    placeHolder="Please pick languages"
                    span="languages  :"
                    {...field}
                  />
                </>
              )}
            />

            <Controller
              name="governorate_expertise"
              control={control}
              render={({ field }) => (
                <>
                  <CustomSelection
                    mode="multiple"
                    options={citiesOptions}
                    placeHolder="Select your governorate expertise"
                    span="Governorate Expertise  :"
                    {...field}
                  />
                </>
              )}
            />

            <div className="w-full flex md:justify-end 2xs:justify-center gap-5 mt-8">
              {/* <CustomButton
                value="Cancel"
                type="quadruple"
                width="max-w-[142px] w-full h-full"
                onClick={handleCancel}
              /> */}
              <CustomButton
                value="Save"
                submit="Submit"
                type="secondary"
                width="max-w-[142px] w-full h-full"
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
