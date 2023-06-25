/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ProfileDetails = ({ userData }) => {
  return (
    <div
      className={`p-8 min-h-[12rem] mb-10 rounded-2xl flex flex-col  shadow-lg bg-white  ${
        userData?.data?.user?.bio
          ? ""
          : "bg-lighter-gray justify-center items-center"
      }`}
    >
      <div
        className={`max-w-xl  ${
          userData?.data?.user?.bio ? "" : "text-center"
        }`}
      >
        <p className=" mb-3 2xs:text-base md:text-lg 2xl:text-xl">
          {userData?.data?.user?.bio ? (
            <div className="flex flex-col">
              <h2 className="2xs:text-lg md:text-xl 2xl:text-xl font-bold text-[#9A9999]">About</h2>
              <p className="2xs:text-sm md:text-base 2xl:text-lg text-[#585858]">{userData?.data?.user?.bio}</p>
            </div>
          ) : (
            ""
          )}
        </p>
        {userData?.data?.user?.bio ? (
          ""
        ) : (
          <p className="text-light-gray 2xs:text-sm md:text-base 2xl:text-lg">
            Add photos and info to your profile so people can find you easily
            and get to know you better!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
