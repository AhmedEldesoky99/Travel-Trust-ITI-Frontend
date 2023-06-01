import { useForm } from "react-hook-form";

import CustomInput from "../../../../components/shared/FormComponents/CustomInput";
import CustomUploadImage from "../../../../components/Admin/uploadImage";
import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";

const StopLocationInputs = ({}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    getValues,
  } = useForm();
  const { formData, handleChange } = useAddTourFormContext();
  return (
    <>
      <div className="  mt-6">
        <div className="flex gap-4">
          <div className=" w-full mb-4">
            <CustomInput
              type="text"
              name="stopLocation"
              label="Stop Location*"
              rule="stopLocation"
              value={formData?.dayPlan?.stopLocation}
              register={register}
              errors={errors}
              onChange={handleChange}
            />
          </div>
          <div className=" w-full">
            <CustomInput
              type="number"
              name="stopLocationDuration"
              label="Duration"
              rule="stopLocationDuration"
              value={formData?.dayPlan?.stopLocationDuration}
              register={register}
              errors={errors}
              onChange={handleChange}
            />
          </div>
        </div>
        <CustomUploadImage length={1} />
      </div>
    </>
  );
};

export default StopLocationInputs;
