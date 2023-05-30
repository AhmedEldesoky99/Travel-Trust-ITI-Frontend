import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs } from "antd";

import ProfileDetails from "../ProfileDetails";
import Tours from "../Tours";
import Reviews from "../Reviews";

import AdminImage from "../../../assets/images/CheckDestinations/Aswan.png";

import "../../UserProfile/ProfileTabs/ProfileTabsStyle.css";

const AdminProfileTabs = () => {
  const items = [
    {
      key: "1",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <span className="2xs:text-sm 2xl:text-xl">Profile Details</span>
        </span>
      ),
      children: <ProfileDetails />,
    },
    {
      key: "2",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <span className="2xs:text-sm 2xl:text-xl">Tours</span>
          <span className="kbd border-b-[1px] bg-white min-h-6 min-w-min ml-2">
            2
          </span>
        </span>
      ),
      children: <Tours />,
    },
    {
      key: "3",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <span className="2xs:text-sm 2xl:text-xl">Reviews</span>
          <span className="kbd border-b-[1px] bg-white min-h-6 min-w-min ml-2">
            2
          </span>
        </span>
      ),
      children: <Reviews />,
    },
  ];

  return (
    <section>
      <div className="container mx-auto grid 2xs:grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-12">
        <div className="2xs:col-span-1 lg:col-span-4 -translate-y-16 ">
          <div className="p-8 rounded-2xl shadow-lg bg-white mb-7 ">
            <div className="flex flex-col justify-center items-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <Link to="">
                    <img className="object-cover" src={AdminImage} />
                  </Link>
                </div>
              </div>
              <h3 className="font-bold mt-2 2xs:text-base lg:text-lg 2xl:text-2xl">
                Osama Sayed
              </h3>
            </div>
            <div className="mt-7 flex flex-col gap-4">
              <div>
                <span className="2xs:text-sm sm:text-base 2xl:text-xl">
                  Cairo
                </span>
              </div>
              <div>
                <span className="2xs:text-sm sm:text-base 2xl:text-xl">
                  01090132116
                </span>
              </div>
              <div>
                <span className="2xs:text-sm sm:text-base 2xl:text-xl">
                  osama@gmail.com
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl shadow-lg bg-white flex flex-col gap-4 ">
            <div className="flex justify-between items-center text-center">
              <div className="max-w-[70px]">
                <span className="text-primary-green 2xs:text-lg md:text-xl 2xl:text-3xl font-bold">
                  6
                </span>
                <p className="2xs:text-sm 2xl:text-lg">Tours Created</p>
              </div>
              <div className="max-w-[70px]">
                <span className="text-primary-green 2xs:text-lg md:text-xl 2xl:text-3xl font-bold">
                  50
                </span>
                <p className="2xs:text-sm 2xl:text-lg">Tours Favorite</p>
              </div>
              <div className="max-w-[70px]">
                <span className="text-primary-green 2xs:text-lg md:text-xl 2xl:text-3xl font-bold">
                  5k
                </span>
                <p className="2xs:text-sm 2xl:text-lg">Ratings</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-center">
              <div className="max-w-[70px]">
                <span className="text-primary-green 2xs:text-lg md:text-xl 2xl:text-3xl font-bold">
                  5k
                </span>
                <p className="2xs:text-sm 2xl:text-lg">Traveler Booked</p>
              </div>
              <div className="max-w-[70px]">
                <span className="text-primary-green 2xs:text-lg md:text-xl 2xl:text-3xl font-bold">
                  10k
                </span>
                <p className="2xs:text-sm 2xl:text-lg">Views</p>
              </div>
              <div className="max-w-[70px]">
                <span className="text-primary-green 2xs:text-lg md:text-xl 2xl:text-3xl font-bold">
                  5k
                </span>
                <p className="2xs:text-sm 2xl:text-lg">Reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="2xs:col-span-1 lg:col-span-8">
          <Tabs className="my-custom-pftabs" items={items} />
        </div>
      </div>
    </section>
  );
};

export default AdminProfileTabs;