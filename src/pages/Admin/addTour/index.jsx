import { useState } from "react";
import { useEffect } from "react";


import NavBar from "../../../components/shared/Admin/Admin-NavBar";
import SubNavBar from "../../../components/shared/Admin/SubNavBar.jsx";
import CustomSteps from "../../../components/steps";

import AddOverview from "../../../containers/Admin/Add tour/addTour-overview";
import AddPlan from "../../../containers/Admin/Add tour/addTour-plan";
import AddComplete from "../../../containers/Admin/Add tour/addTour-done";
import AddGallery from "../../../containers/Admin/Add tour/addTour-gallery";
import AddMeetingPoint from "../../../containers/Admin/Add tour/addTour-meetingPoint";

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

const stepMap = new Map([
  ["step-1", { component: <AddOverview /> }],
  ["step-2", { component: <AddPlan /> }],
  ["step-3", { component: <AddGallery /> }],
  ["step-4", { component: <AddMeetingPoint /> }],
  ["step-5", { component: <AddComplete /> }],
]);

const AddTourPage = () => {
  //----------- states -----------

  const { step} = useAddTourFormContext();
  const [stepState, setStepState] = useState(items[0]);
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
  return (
    <>
      <div className="flex flex-row  ">
        <NavBar />

        <div className="w-full container mx-auto w-">
          <SubNavBar />
          <CustomSteps items={items} stepState={stepState} />
          {/* {stepMap.get("step-1").component} */}
          {step === 1 && <AddOverview />}
          {step === 2 && <AddPlan />}
          {step === 3 && <AddGallery />}
          {step === 4 && <AddMeetingPoint />}
          {step === 5 && <AddComplete />}

        </div>
      </div>
    </>
  );
};

export default AddTourPage;
