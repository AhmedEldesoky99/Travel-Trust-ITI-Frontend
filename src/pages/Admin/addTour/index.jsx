import { useState, useEffect } from "react";

import NavBar from "../../../components/shared/Admin/Admin-NavBar";
import SubNavBar from "../../../components/shared/Admin/SubNavBar.jsx";
import CustomSteps from "../../../components/steps";

import AddOverview from "../../../containers/Admin/Add tour/addTour-overview";
import AddPlan from "../../../containers/Admin/Add tour/addTour-plan";
import AddComplete from "../../../containers/Admin/Add tour/addTour-done";
import AddGallery from "../../../containers/Admin/Add tour/addTour-gallery";
import AddMeetingPoint from "../../../containers/Admin/Add tour/addTour-meetingPoint";

import useAddTourFormContext from "../../../hooks/useAddTourFormContext";

import { Switch } from "antd";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  LoadingOutlined,
  PictureOutlined,
  QuestionCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import "./style.css";
import { getUserData } from "../../../services/user";

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

  const { step, publish, setPublish, tourID } = useAddTourFormContext();
  const [stepState, setStepState] = useState(items[0]);
  const [disabled, setDisabled] = useState(true);

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

  useEffect(() => {
    function handleBeforeUnload(event) {
      event.preventDefault();
      event.returnValue = "";
    }

    window.addEventListener("beforeunload", handleBeforeUnload);

    //clean function
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const localId = localStorage.getItem("localId");

  const { data } = getUserData(localId);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    setPublish(checked);
  };
  useEffect(() => {
    if (data?.user?.verified) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [data?.user?.verified]);

  return (
    <>
      <div className="flex flex-row bg-[#f5f8f9] ">
        <NavBar />

        <div className="w-full container mx-auto ">
          {/* <SubNavBar /> */}

          {/* {tourID !== "add" && ( */}
          <CustomSteps items={items} stepState={stepState} />
          {/* )} */}

          {/* {stepMap.get("step-1").component} */}

          <div className="flex justify-between rounded-2xl shadow-md p-4 bg-white">
            <div className="flex p-6">
              {!data?.user?.verified && (
                <p>
                  <span className=" text-tertiary-red font-semibold">
                    Note:{" "}
                  </span>
                  Your acount will be reviewed by the admin before you can
                  publish.<br></br> In the meantime, you can still create a
                  draft of your tour, but the 'Publish' button will be disabled
                  until your account has been verified.
                </p>
              )}
            </div>

            <div className="flex justify-end items-center gap-4 ">
              <Switch
                disabled={disabled}
                onChange={onChange}
                className="custom-switch"
              />
              <p>{publish ? "publish" : "Draft"}</p>
            </div>

            {/* {!data?.user?.verified && (
              
            )} */}
          </div>

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
