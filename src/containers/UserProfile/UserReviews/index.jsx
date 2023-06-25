/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const UserReviews = ({ userReviews }) => {
  return (
    <div className="grid gap-4 mb-10 2xs:grid-cols-1 lg:grid-cols-8">
      {userReviews?.data.map((review, index) => {
        return (
          <div key={index} className="2xs:col-span-1 lg:col-span-8">
            <div className="border border-solid border-black/10 rounded-2xl shadow-md p-8 flex flex-col justify-center gap-4">
              <div>
                <div className="flex xs:flex-row xs:justify-between xs:items-center 2xs:flex-col 2xs:items-start">
                  <p className="font-bold 2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
                    {review.title}
                  </p>
                  <Link to="" className="hover:text-primary-green">
                    <span className="underline 2xs:text-sm md:text-base 2xl:text-lg">
                      View Details
                    </span>
                  </Link>
                </div>
                <Rate disabled defaultValue={review.rate || 0} />
              </div>
              <div>
                <p className="2xs:text-sm sm:text-base 2xl:text-xl">
                  {review.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserReviews;
