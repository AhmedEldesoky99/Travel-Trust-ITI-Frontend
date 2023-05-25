import React from "react";

import TourCard from "../../../components/shared/TourCard";

const About = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto grid gap-4 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
