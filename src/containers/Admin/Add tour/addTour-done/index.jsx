import { useEffect } from "react";
import { useTour } from "../../../../services/useTour";

import CustomButton from "../../../../components/shared/CustomButton";

import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";

const AddComplete = () => {
  //custom hook
  const {
    handlePrev,
    formData,
    handleSaveTour,

    isAddTourLoading,
    isUpdateTourLoading,
  } = useAddTourFormContext();
  const { progress } = useTour();

  useEffect(() => {
    console.log("percentCompleted", progress);
  }, [progress]);
  // || isUpdateTourLoading
  return (
    <>
      <div className="rounded-2xl shadow-md h-[80vh] p-10 mt-10 flex justify-center items-center flex-col  mb-10  bg-white">
        <img
          src="../../../../src/assets/images/Admin/done.png"
          alt="add toue complete image"
        />

        <p className="mt-8 capitalize text-center text-xl md:text-3xl font-medium">
          Great, you finished all the steps <br />
          save your tour now !
        </p>

        <div className="flex flex-col items-center md:flex-row md:justify-center mt-10 mb-10 gap-5">
          <CustomButton
            type="quadruple"
            value="previous"
            width="w-64"
            onClick={handlePrev}
          />
          <CustomButton
            type="secondary"
            onClick={() => handleSaveTour(formData)}
            value="Save As"
            width="w-64"
            isLoading={
              isAddTourLoading ? isAddTourLoading : isUpdateTourLoading
            }
          />
        </div>
        {/* {isAddTourLoading && (
          <div className="w-[70%]">
            <div className="flex flex-col justify-center items-center">
              <Progress percent={progress} status="active" />
              <span className=" text-lg mt-4 text-primary-green">
                This might take a while .. please wait{" "}
              </span>
            </div>
          </div>
        )} */}

        {isUpdateTourLoading ||
          (isAddTourLoading && (
            <span className=" inline-block text-lg mt-4 text-primary-green">
              This might take a while .. please wait{" "}
            </span>
          ))}
      </div>
    </>
  );
};

export default AddComplete;
