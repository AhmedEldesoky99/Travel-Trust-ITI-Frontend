/* eslint-disable no-unused-vars */
import React from "react";

import CheckDestCard from "../../../components/CheckDestCard";

import Image1 from "../../../assets/images/CheckDestinations/Aswan.png";
import Image2 from "../../../assets/images/CheckDestinations/Luxor.png";
import Image3 from "../../../assets/images/CheckDestinations/Nouba.png";
import Image4 from "../../../assets/images/CheckDestinations/Alex.png";
import { useQuery } from "react-query";
import { getTopDestinations } from "../../../services/Home";
import { Link } from "react-router-dom";

const CheckDestenations = () => {
  const { data } = useQuery("TopDestinations", getTopDestinations);

  return (
    <section className="py-14">
      <div className="container mx-auto">
        <div className="flex 2xs:flex-col 2xs:items-start xs:flex-row xs:items-center justify-between ">
          <h3 className="2xs:text-lg xs:text-xl lg:text-2xl 2xl:text-3xl xs:mb-4">
            Check out other destinations
          </h3>
          <Link
            to="/destinations"
            className="2xs:mb-2 xs:mb-4 md:text-lg 2xl:text-xl text-primary-green hover:underline"
          >
            View all destinations
          </Link>
        </div>

        <div className="container grid gap-2 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.data?.map((item, index) => {
            if (index < 4)
              return (
                <Link to={`/each-governorate/${item._id}`} key={index}>
                  <CheckDestCard
                    key={item._id}
                    url={item.home_image}
                    city={item.title}
                  />
                </Link>
              );
          })}
        </div>
      </div>
    </section>
  );
};

export default CheckDestenations;
