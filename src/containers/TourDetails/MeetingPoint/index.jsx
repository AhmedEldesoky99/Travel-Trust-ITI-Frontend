import React from "react";

import CheckoutCard from "../../../components/shared/CheckoutCard";
import CustomMap from "../../../components/shared/Map";

const MeetingPoint = ({ data }) => {
  console.log(data);
  return (
    <section className="container grid lg:grid-cols-12">
      <div className="lg:col-span-8">
        <div className="mb-5">
          <h3 className="font-bold mb-2 2xs:text-base sm:text-lg 2xl:text-2xl ">
            Where will we meet
          </h3>
          <h3 className="2xs:text-sm sm:text-base 2xl:text-xl">
            We will meet at {data?.data?.description}
          </h3>
        </div>

        <CustomMap
          coordinates={{ longitude: data?.data?.latitude, latitude: data?.data?.longitude }}
        />
      </div>

      <div className="lg:col-span-1"></div>

      <div className="lg:col-span-3 2xs:mt-10 lg:mt-0">
        <CheckoutCard data={data?.data} />
      </div>
    </section>
  );
};

export default MeetingPoint;
