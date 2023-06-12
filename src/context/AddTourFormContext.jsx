import moment from "moment";
import { createContext, useState } from "react";

const AddTourFormContext = createContext({});

export const AddTourFormProvider = ({ children }) => {
  // ------------- state -------------
  const [formData, setFormData] = useState({});

  const [step, setStep] = useState(1);
  const [coordinates, setCoordinates] = useState({});

  // ------------- handlers -------------
  const handleNext = () => {
    // check if step is valied
    // some code
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onhandleSubmit = (data, _) => {
    let stepOneData, stepTwoData, stepThreeData, stepFourData;

    if (data) handleNext();
    if (step === 1) {
      const start_date = moment(data.date[0].$d).format("YYYY-MM-DD"); //2023-06-22
      const end_date = moment(data.date[1].$d).format("YYYY-MM-DD"); //2023-06-22

      const startdate = moment(start_date); //moment object
      const enddate = moment(end_date);

      let duration = enddate.diff(startdate, "days");
      const plan = Array(duration)
        .fill(0)
        .map((index) => {
          return {
            title: "",
            start_time: "",
            end_time: "",
            details: [
              {
                stop_location: "",
                duration: "",
              },
            ],
          };
        });

      // delete data["date"];
      stepOneData = {
        ...data,
        // include: [...data.include, ...data.meals],
        start_date: start_date,
        end_date: end_date,
        duration: duration,
        plan: plan,
      };

      console.log("stepOneData", stepOneData);
    }
    if (step === 2) {
      const dataTwo = data?.plan.map((plan, index) => {
        // console.log("plan", plan);
        console.log("start time", moment(plan.time[0].$d).format("HH:mm a"));
        return {
          // ...data,
          ...plan,
          start_time: moment(plan.time[0].$d).format("HH:mm a"), //03:04 am
          end_time: moment(plan.time[1].$d).format("HH:mm a"),
        };
      });

      console.log({ dataTwo });
      // console.log("finaldata", finaldata);
      // moment(data.plan[i].time[j].$d).format("HH:mm");
      //moment(plan.time[1].$d).format("HH:mm a")
      stepTwoData = data;
      console.log("stepTwoData", { ...data, plan: dataTwo });
    }

    if (step === 3) {
      stepThreeData = data;
      console.log("stepThreeData", stepThreeData);
    }

    if (step === 4) {
      stepFourData = data;
      console.log(" stepFourData", stepFourData);
    }

    setFormData({
      ...stepOneData,
      ...stepTwoData,
      ...stepThreeData,
      ...stepFourData,
    });
    console.log("formData", formData);
  };

  return (
    <AddTourFormContext.Provider
      value={{
        step,
        setStep,
        coordinates,
        setCoordinates,
        handleNext,
        handlePrev,
        formData,
        setFormData,
        onhandleSubmit,
      }}
    >
      {children}
    </AddTourFormContext.Provider>
  );
};

export default AddTourFormContext;

//add

// TO DO 4: how to collect data at the end
// TO DO 5: show validatton msg on controller
// TO DO :  when refresh pop up msg are you sure you want ... || stop refresh page
// TO DO :  modal on save "as a draft - publish"

// map photos originFileObj
// min - max 90 90

//--- backend
//get governorates
//get categories

//update

//--- backend
//get tour by id
