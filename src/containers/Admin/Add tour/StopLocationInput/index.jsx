import CustomButton from "../../../../components/shared/CustomButton";
import CustomInput from "../../../../components/shared/FormComponents/CustomInput";

const StopLocationInputs = ({
  register,
  errors,
  fields,
  remove,
  nestedIndex,
}) => {
  return (
    <>
      <div className="  mt-6">
        <ul>
          {fields.map((field, index) => {
            return (
              <li
                className="flex flex-col gap-2 lg:flex-row lg:items-center lg:content-start lg:gap-4 mb-10 lg:mb-4"
                key={field.id}
              >
                <div className="w-full">
                  <CustomInput
                    type="text"
                    name={`plan.${nestedIndex}.details.${index}.stop_location`}
                    label="Stop Location*"
                    rule="stop_location"
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    type="number"
                    name={`plan.${nestedIndex}.details.${index}.duration`}
                    label="Duration"
                    rule="duration"
                    register={register}
                    errors={errors}
                  />{" "}
                </div>
                <div className="w-full lg:w-auto">
                  <CustomButton
                    type="delete"
                    value="-"
                    width="w-full"
                    onClick={() => remove(index)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default StopLocationInputs;
