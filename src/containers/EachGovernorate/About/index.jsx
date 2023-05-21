import React from "react";

import TourCard from "./../../../components/shared/TourCard/index";

const About = () => {
  return (
    <section className="pt-32">
      <div className="container mx-auto">
        <div className="max-w-[50%]">
          <p className="2xs:text-base lg:text-lg">
            <span className="text-5xl text-primary-green">D</span>ahab is a
            small Egyptian town on the southeast coast of the Sinai Peninsula in
            Egypt, approximately 80 km northeast of Sharm el-Sheikh. Formerly a
            Bedouin fishing village, Dahab is now considered to be one of Egypt'
            most treasured diving destinations.
          </p>
        </div>

        <div>
          <p className="2xs:text-xl lg:text-2xl 2xl:text-3xl mt-14 mb-4">Dahab Tours </p>
        </div>

        <div className="container grid gap-4 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </div>

      <div className="bg-fish bg-cover bg-center h-[19rem] mt-14">
        <div className="bg-black/[0.25] h-full w-full"></div>
      </div>
    </section>
  );
};

export default About;
