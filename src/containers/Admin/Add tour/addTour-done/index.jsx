import CustomButton from "../../../../components/shared/CustomButton";
import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";

const AddComplete = () => {
  const { handlePrev } = useAddTourFormContext();
  return (
    <>
      <div className="rounded-2xl shadow-md p-10  mb-10">
        <div className="flex  justify-center">
          <img
            src="../../../../src/assets/images/Admin/done.png"
            alt="add toue complete image"
          />
        </div>
        <p className="mt-8 capitalize text-center text-xl md:text-3xl font-medium">
          Great, you finished all the steps and created your <br />
          customize tour
        </p>

        <div className="flex flex-col items-center md:flex-row md:justify-center mt-10 mb-10 gap-5">
          <CustomButton
            type="quadruple"
            value="previous"
            width="w-64"
            onClick={handlePrev}
          />
          <CustomButton type="secondary" value="Save As" width="w-64" />
        </div>
      </div>
    </>
  );
};

export default AddComplete;
