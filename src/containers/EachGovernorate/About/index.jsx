import React from "react";
import { Pagination } from "antd";

import TourCard from "./../../../components/shared/TourCard/index";

const About = () => {
  return (
    <section className="pt-32">
      <div className="container mx-auto">
        <div className="2xs:max-w-xs sm:max-w-sm md:max-w-[50%]">
          <h2 className="2xs:text-base lg:text-lg">
            <span className="text-5xl text-primary-green">D</span>ahab is a
            small Egyptian town on the southeast coast of the Sinai Peninsula in
            Egypt, approximately 80 km northeast of Sharm el-Sheikh. Formerly a
            Bedouin fishing village, Dahab is now considered to be one of Egypt'
            most treasured diving destinations.
          </h2>
        </div>

        <div>
          <h3 className="2xs:text-xl lg:text-2xl 2xl:text-3xl mt-14 mb-4">Dahab Tours </h3>
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

      <Pagination
        className="my-custom-pagination text-center mb-10"
        current={page}
        onChange={(page) => {
          setPage(page);
        }}
        pageSize={12}
        total={50}
      />
    </section>
  );
};

export default About;
