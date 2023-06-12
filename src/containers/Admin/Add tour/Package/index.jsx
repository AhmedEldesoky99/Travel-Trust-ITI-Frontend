import { useForm } from "react-hook-form";
import CustomCheckBox from "../../../../components/shared/Admin/Checkbox";
import React from "react";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

const Package = ({ register, errors }) => {
  // const validation = Yup.object().shape({
  //   chooseCb: Yup.bool().oneOf([true], "Checkbox selection is required"),
  // });
  // const optionsForm = { resolver: yupResolver(validation) };
  const packageList = [
    { value: "Enterance Fee", label: "Enterance Fee" },
    { value: "Tour Guide", label: "Tour Guide" },
    { value: "blogging", label: "Blogging" },
    { value: "reading", label: "Reading" },
  ];

  return (
    <>
      <h2 className="text-2xl mb-6 font-medium">Package</h2>
      <div className="flex flex-wrap">
        {packageList.map((item) => (
          <CustomCheckBox
            key={item.value}
            value={item.value}
            label={item.label}
            register={register}
            rule={item.value}
          />
        ))}
        {/* <CustomCheckBox  value='January' register={register}/> */}
      </div>
    </>
  );
};

export default Package;
