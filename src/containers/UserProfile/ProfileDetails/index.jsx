import React from "react";

const ProfileDetails = () => {
  return (
    <div className="p-8 min-h-[12rem] mb-10 bg-lighter-gray rounded-2xl flex flex-col justify-center items-center">
      <div className="max-w-xl text-center">
        <p className="font-bold mb-3 2xs:text-base md:text-lg 2xl:text-xl">
          Fill Out Your Profile
        </p>
        <p className="text-light-gray 2xs:text-sm md:text-base 2xl:text-lg">
          Add photos and info to your profile so people can find you easily and
          get to know you better!
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
