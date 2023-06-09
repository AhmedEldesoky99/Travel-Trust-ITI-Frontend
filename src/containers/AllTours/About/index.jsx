import { useQuery } from "react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Pagination } from "antd";

import TourCard from "./../../../components/shared/TourCard/index";
import CardLoader from "../../../components/CardLoader";
import { getAllTours } from "../../../services/AllTours";

const About = () => {
  let total;
  const pageSize = 8;
  const { isLoading, data, isSuccess } = useQuery("allTours", getAllTours);
  if (isSuccess) {
    total = data.data.length;
  }
  const [page, setPage] = useState(1);

  return (
    <>
      {!isSuccess && isLoading && <CardLoader />}
      {!!data && (
        <section>
          <Breadcrumb
            className="container mx-auto my-10  text-xl"
            separator="/"
            items={[
              {
                title: <Link to="/">Home</Link>,
              },
              {
                title: "Tours",
              },
            ]}
          />

          <div className="container mb-10 mx-auto grid gap-4 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {data?.data
              .slice((page - 1) * pageSize, page * pageSize)
              .map((item) => (
                <Link to={`/tour-details/${item._id}`}>
                  <TourCard key={item._id} data={item} />
                </Link>
              ))}
          </div>

          <Pagination
            className="my-custom-pagination text-center mb-10"
            current={page}
            onChange={(page) => {
              setPage(page);
            }}
            pageSize={pageSize}
            total={total}
          />
        </section>
      )}
    </>
  );
};

export default About;
