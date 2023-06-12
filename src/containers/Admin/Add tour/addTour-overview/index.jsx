import { Controller, useForm } from "react-hook-form";

import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";
import OverviewData from "../../../../containers/Admin/Add tour/Overview";
import CustomSelection from "../../../../components/Admin/customSelection";

const packagee = [
  { value: "mm", label: "mm" },
  { value: "aaa", label: "aa" },
  { value: "sa", label: "sa" },
];
const category = [
  { value: "mm1", label: "mm1" },
  { value: "aaa2", label: "aa2" },
  { value: "sa3", label: "sa3" },
];

const meals = [{ value: "mm21", label: "mm21" }];

const AddOverview = ({}) => {
  const { formData, onhandleSubmit } = useAddTourFormContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });

  return (
    <>
      <div className="rounded-2xl shadow-md p-10">
        <h2 className=" font-semibold text-4xl">Create your own tour </h2>
        <p className="mt-4 capitalize">please fill the information below </p>
        <h2 className="text-2xl mb-6 font-medium md:mt-8 mt-32">
          Tour Information
        </h2>
        <form onSubmit={handleSubmit(onhandleSubmit)}>
          <div className="grid lg:grid-cols-12 lg:grid-flow-row auto-rows-max w-full gap-10 h-fill md:mt-8 mt-32">
            <div className="col-span-12 lg:col-span-6 gap-3">
              <OverviewData
                onhandleSubmit={onhandleSubmit}
                register={register}
                errors={errors}
                control={control}
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Controller
                name="description"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Description is required",
                  },
                }}
                render={({ field }) => (
                  <>
                    <label htmlFor="description" className=" block">
                      Write description for your tour:
                    </label>

                    <textarea
                      className=" border-[1px] border-black w-full rounded-lg focus:border-black focus-visible:border-black"
                      {...field}
                      id="description"
                      name="description"
                      rows="4"
                      cols="50"
                    ></textarea>
                    {errors.description && (
                      <p className="text-tertiary-red mt-1 mb-6">
                        {errors.description.message}
                      </p>
                    )}
                  </>
                )}
              />

              <Controller
                name="include"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Package include is required",
                  },
                }}
                render={({ field }) => (
                  <>
                    <CustomSelection
                      mode="multiple"
                      options={packagee}
                      placeHolder="Please pick what your package tour include"
                      span="Package tour include :"
                      {...field}
                    />
                    {errors.include && (
                      <p className="text-tertiary-red mt-1 ">
                        {errors.include.message}
                      </p>
                    )}
                  </>
                )}
              />

              <Controller
                name="category"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Tour activites is required",
                  },
                }}
                render={({ field }) => (
                  <>
                    <CustomSelection
                      mode="multiple"
                      options={category}
                      placeHolder="Please pick tour activites"
                      span="Tour activites :"
                      {...field}
                    />
                    {errors.category && (
                      <p className="text-tertiary-red mt-1 ">
                        {errors.category.message}
                      </p>
                    )}
                  </>
                )}
              />

              <Controller
                name="meals"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Meals is required",
                  },
                }}
                render={({ field }) => (
                  <>
                    <CustomSelection
                      mode="multiple"
                      options={meals}
                      placeHolder="Please pick meals included in tours"
                      span="Meals included :"
                      {...field}
                    />
                    {errors.meals && (
                      <p className="text-tertiary-red mt-1">
                        {errors.meals.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <input type="submit" id="form-1" className="hidden" />
        </form>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-end mt-10 mb-10 gap-5">
        <label htmlFor="form-1" className="btn w-64">
          Next
        </label>
      </div>
    </>
  );
};

export default AddOverview;
