import React from "react";
import { Collapse } from "antd";
import { AimOutlined } from "@ant-design/icons";

import TourImage from "../../assets/images/TourCard/tour1.png";

const { Panel } = Collapse;



const CollapseImage = () => {
  return (
    <>
      <div className="grid grid-cols-4 mt-4">

        <div className="2xs:col-span-4 sm:col-span-2 ">

          <div className="flex items-center gap-2">
            <AimOutlined />
            <span className="text-black font-medium 2xs:text-sm md:text-base 2xl:text-xl">
              The Museum of Egyptian Antiquities
            </span>
          </div>

          <Collapse ghost>
            <Panel header="Show photo of the place" key="1">
              <img
                className="object-cover w-full"
                src={TourImage}
                alt="Tour Image"
              />
            </Panel>
          </Collapse>
        </div>

        <div className="2xs:col-span-4 sm:col-span-2 ">
          <span className="text-glass-gray 2xs:text-sm 2xl:text-lg">2 hours</span>
        </div>


      </div>
    </>
  );
};

export default CollapseImage;
