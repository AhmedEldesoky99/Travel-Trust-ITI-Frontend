/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Checkbox } from "antd";
import heart from "../../assets/images/History/heart.svg";
import options from "../../assets/images/History/options.svg";
import React, { useState } from "react";

const Row = ({ time, title, isFavorite }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-between " key={time}>
        <div className="flex flex-row md:gap-6 2xs:gap-1 justify-center">
          <Checkbox />
          <p className="2xl:text-xl lg:text-lg 2xs:text-base">{time}</p>
          <p className="ml-6 2xl:text-xl lg:text-lg 2xs:text-base max-w-[130px]">{title}</p>
        </div>
        <div className="flex flex-row md:gap-9  items-center">
          {isFavorite && <img className="md:block 2xs:hidden" src={heart} />}
          <div >
            <img
              src={options}
              onClick={() => {
                setOpen(!open);
              }}
            />
            {open && (
              <div className="absolute bg-white">
                <ul className="max-w-[261px] flex flex-col px-3 py-6 gap-4 rounded-xl shadow-lg">
                  <li>
                    <a href="">More Details On The Tour</a>
                  </li>
                  <hr className="" />
                  <li>
                    <a href="">Remove From history</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Row;