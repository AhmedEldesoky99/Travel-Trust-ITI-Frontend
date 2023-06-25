/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
import { useParams } from "react-router-dom";
import { getUserData } from "../../../services/user";

const ProfileTabs = ({ showModal, userData, userReviews }) => {
  const operations = (
    <Button
      onClick={() => showModal("edit")}
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
      children: <ProfileDetails userData={userData}/>,
    },
    {
      key: "2",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <span className="2xs:text-sm 2xl:text-xl">Went Before</span>
          <span className="kbd border-b-[1px] bg-white min-h-6 min-w-min ml-2">
            {userData?.data?.visited_tour == undefined ? "0":userData?.data?.visited_tour }
          </span>
        </span>
      ),
      children: <WentBefore userData={userData}/>,
    },
    // {
    //   key: "3",
    //   label: (
    //     <span className="2xs:text-sm sm:text-base flex items-center">
    //       <span className="2xs:text-sm 2xl:text-xl">Booked</span>
    //       <span className="kbd border-b-[1px] bg-white min-h-6 min-w-min ml-2">
    //         2
    //       </span>
    //     </span>
    //   ),
    //   children: <Booked showModal={showModal} />,
    // },
    {
      key: "3",
      //key:"4",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <span className="2xs:text-sm 2xl:text-xl">Favorites</span>
          <span className="kbd border-b-[1px] bg-white min-h-6 min-w-min ml-2">
            {userData?.data?.favorite_tour?.length ? userData?.data?.favorite_tour?.length :"0"}
          </span>
        </span>
      ),
      children: <Favorites userData={userData}/>,
    },
    {
      key: "4",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <span className="2xs:text-sm 2xl:text-xl">Reviews</span>
          <span className="kbd border-b-[1px] bg-white min-h-6 min-w-min ml-2">
          {userReviews?.data.length}
          </span>
        </span>
      ),
      children: <UserReviews userReviews={userReviews}/>,
    },
  ];

  return (
    <section>
      <div className="container mx-auto grid lg:gap-4 2xs:grid-cols-1 lg:grid-cols-12">
        <div className="2xs:col-span-1 lg:col-span-4 -translate-y-16">
          <div className="p-8 rounded-2xl shadow-lg bg-white">
            <div className="flex flex-col justify-center items-center">
              <div className="rounded-full overflow-hidden">
                <img className="w-24 " src={ userData?.data?.user?.photo[0]?.url ||UserImage} alt="User Profile Image" />
              </div>
              <h3 className="font-bold mt-2 2xs:text-base lg:text-lg 2xl:text-2xl">
                {userData?.data?.user?.username}
              </h3>
            </div>
            <div className="mt-7 flex flex-col gap-4">
              <div>
                {userData?.data?.user?.phone ? (
                  `${userData?.data?.user?.phone}`
                ) : (
                  <Button
                    icon={<PlusOutlined />}
                    onClick={() => showModal("edit")}
                    className="my-custom-btn flex items-center gap-2 2xs:text-sm sm:text-base 2xl:text-xl border-none shadow-none p-0"
                  >
                    Add your phone number
                  </Button>
                )}
              </div>
              <div>
                {!userData?.data?.user?.governorate_expertise.length == 0 ? (
                  userData?.data?.user?.governorate_expertise[0].title
                ) : (
                  <Button
                    icon={<PlusOutlined />}
                    onClick={() => showModal("edit")}
                    className="my-custom-btn flex items-center gap-2 2xs:text-sm sm:text-base 2xl:text-xl border-none shadow-none p-0"
                  >
                    Add your current city
                  </Button>
                )}
              </div>
              <div>
                { userData?.data?.user?.bio === "" ? (
                  <Button
                    icon={<PlusOutlined />}
                    onClick={() => showModal("edit")}
                    className="my-custom-btn flex items-center gap-2 2xs:text-sm sm:text-base 2xl:text-xl border-none shadow-none p-0"
                  >
                    Write some details about yourself
                  </Button>
                ) : (
                  ""
                )}
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
