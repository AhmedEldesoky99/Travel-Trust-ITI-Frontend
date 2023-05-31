import React, { useState } from "react";
import { Button, Tabs } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import ProfileDetails from "../ProfileDetails";
import WentBefore from "../WentBefore";
import Booked from "../Booked";
import Favorites from "../Favorites";
import UserReviews from "../UserReviews";

import UserImage from "../../../assets/images/UserProfile/userprofile.png";

import "./ProfileTabsStyle.css";

const ProfileTabs = ({ showModal }) => {
  const operations = (
    <Button
      onClick={showModal}
      className="my-custom-btn flex justify-center items-center 2xs:text-sm 2xl:text-xl"
    >
      Edit Profile
    </Button>
  );

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
          <span className="2xs:text-sm 2xl:text-xl">Went Before</span>
          <span className="kbd border-b-[1px] bg-white min-h-6 min-w-min ml-2">
            2
          </span>
        </span>
      ),
      children: <WentBefore />,
    },
    {
      key: "3",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <span className="2xs:text-sm 2xl:text-xl">Booked</span>
          <span className="kbd border-b-[1px] bg-white min-h-6 min-w-min ml-2">
            2
          </span>
        </span>
      ),
      children: <Booked />,
    },
    {
      key: "4",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <span className="2xs:text-sm 2xl:text-xl">Favorites</span>
          <span className="kbd border-b-[1px] bg-white min-h-6 min-w-min ml-2">
            2
          </span>
        </span>
      ),
      children: <Favorites />,
    },
    {
      key: "5",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <span className="2xs:text-sm 2xl:text-xl">Reviews</span>
          <span className="kbd border-b-[1px] bg-white min-h-6 min-w-min ml-2">
            2
          </span>
        </span>
      ),
      children: <UserReviews />,
    },
  ];

  return (
    <section>
      <div className="container mx-auto grid lg:gap-4 2xs:grid-cols-1 lg:grid-cols-12">
        <div className="2xs:col-span-1 lg:col-span-4 -translate-y-16">
          <div className="p-8 rounded-2xl shadow-lg bg-white">
            <div className="flex flex-col justify-center items-center">
              <img className="w-24" src={UserImage} alt="User Profile Image" />
              <h3 className="font-bold mt-2 2xs:text-base lg:text-lg 2xl:text-2xl">
                Osama Sayed
              </h3>
            </div>
            <div className="mt-7 flex flex-col gap-4">
              <div>
                <Button
                  icon={<PlusOutlined />}
                  onClick={showModal}
                  className="my-custom-btn flex items-center gap-2 2xs:text-sm sm:text-base 2xl:text-xl border-none shadow-none p-0"
                >
                  Add your phone number
                </Button>
              </div>
              <div>
                <Button
                  icon={<PlusOutlined />}
                  onClick={showModal}
                  className="my-custom-btn flex items-center gap-2 2xs:text-sm sm:text-base 2xl:text-xl border-none shadow-none p-0"
                >
                  Add your current city
                </Button>
              </div>
              <div>
                <Button
                  icon={<PlusOutlined />}
                  onClick={showModal}
                  className="my-custom-btn flex items-center gap-2 2xs:text-sm sm:text-base 2xl:text-xl border-none shadow-none p-0"
                >
                  Write some details about yourself
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="2xs:col-span-1 lg:col-span-8">
          <Tabs
            className="my-custom-pftabs"
            tabBarExtraContent={operations}
            items={items}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileTabs;
