import { createRef } from "react";
import { useRef } from "react";
import { createContext, useState, useEffect } from "react";

const AddTourFormContext = createContext({});

export const AddTourFormProvider = ({ children }) => {
  const nextBtn = createRef();
  console.log({nextBtn});
  const [formData, setFormData] = useState({
    title: "",
    selectGov: "",
    price: 100,
    duration: 1,
    personsNum: 1,
    description: "",
    dressCode: "",
    start_endDate: "",
    packageInclude: [],
    dayPlan: [
      // stopLocation:[],
      {
        dayTitle: "",
        start_endDate: "",
        stopLocations: [
          { stopLocation: "", stopLocationDuration: "", photo: "" },
          { stopLocation: "", stopLocationDuration: "" },
        ],
      },
      {
        dayTitle: "",
        start_endDate: "",
        stopLocation: "",
        stopLocationDuration: "",
      },
      {
        dayTitle: "",
        start_endDate: "",
        stopLocation: "",
        stopLocationDuration: "",
      },
    ],
  });

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <AddTourFormContext.Provider
      value={{
        nextBtn,
        formData,
        setFormData,
        handleChange,
      }}
    >
      {children}
    </AddTourFormContext.Provider>
  );
};

export default AddTourFormContext;
