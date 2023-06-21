import { useQuery } from "react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Pagination } from "antd";

import TourCard from "./../../../components/shared/TourCard/index";
import CardLoader from "../../../components/CardLoader";
import { getAllTours } from "../../../services/AllTours";


const About = () => {
  const { isLoading, data, isSuccess } = useQuery("allTours", getAllTours);

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
            {data?.data.map((item) => (
              <TourCard key={item._id} data={item} />
            ))}
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
      )}
    </>
  );
};

export default About;
