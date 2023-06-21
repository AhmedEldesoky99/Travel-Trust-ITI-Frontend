/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TourCard from "../../../components/shared/TourCard";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getAdminTours } from "../../../services/AdminTours";
import { Pagination } from "antd";

const Tours = () => {
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const { isLoading, data, isSuccess } = useQuery(["AdminTours", id], () => getAdminTours(id));
  
  // Calculate the start and end index of the current page
  const startIndex = (page - 1) * 6;
  const endIndex = page * 6;

  // Filter the data to only include items within the current page range, and slice the array to only include up to 6 items
  const filteredData = data?.data?.filter((item, index) => {
    const id = parseInt(index);
    return id >= startIndex && id < endIndex;
  }).slice(0, 6);

  return (
    <>
      <div className="grid gap-4 mb-10 sm:grid-cols-2 lg:grid-cols-8">
        {filteredData?.map((item) => {
          return (
            <div
              key={item._id}
              className="sm:col-span-1 lg:col-span-4"
            >
              <TourCard
                tourImg={item?.highlight_photos[0]?.url}
                organizerImg={item?.organizer?.photo[0]?.url}
                cityName={item?.city?.title}
                price={item?.price_per_person}
                rate={item?.rate}
                title={item?.title}
                duration={item?.duration}
              />
            </div>
          );
        })}
      </div>
      {data?.data?.length >= 6 ? (
        <Pagination
          className="my-custom-pagination text-center mb-10"
          current={page}
          onChange={(page) => {
            setPage(page);
          }}
          pageSize={6}
          total={data?.data.length}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Tours;