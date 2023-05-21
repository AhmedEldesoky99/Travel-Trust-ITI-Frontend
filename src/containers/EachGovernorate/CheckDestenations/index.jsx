import React from "react";
import { Link } from "react-router-dom";

import CheckDestCard from "../../../components/CheckDestCard";

const CheckDestenations = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <p className="2xs:text-xl lg:text-2xl 2xl:text-3xl mb-4">
            Check out other destinations
          </p>
          <Link to="" className="text-primary-green hover:underline">
            View all destinations
          </Link>
        </div>

        <div className="container grid gap-2 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <CheckDestCard
            city="Aswan"
            url="/src/assets/images/CheckDestinations/Aswan.png"
          />
          <CheckDestCard
            city="Luxor"
            url="/src/assets/images/CheckDestinations/Luxor.png"
          />
          <CheckDestCard
            city="Nouba"
            url="/src/assets/images/CheckDestinations/Nouba.png"
          />
          <CheckDestCard
            city="Alex"
            url="/src/assets/images/CheckDestinations/Alex.png"
          />
        </div>
      </div>
    </section>
  );
};

export default CheckDestenations;
