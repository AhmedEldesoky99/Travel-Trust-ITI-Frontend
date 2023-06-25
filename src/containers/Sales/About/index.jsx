/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Pagination} from "antd";
import { useQuery } from "react-query";

import { getSales } from "../../../services/Sales";
import TourCard from "../../../components/shared/TourCard";
import CardLoader from "../../../components/CardLoader";

const About = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data, isSuccess } = useQuery("Sales", getSales);

  // Calculate the start and end index of the current page
  const startIndex = (page - 1) * 12;
  const endIndex = page * 12;

  // Filter the data to only include items within the current page range, and slice the array to only include up to 12 items
  const filteredData = data?.data
    ?.filter((item, index) => {
      const id = parseInt(index);
      return id >= startIndex && id < endIndex;
    })
    .slice(0, 12);
  return (
    <section>
      {!isSuccess && isLoading ? (
        <div>
          <CardLoader />
        </div>
      ) : (
        <>
         <Breadcrumb
        className="container mx-auto my-10 text-xl"
        separator="/"
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: "Sales",
          },
        ]}
      />
          <div className="container mb-10 mx-auto grid gap-4 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {filteredData.map((item, index) => {
              if (12 * page - 1 <= index <= 12 * page)
                return <Link to={`/tour-details/${item._id}`}><TourCard key={item._id} data={item} /></Link>;
            })}
          </div>
          {data?.data?.length >= 12 ? (
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
    </section>
  );
};

export default About;
