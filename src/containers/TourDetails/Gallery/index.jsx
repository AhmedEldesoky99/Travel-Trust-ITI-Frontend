import React from "react";

import CheckoutCard from "../../../components/shared/CheckoutCard";

import Food1 from "../../../assets/images/TourDetails/food1.png";
import Food2 from "../../../assets/images/TourDetails/food2.png";
import Food3 from "../../../assets/images/TourDetails/food3.png";

const Gallery = ({ data }) => {
  return (
    <section>
      <h3 className="font-semibold 2xs:text-base lg:text-xl 2xl:text-2xl mb-5">
        Food Included In The Tour
      </h3>

      <div className="container grid lg:grid-cols-12 gap-4">
        <div className="lg:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 h-fit">
          {/* Food grid Start */}
          {data?.data?.food_photos?.map((foodPhoto) => (
            <div className="lg:col-span-1">
              <div
                style={{ backgroundImage: `url(${foodPhoto?.url})` }}
                className={`2xs:min-h-[15rem] lg:min-h-[20rem] 2xl:min-h-[25rem] bg-cover bg-center rounded-2xl`}
              >
                <div className="w-full min-h-inherit flex justify-end items-end bg-black/[0.4] rounded-2xl text-white">
                  <div className="flex items-center gap-3 mr-3 mb-3">
                    <div className="text-center">
                      <p className="2xs:text-base md:text-lg 2xl:text-xl">
                        200+
                      </p>
                      <span className="2xs:text-base md:text-lg 2xl:text-xl">
                        independent reviews
                      </span>
                    </div>
                    <div className="divider bg-white mt-0 mb-0 h-inherit w-[2px]"></div>
                    <div className="border border-solid border-white rounded-lg p-4 text-center">
                      <p className="2xs:text-base md:text-lg 2xl:text-xl">
                        8.0
                      </p>
                      <span className="2xs:text-base md:text-lg 2xl:text-xl">
                        Rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Food grid End */}

          {/* Highlights grid Start */}
          <div className="mt-8 sm:col-span-2 lg:col-span-3">
            <h3 className="font-semibold 2xs:text-base lg:text-xl 2xl:text-2xl">
              Highlights
            </h3>
          </div>

          {data?.data?.highlight_photos?.map((highlightPhoto) => (
            <div className="lg:col-span-1">
              <div
                style={{ backgroundImage: `url(${highlightPhoto?.url})` }}
                className={`2xs:min-h-[15rem] lg:min-h-[20rem] 2xl:min-h-[25rem] bg-cover bg-center rounded-2xl`}
              >
                <div className="w-full min-h-inherit rounded-2xl"></div>
              </div>
            </div>
          ))}
          {/* Highlights grid End */}
        </div>

        <div className="lg:col-span-3 2xs:mt-10 lg:mt-0">
          <CheckoutCard data={data?.data} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
