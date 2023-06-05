import React from "react";

const ProfileDetails = () => {
  return (
    <div className="flex flex-col gap-4 mb-10">

      <div>
        <p className="text-light-gray mb-2 2xs:text-base md:text-lg 2xl:text-2xl">About</p>
        <p className=" 2xs:text-sm md:text-base 2xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <p className="mb-1 text-light-gray 2xs:text-base md:text-lg 2xl:text-2xl">Governorate of expertise</p>
          <span className="badge p-3 2xs:text-sm 2xl:text-xl 2xl:p-4">Cairo</span>
        </div>
        <div>
          <p className="mb-1 text-light-gray 2xs:text-base md:text-lg 2xl:text-2xl">Language</p>
          <span className="badge p-3 mr-2 2xs:text-sm 2xl:text-xl 2xl:p-4">Arabic</span>
          <span className="badge p-3 2xs:text-sm 2xl:text-xl 2xl:p-4">English</span>
        </div>
      </div>


    </div>
  );
};

export default ProfileDetails;
