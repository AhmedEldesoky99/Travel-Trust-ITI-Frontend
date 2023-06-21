import React from "react";
import { Collapse } from "antd";
import { AimOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const CollapseImage = ({ location, duration, url }) => {
  return (
    <>
      <div className="grid grid-cols-4 mt-1">
        <div className="2xs:col-span-2 ">
          {url ? (
            <Collapse ghost>
              <Panel header="Show photo of the day" key="1">
                <img
                  className="object-cover w-full"
                  src={`${url}`}
                  alt="Tour Image"
                />
              </Panel>
            </Collapse>
          ) : null}
        </div>

        <div className="2xs:col-span-4 mt-2">
          <div className="grid 2xs:grid-cols-2 gap-1">
            
            <div className="flex items-center gap-2 2xs:col-span-1">
              <AimOutlined />

              <span className="text-black font-medium 2xs:text-sm md:text-base 2xl:text-xl ">
                {location}
              </span>
            </div>

            <span className="text-glass-gray 2xs:text-sm 2xl:text-lg 2xs:col-span-1">
              {duration} hours
            </span>

          </div>
        </div>
      </div>
    </>
  );
};

export default CollapseImage;
