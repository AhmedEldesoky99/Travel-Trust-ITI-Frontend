import React from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";

import ReviewCard from "../../../components/shared/ReviewCard";



const Reviews = () => {
  return (
    <section className="container grid 2xs:grid-cols-1 lg:grid-cols-8">
      <div className="2xs:col-span-1 lg:col-span-8 mb-4 flex 2xs:flex-col 2xs:items-start xs:flex-row xs:justify-between xs:items-center">
        <p className="font-bold 2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
          Giza in 6 days explore egypt
        </p>
        <Link to="" className="hover:text-primary-green">
          <span className="underline 2xs:text-sm md:text-base 2xl:text-lg">View Details</span>
        </Link>
      </div>

      <div className="2xs:col-span-1 lg:col-span-8 mb-10">
        <div className="grid 2xs:col-span-1 2xs:grid-cols-1 lg:col-span-8 lg:grid-cols-8 gap-4">
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
