import NavBar from "../../../../components/shared/Admin/Admin-NavBar";
import SubNavBar from "../../../../components/shared/Admin/SubNavBar.jsx";
import CustomSteps from "../../../../components/steps";

import {
  QuestionCircleOutlined,
  PictureOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import CustomButton from "../../../../components/shared/CustomButton";
import { Link } from "react-router-dom";
const items = [
  {
    title: "Overview",
    status: "finish",
    icon: (
      <QuestionCircleOutlined
        style={{
          color: "#009EB7",
        }}
      />
    ),
  },
  {
    title: "Plan",
    status: "finish",
    icon: (
      <CalendarOutlined
        style={{
          color: "#009EB7",
        }}
      />
    ),
  },
  {
    title: "Gallery",
    status: "finish",
    icon: (
      <PictureOutlined
        style={{
          color: "#009EB7",
        }}
      />
    ),
  },
  {
    title: "Metting Point",
    status: "finish",
    icon: (
      <EnvironmentOutlined
        style={{
          color: "#009EB7",
        }}
      />
    ),
  },
  {
    title: "Done",
    status: "finish",
    icon: (
      <SmileOutlined
        style={{
          color: "#009EB7",
        }}
      />
    ),
  },
];

const AddComplete = () => {
  return (
    <>
      <div className="rounded-2xl shadow-md p-10  mb-10">
        <div className="flex  justify-center">
          <img
            src="../../../../src/assets/images/Admin/done.png"
            alt="add toue complete image"
          />
        </div>
        <p className="mt-8 capitalize text-center text-xl md:text-3xl font-medium">
          Great, you finished all the steps and created your <br />
          customize tour
        </p>

        <div className="flex flex-col items-center md:flex-row md:justify-center mt-10 mb-10 gap-5">
          <Link to="/admin/add/gallery">
            <CustomButton
              type="quadruple"
              value="Save as a Draft"
              width="w-64"
            />
          </Link>
          <Link to="/admin/add/complete">
            <CustomButton type="secondary" value="Publish" width="w-64" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddComplete;
