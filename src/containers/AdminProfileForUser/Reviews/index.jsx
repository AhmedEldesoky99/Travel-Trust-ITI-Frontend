/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useParams } from "react-router-dom";

import ReviewCard from "../../../components/shared/ReviewCard";
import { useQuery } from "react-query";
import { getAdminReviews } from "../../../services/AdminReviews";

const Reviews = () => {
  const { id } = useParams();
  const { isLoading, data, isSuccess } = useQuery(["AdminReviews", id], () =>
    getAdminReviews(id)
  );

  console.log(data);
  return (
    <section className="container grid 2xs:grid-cols-1 lg:grid-cols-8">
      <div className="2xs:col-span-1 lg:col-span-8 mb-4 flex 2xs:flex-col 2xs:items-start xs:flex-row xs:justify-between xs:items-center">
        <p className="font-bold 2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
          Giza in 6 days explore egypt
        </p>
        <Link to="" className="hover:text-primary-green">
          <span className="underline 2xs:text-sm md:text-base 2xl:text-lg">
            View Details
          </span>
        </Link>
      </div>

      <div className="2xs:col-span-1 lg:col-span-8 mb-10">
        <div className="grid 2xs:col-span-1 2xs:grid-cols-1 lg:col-span-8 lg:grid-cols-8 gap-4">
          {data?.data?.map((item,index) => {
            return (
              <ReviewCard
              // key={index}
              // username={item?.user?.username}
              // content={item?.content}
              // userImg={item?.user?.photo[0].url}
              // rating={item?.rating}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
