import DayInputs from "../../../../containers/Admin/Add tour/DayInputs";
import Categories from "../../../../containers/Admin/Add tour/Categories";
import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";
import { useForm } from "react-hook-form";

const AddPlan = ({onhandleSubmit}) => {
  const { formData } = useAddTourFormContext();
  const { handleSubmit } = useForm();

  return (
    <>
      <div className="rounded-2xl shadow-md p-10">
        <h2 className="text-3xl font-medium">Customize Your Plan</h2>{" "}
        <form onSubmit={handleSubmit(onhandleSubmit)} className="">
          <div className="grid lg:grid-cols-6 lg:grid-flow-row auto-rows-max w-full  gap-5 h-fill md:mt-8 mt-32">
            <div className="col-span-6 lg:col-span-3">
              {Array(+formData?.duration)
                .fill(0)
                .map((day, i) => (
                  <DayInputs key={i} dayNum={i + 1} />
                ))}
            </div>
            <div className="col-span-6 lg:col-span-3 pl-10">
              <Categories />
            </div>
            <button type="submit" className="">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPlan;
