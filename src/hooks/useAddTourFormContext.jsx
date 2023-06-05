import { useContext } from "react";
import AddTourFormContext from "../context/AddTourFormContext.jsx";

const useAddTourFormContext = () => {
  return useContext(AddTourFormContext);
};

export default useAddTourFormContext;
