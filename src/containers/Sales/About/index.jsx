import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

import TourCard from "../../../components/shared/TourCard";

const About = () => {
  return (
    <section>
      <Breadcrumb
        className="container mx-auto my-10"
        separator=">"
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: "Sales",
          },
        ]}
      />
      <div className="container mb-10 mx-auto grid gap-4 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </div>
    </section>
  );
};

export default About;
