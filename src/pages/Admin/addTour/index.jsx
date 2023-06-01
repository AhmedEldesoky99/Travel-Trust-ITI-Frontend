import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

import NavBar from "../../../components/shared/Admin/Admin-NavBar";
import SubNavBar from "../../../components/shared/Admin/SubNavBar.jsx";
import CustomSteps from "../../../components/steps";

import AddOverview from "../../../containers/Admin/Add tour/addTour-overview";
import AddPlan from "../../../containers/Admin/Add tour/addTour-plan";
import AddComplete from "../../../containers/Admin/Add tour/addTour-done";
import AddGallery from "../../../containers/Admin/Add tour/addTour-gallery";
import AddMeetingPoint from "../../../containers/Admin/Add tour/addTour-meetingPoint";
import CustomButton from "../../../components/shared/CustomButton";

import { AddTourFormProvider } from "../../../context/AddTourFormContext";
import useAddTourFormContext from "../../../hooks/useAddTourFormContext";

import {
  CalendarOutlined,
  EnvironmentOutlined,
  LoadingOutlined,
  PictureOutlined,
  QuestionCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const items = [
  {
    step: 1,
    title: "Overview",
    status: "process",
    icon: <QuestionCircleOutlined />,
  },
  {
    step: 2,
    title: "Plan",
    status: "wait",
    icon: <CalendarOutlined />,
  },
  {
    step: 3,
    title: "Gallery",
    status: "wait",
    icon: <PictureOutlined />,
  },
  {
    step: 4,
    title: "Metting Point",
    status: "wait",
    icon: <EnvironmentOutlined />,
  },
  {
    step: 5,
    title: "Done",
    status: "wait",
    icon: <SmileOutlined />,
  },
];

const AddTourPage = () => {
  //----------- states -----------

  const [step, setStep] = useState(1);
  const [stepState, setStepState] = useState(items[0]);
  const { nextBtn, setFormData } = useAddTourFormContext();
  console.log("addtour", nextBtn);
  //----------- handlers -----------
  const handleNext = () => {
    // check if step is valied
    // some code
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };
  useEffect(() => {
    const currentStep = items.find((item) => item.step === step);
    setStepState({
      ...currentStep,
      status: "process",
      icon: (
        <LoadingOutlined
          style={{
            color: "#009EB7",
          }}
        />
      ),
    });
  }, [step]);
  const onhandleSubmit = (data) => {
    // nextBtn.current.onclick();
    if (data) handleNext();
    console.log("data from parent", data);
    console.log(nextBtn);
    setFormData({ ...formData, data });
  };

  return (
    <>
      <div className="flex flex-row  ">
        <NavBar />

        <div className="w-full container mx-auto w-">
          <SubNavBar />
          <CustomSteps items={items} stepState={stepState} />
          
          {step === 1 && <AddOverview onhandleSubmit={onhandleSubmit} />}
          {step === 2 && <AddPlan onhandleSubmit={onhandleSubmit} />}
          {step === 3 && <AddGallery />}
          {step === 4 && <AddMeetingPoint />}
          {step === 5 && <AddComplete />}
          {step !== 5 && (
            <div className="flex flex-col items-center md:flex-row md:justify-end mt-10 mb-10 gap-5">
              {step !== 1 && (
                <CustomButton
                  type="quadruple"
                  value="Previous"
                  width="w-64"
                  onClick={handlePrev}
                />
              )}
              <CustomButton
                type="secondary"
                value="Next"
                width="w-64"
                onClick={onhandleSubmit}
              />
            </div>
          )}
         
        </div>
      </div>
    </>
  );
};
 //     () =>
                //   nextBtn.current.addEventListener("click", () => {
                //     console.log("hager");
                //   })
export default AddTourPage;
