/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useQuery } from "react-query";

import TourCard from "./../../../components/shared/TourCard/index";
import { getEachGovernorateTours } from "../../../services/EachGovernorate";
import { Spin, Pagination } from "antd";
import { useParams } from "react-router-dom";

const About = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { isLoading, data, isSuccess } = useQuery(
    ["GovernorateTours", id],
    () => getEachGovernorateTours(id)
  );
  return (
    <section className="pt-32">
      <div className="container mx-auto">
        <div className="2xs:max-w-xs sm:max-w-sm md:max-w-[50%]">
          <h2 className="2xs:text-base lg:text-lg">
            <span className="text-5xl text-primary-green">
              {data?.data.city.description.substring(0, 1)}
            </span>
            {data?.data?.city.description.substring(1)}
          </h2>
        </div>

        <div>
          <h3 className="2xs:text-xl lg:text-2xl 2xl:text-3xl mt-14 mb-4">
            {data?.data.city.title} Tours
          </h3>
        </div>

        {!isSuccess && isLoading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <Spin />
          </div>
        ) : (
          <>
            <div className="container grid gap-4 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {data?.data.tours.map((item, index) => {
                if (12 * page-1 <= index <= 12 * page) return <TourCard key={item._id} data={item} />;
              })}
            </div>
            {data?.data.length >= 12 ? (
            <Pagination
              className="my-custom-pagination text-center mb-10"
              current={page}
              onChange={(page) => {
                setPage(page);
                console.log(page);
              }}
              pageSize={12}
              total={data?.data.length}
            />
          ) : (
            ""
          )}
          </>
        )}
      </div>

      <div
        className={`bg-cover bg-center h-[19rem] mt-14 ${
          data ? `bg-[url(${data?.data.city.section_image})]` : `bg-fish`
        }`}
      >
        <div className="bg-black/[0.25] h-full w-full"></div>
      </div>
    </section>
  );
};

export default About;
