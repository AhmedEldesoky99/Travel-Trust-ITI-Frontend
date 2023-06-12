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
                className="flex items-center content-start gap-4 mb-4"
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
                <div>
                  <CustomButton
                    type="primary"
                    value="-"
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
