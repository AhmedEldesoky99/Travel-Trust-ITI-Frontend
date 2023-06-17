import moment from "moment";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTour } from "../services/useTour";
import { request } from "../services/axios";

const AddTourFormContext = createContext({});

export const AddTourFormProvider = ({ children }) => {
  // ------------- state -------------
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const { tourID } = useParams();
  console.log(tourID);
  //custom hook
  const { addTourMutation, TourById } = useTour();

  const { mutate, isLoading: isAddTourLoading } = addTourMutation;

  // ------------- handlers -------------

  useEffect(() => {
    async function gettourById() {
      const { data } = await request({
        url: `/v1/tours/${tourID}`,
        method: "GET",
      });
      setFormData({
        ...data,
        city: [data.city],
        // date: [moment(data.start_date), moment(data.end_date)],
        category: data?.category?.map((category) => {
          return category.name;
        }),
      });
    }

    if (tourID !== "add") gettourById();
  }, []);

  console.log("formData", formData);
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

      //To calculate duration of days from date range picker
      const startdate = moment(start_date); //moment object
      const enddate = moment(end_date);

      let duration = enddate.diff(startdate, "days");

      //To have inital stoplocation according to duration of days
      const initialPlan = Array(duration)
        .fill(0)
        .map((day, index) => {
          // console.log(index);
          // console.log(formData); //{}
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

      stepOneData = {
        ...data,
        start_date: start_date,
        end_date: end_date,
        duration: duration,
        price_per_person: +data.price_per_person,
        person_num: +data.person_num,
        plan: initialPlan,
        city: data.city[0],
      };

      console.log("stepOneData", stepOneData);

      //   {
      //     title: "" || formData?.plan?.[index]?.title,
      //     start_time: formData?.plan?.[index].start_time || "",
      //     end_time: formData?.plan[index].end_time || "",
      //     time: formData?.plan[index].time || "",
      //     image_file: formData?.plan[index]?.image_file || [],
      //     details: formData?.plan[index].details.map((detail, i) => {
      //       console.log("detail", detail);
      //       return {
      //         stop_location: detail.stop_location || "",
      //         duration: detail.duration || "",
      //       };
      //     }),
    }
    if (step === 2) {
      const editedPlan = data?.plan.map((plan, index) => {
        return {
          ...plan,
          image_file: plan.image_file, //image object uid
          image: plan.image_file[0].originFileObj, // File
          start_time: moment(plan.time[0].$d).format("H:mm a"), //03:04 am
          end_time: moment(plan.time[1].$d).format("H:mm a"), //03:04 am
          details: plan.details.map((detail) => {
            return { ...detail, duration: +detail.duration };
          }),
        };
      });

      stepTwoData = { ...data, plan: editedPlan };
      console.log("stepTwoData", { ...data, plan: editedPlan });
    }

    if (step === 3) {
      const editedFood_photos = data?.food_files.map((photo) => {
        return photo.originFileObj;
      });
      const editedHighlights_photos = data?.highlight_files.map((photo) => {
        return photo.originFileObj;
      });
      stepThreeData = {
        ...data,
        food_files: data.food_files,
        highlight_files: data.highlight_files,
        food_photos: editedFood_photos,
        highlight_photos: editedHighlights_photos,
      };
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

  const handleClick = () => {
    setProgress(0);

    const startTime = performance.now(); // record the start time of the request in millisec
    const duration = 120000; // 2 mins

    const intervalId = setInterval(() => {
      const now = performance.now(); // current timestamp
      const deltaTime = now - startTime; //subtract the start time from the current timestamp
      const progressPercent = Math.round((deltaTime / duration) * 100);
      setProgress(progressPercent);
    }, 100);

    setTimeout(() => {
      clearInterval(intervalId);
      setProgress(100);
    }, duration + 100);
  };

  const handleSaveTour = (data, btn) => {
    // submit tour data
    //check publish - Draft
    setModalOpen(false);

    let touredit = {
      ...data,
      publish: btn === "publish" ? true : false,
      include: [...data.include, ...data.meals],
    };
    // console.log({ touredit });
    // try {
    //   if (tourID === "add") {
    //     mutate(touredit);
    //   } else {
    //     //  handleEdit();
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    mutate(touredit);
    handleClick();

    // const { data: tour } = TourById(tourID);
    // console.log("tour", tour);
  };

  //update
  // setformdata with tourby id
  //params change titles
  // buttons update not save
  // toggle button for  publish and draft

  return (
    <AddTourFormContext.Provider
      value={{
        tourID,
        step,
        setStep,
        modalOpen,
        setModalOpen,
        progress,
        setProgress,
        isAddTourLoading,
        handleNext,
        handlePrev,
        formData,
        setFormData,
        onhandleSubmit,
        handleSaveTour,
      }}
    >
      {children}
    </AddTourFormContext.Provider>
  );
};

export default AddTourFormContext;

//add

// TO DO : modal on save "as a draft - publish"
// TO DO : skeleton loader
// TO DO : progress bar

//css
// TO DO :  responsive map
// TO DO :  input outline + width
// TO DO :  select on mobile

//update

//--- backend
//get tour by id
