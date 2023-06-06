import OverviewData from "../../../../containers/Admin/Add tour/Overview";
import Package from "../../../../containers/Admin/Add tour/Package";
import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";

const AddOverview = ({ onhandleSubmit, ref }) => {
  return (
    <>
      <div className="rounded-2xl shadow-md p-10">
        <h2 className=" font-semibold text-4xl">Create your own tour </h2>
        <p className="mt-4 capitalize">please fill the information below </p>

        <div className="grid lg:grid-cols-6 lg:grid-flow-row auto-rows-max w-full  gap-5 h-fill md:mt-8 mt-32">
          <div className="col-span-6 lg:col-span-3">
            <OverviewData onhandleSubmit={onhandleSubmit}/>
          </div>
          <div className="col-span-6 lg:col-span-3 pl-10">
            <Package />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOverview;
