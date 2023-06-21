import React from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";

import CheckoutCard from "../../../components/shared/CheckoutCard";
import ReviewCard from "../../../components/shared/ReviewCard";

import AdminImage from "../../../assets/images/TourCard/admin.jpeg";
import CustomButton from "../../../components/shared/CustomButton";

const Reviews = ({ data }) => {
  return (
    <section className="container grid 2xs:grid-cols-1 lg:grid-cols-12">
      <div className="2xs:col-span-1 lg:col-span-8">
        <div>
          <h3 className="font-bold mb-5 2xs:text-base sm:text-lg 2xl:text-2xl">
            Reviews (2)
          </h3>

          <div className="grid 2xs:col-span-1 2xs:grid-cols-1 lg:col-span-8 lg:grid-cols-8 gap-4">
            <ReviewCard />
            <ReviewCard />

            <div className="2xs:col-span-1 lg:col-span-8 flex 2xs:flex-col 2xs:items-start lg:flex-row justify-between items-center my-5">
              <p className="font-bold  2xs:text-base sm:text-lg 2xl:text-2xl">
                Your Opinion Matters To Us
              </p>
              <div>
                <p className="2xs:text-sm sm:text-base 2xl:text-2xl">
                  Rate us from 1 to 5
                </p>
                <Rate />
              </div>
            </div>

            <div className="2xs:col-span-1 lg:col-span-1 ">
              <div className="avatar">
                <div className="2xs:w-24 lg:w-full rounded-full">
                  <Link to="">
                    <img src={AdminImage} />
                  </Link>
                </div>
              </div>
            </div>
            <form className="2xs:col-span-1 lg:col-span-7">
              <div>
                <textarea
                  className="textarea textarea-bordered w-full md:textarea-lg resize-none focus:outline-none"
                  placeholder="Share details of your own experience at this place !"
                ></textarea>
                <div className="flex justify-end">
                  <CustomButton submit="submit" value="Add Review" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="2xs:col-span-1 lg:col-span-1"></div>

      <div className="2xs:col-span-1 lg:col-span-3 2xs:mt-10 lg:mt-0">
        <CheckoutCard data={data?.data} />
      </div>
    </section>
  );
};

export default Reviews;
