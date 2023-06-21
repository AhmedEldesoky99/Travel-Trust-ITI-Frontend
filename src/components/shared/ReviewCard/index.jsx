/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";


const ReviewCard = ({ username, content, userImg, rating }) => {
  return (
    <>
      <div className="2xs:col-span-1 lg:col-span-1 ">
        <div className="avatar">
          <div className="2xs:w-24 lg:w-full rounded-full">
            <Link to="">
              <img className="object-cover" src={userImg} alt={username} />
            </Link>
          </div>
        </div>
      </div>

      <div className="2xs:col-span-1 lg:col-span-7">
        <div className="border border-solid border-black/10 rounded-2xl shadow-md p-8 flex flex-col justify-center gap-4">
          <div>
            <Link className="hover:text-primary-green" to="">
              <p className="font-bold 2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
                {username}
              </p>
            </Link>
            <Rate disabled defaultValue={0} value={rating} />
          </div>
          <div>
            <p className="2xs:text-sm sm:text-base 2xl:text-xl">
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;