/* eslint-disable no-unused-vars */
import UploadCoverImg from "./Upload/Cover";
import UploadProfileImg from "./Upload/Profile";
import CustomButton from "../../shared/CustomButton/index";
import CustomInput from "../../shared/FormComponents/CustomInput";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    getValues,
  } = useForm();
  const registerHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="max-w-[973px] w-screen">
        <div className="flex flex-col max-w-[973px] max-h-[210px] w-screen h-screen bg-[#D9D9D9] justify-center">
            <div className="mx-auto">
                <UploadCoverImg />
            </div>
        </div>  
        <div className="flex items-center bg-[#D9D9D9] rounded-full p-2 max-w-[121px] max-h-[121px]">
            <div className="mx-auto">
                <UploadProfileImg />
            </div>
        </div>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="p-16 gap-4  flex flex-col max-w-[973px] w-screen"
        >
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
          <div className="w-full flex justify-end mt-9">
            <CustomButton
              value="Cancel"
              type="quadruple"
              width="max-w-[263px] w-full h-full"
            />
            <CustomButton
              value="Submit"
              type="secondary"
              width="max-w-[263px] w-full h-full"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
