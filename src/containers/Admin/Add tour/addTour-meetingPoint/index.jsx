import CustomMap from "../../../../components/shared/Map";
import CustomInput from "../../../../components/shared/FormComponents/CustomInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";

const AddMeetingPoint = () => {
  const [coordinates, setCoordinates] = useState({});
  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

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
      <div className="rounded-2xl shadow-md p-10">
        <h3 className="text-3xl font-medium">Pick the meeting point</h3>

        <div className="  flex justify-center items-center flex-col">
          <div className=" w-3/5 h-[60vh] mt-10 rounded-2xl">
            <CustomMap setLocation={setCoordinates} />
          </div>
          {/* setLocation = () => {}, */}

          <form
            onSubmit={handleSubmit(registerHandler)}
            className=" w-3/5 flex flex-col justify-center space-y-2 mt-10"
          >
            <CustomInput
              type="text"
              name="Description"
              label="Description"
              rule="Description"
              register={register}
              errors={errors}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMeetingPoint;
