import moment from "moment";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTour } from "../services/useTour";
import { request } from "../services/axios";

import dayjs from "dayjs";
const AddTourFormContext = createContext({});

const step2DefaultValues = {
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

export const AddTourFormProvider = ({ children }) => {
  // ------------- state -------------
  const [formData, setFormData] = useState({
    dress_code: "No dress code",
    plan: null,
  });
  const [step, setStep] = useState(1);
  const [publish, setPublish] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const { tourID } = useParams();
  console.log(tourID);
  //custom hook
  const { addTourMutation, updateTourByIdMutation } = useTour();

  const { mutate: addMutate, isLoading: isAddTourLoading } = addTourMutation;
  const { mutate: updateMutate, isLoading: isUpdateTourLoading } =
    updateTourByIdMutation;

  // ------------- handlers -------------
  async function getTourById() {
    const { data } = await request({
      url: `/v1/tours/${tourID}`,
      method: "GET",
    });

    return data;
  }

  useEffect(() => {
    if (tourID !== "add") {
      (async () => {
        const tour = await getTourById();
        console.log(tour);
        setFormData((prev) => ({
          ...prev,
          ...tour,
          sale: tour?.sale,
          date: [dayjs(tour?.start_date), dayjs(tour?.end_date)],
          city: tour?.city?._id,
          category: tour?.category?.map((category) => category._id),
          meals: tour?.include[0]?.meals,
          package: tour?.include[0]?.package,
          plan: tour?.plan?.map((plan) => {
            console.log("plan", plan);
            return {
              ...plan,
              image_file: plan?.image,
              time: [dayjs(tour?.start_time), dayjs(tour?.end_time)],
            };
          }),
          highlight_files: tour?.highlight_photos?.map((photo) => photo),
          food_files: tour?.food_photos?.map((photo) => photo),
          meeting_description: tour?.meeting_point?.description,
          meeting_point: {
            longitude: tour?.meeting_point?.longitude,
            latitude: tour?.meeting_point?.latitude,
          },
        }));
      })();
    }
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

  let requestBody = new FormData();

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
          return formData?.plan === null
            ? step2DefaultValues
            : formData?.plan[index] === undefined
            ? step2DefaultValues
            : formData?.plan[index];
        });

      console.log("initialPlan", initialPlan);
      stepOneData = {
        ...data,
        start_date: start_date,
        end_date: end_date,
        duration: duration,
        price_per_person: +data?.price_per_person,
        person_num: +data?.person_num,
        plan: initialPlan,
        include: { package: data?.package, meals: data?.meals },
      };

      console.log("stepOneData", stepOneData);
    }
    if (step === 2) {
      const editedPlan = data?.plan.map((plan, index) => {
        return {
          ...plan,
          image_file: plan?.image_file, //image object uid //object url
          image: plan?.image_file[0]?.originFileObj,

          start_time: moment(plan?.time[0].$d).format("H:mm a"), //03:04 am
          end_time: moment(plan?.time[1].$d).format("H:mm a"), //03:04 am
          details: plan?.details.map((detail) => {
            return { ...detail, duration: +detail?.duration };
          }),
        };
      });

      stepTwoData = { ...data, plan: editedPlan };
      console.log("stepTwoDataAhmed", { ...data, plan: editedPlan });
    }

    if (step === 3) {
      const highlightFiles = data?.highlight_files
        ?.filter((photo) => {
          return photo.originFileObj;
        })
        .map((photo) => photo.originFileObj);

      const highlightUrls = data?.highlight_files
        ?.filter((photo) => {
          return photo.url;
        })
        .map((photo) => {
          return photo;
        });

      const foodFiles = data?.food_files
        ?.filter((photo) => {
          return photo.originFileObj;
        })
        .map((photo) => photo.originFileObj);
      const foodUrls = data?.food_files
        ?.filter((photo) => {
          return photo.url;
        })
        .map((photo) => {
          return photo;
        });

      console.log(
        { highlightFiles },
        { highlightUrls },

        { foodFiles },
        { foodUrls }
      );

      stepThreeData = {
        ...data,
        //display data in ant upload component
        food_files: data?.food_files, //carry files or url
        highlight_files: data?.highlight_files,
        //files if photos added
        highlightFiles: highlightFiles,
        foodFiles: foodFiles,
        //urls nothing added to the photos
        highlightUrls: highlightUrls,
        foodUrls: foodUrls,
      };

      console.log("stepThreeData", stepThreeData);
    }

    if (step === 4) {
      stepFourData = {
        ...data,
        meeting_point: {
          longitude: data.meeting_point.longitude,
          latitude: data.meeting_point.latitude,
          description: data.meeting_description,
        },
      };
      console.log(" stepFourData", stepFourData);
    }

    setFormData((prev) => ({
      ...prev,
      ...stepOneData,
      ...stepTwoData,
      ...stepThreeData,
      ...stepFourData,
    }));
  };

  console.log("formData", formData);

  const handleSaveTour = (data, btn) => {
    const removedKeys = [
      "_id",
      "date",
      "meals",
      "package",
      "highlight_photos",
      "food_photos",
      "food_files",
      "highlight_files",
      "organizer",
      "meeting_point",
      "include",
      "highlightFiles",
      "highlightUrls",
      "foodFiles",
      "foodUrls",
      "meeting_description",
      "plan",
      "category",
    ];
    // submit tour data
    //check publish - Draft
    setModalOpen(false);

    let submitData = { ...formData };
    submitData = Object.fromEntries(
      Object.entries(formData).filter(
        ([key, value]) => !removedKeys.includes(key)
      )
    );
    console.log("submitData", submitData);

    for (let key in submitData) {
      requestBody.append(key, submitData[key]);
    }

    {
      data?.highlightFiles?.length !== 0 &&
        data?.highlightFiles?.map((photo, index) => {
          requestBody.append(`highlight_photos`, photo);
        });
    }

    {
      data?.foodFiles?.length !== 0 &&
        data?.foodFiles?.map((photo, index) => {
          requestBody.append(`food_photos`, photo);
        });
    }

    data?.category?.map((item, index) => {
      requestBody.append(`category[${index}]`, item);
    });

    data?.include?.package?.map((item, index) =>
      requestBody.append(`include[package][${index}]`, item)
    );

    data?.include?.meals?.map((item, index) =>
      requestBody.append(`include[meals][${index}]`, item)
    );

    Object.entries(data?.meeting_point).map(([key, value]) =>
      requestBody.append(`meeting_point[${key}]`, value)
    );

    const finalPlan = data?.plan?.map((day, index) => {
      return {
        title: day.title,
        start_time: day.start_time,
        end_time: day.end_time,
        image: day.image,
        details: day.details,
      };
    });
    finalPlan.map((day, index) => {
      Object.entries(day).map(([key, value]) => {
        requestBody.append(`plan[${index}][${key}]`, value);
      });

      day.details.map((location, i) =>
        Object.entries(location).map(([key, value]) =>
          requestBody.append(`plan[${index}][details][${i}][${key}]`, value)
        )
      );
    });

    finalPlan.map((day, index) => {
      Object.entries(day).map(([key, value]) => {
        requestBody.delete(`plan[${index}][details]`);
        {
          day?.image?.length === 0
            ? requestBody.delete(`plan[${index}][image]`)
            : "";
        }
      });
    });
    // console.log("request body", requestBody.getAll());
    for (const [key, value] of requestBody.entries()) {
      console.log({ key, value });
    }

    try {
      if (tourID === "add") {
        addMutate(requestBody);
      } else {
        updateMutate({ id: tourID, tour: requestBody });
      }
    } catch (error) {
      console.log(error);
    }
    // handleClick();
  };

  //update
  // buttons update not save

  return (
    <AddTourFormContext.Provider
      value={{
        tourID,
        step,
        setStep,
        publish,
        setPublish,
        modalOpen,
        setModalOpen,
        progress,
        setProgress,
        isAddTourLoading,
        isUpdateTourLoading,
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
// TO DO : progress bar

//css
// TO DO :  input outline + width
// TO DO :  select on mobile

//update

//--- backend
//get tour by id

// useEffect(() => {
//   console.log(formData);
//   // To have inital stoplocation according to duration of days
//   if (editPlans) {
//     console.log("ahmed", formData.duration, formData?.plan);
//     const plan = Array(formData.duration)
//       .fill(0)
//       .map((day, index) => {
//         return {
//           plan: formData?.plan,
//         };
//       });
//     setFormData({ ...formData, plan });
//   }
// }, [editPlans]);

// useEffect(() => {

// }, [formData.duration]);

// const handleClick = () => {
//   setProgress(0);

//   const startTime = performance.now(); // record the start time of the request in millisec
//   const duration = 120000; // 2 mins

//   const intervalId = setInterval(() => {
//     const now = performance.now(); // current timestamp
//     const deltaTime = now - startTime; //subtract the start time from the current timestamp
//     const progressPercent = Math.round((deltaTime / duration) * 100);
//     setProgress(progressPercent);
//   }, 100);

//   setTimeout(() => {
//     clearInterval(intervalId);
//     setProgress(100);
//   }, duration + 100);
// };

// const editedFood_photos = data?.food_files?.map((photo) => {
//   return photo.originFileObj;
// });

// const editedHighlights_photos = data?.highlight_files?.map((photo) => {
//   return photo.originFileObj;
// });

// food_photos: editedFood_photos[0]
//   ? editedFood_photos
//   : data?.food_files,
// highlight_photos: editedHighlights_photos[0]
//   ? editedHighlights_photos
//   : data?.highlight_files,

// no edit send same array from back
// add files send files only
// delete .. same arry missing the deleted one
// delete and add ...
