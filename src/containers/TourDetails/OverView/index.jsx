import React from "react";
import { Link } from "react-router-dom";

import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  UserOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import CheckoutCard from "../../../components/shared/CheckoutCard";

import getFormattedDate from "../../../helpers/convertDate";

const OverView = ({ data }) => {
  const isoStartDate = data?.data?.start_date;
  const isoEndDate = data?.data?.end_date;
  const tourLastUpdatedDate = data?.data?.updatedAt;

  const formattedStartDate = getFormattedDate(isoStartDate);
  const formattedEndDate = getFormattedDate(isoEndDate);
  const formattedTourDate = getFormattedDate(tourLastUpdatedDate);

  return (
    <section className="container grid lg:grid-cols-12">
      <div className="lg:col-span-8">
        <div>
          <p className="lg:text-2xl font-bold">
            EGP {data?.data?.price_per_person} /{" "}
            <span className="lg:text-base xl:text-lg 2xl:text-xl font-normal">
              per person
            </span>
          </p>
        </div>

        <div className="flex items-center mt-3 2xs:gap-4 lg:gap-10">
          <div className="flex justify-center items-center gap-2">
            <ClockCircleOutlined className="text-primary-green" />{" "}
            <span className="text-glass-gray lg:text-sm xl:text-base 2xl:text-lg">
              Tour Days: {data?.data?.duration}
            </span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <UserOutlined className="text-primary-green" />{" "}
            <span className="text-glass-gray lg:text-sm xl:text-base 2xl:text-lg">
              {data?.data?.person_num} max people
            </span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <EnvironmentOutlined className="text-primary-green" />{" "}
            <span className="text-glass-gray lg:text-sm xl:text-base 2xl:text-lg">
              {data?.data?.city?.title}
            </span>
          </div>
        </div>

        <div>
          <div className="mt-7 mb-5">
            <h3 className="2xs:text-sm sm:text-base lg:text-lg  2xl:text-2xl">
              {data?.data?.city?.description}
            </h3>
          </div>

          <div>
            <h3 className="2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
              {data?.data?.description}
            </h3>
          </div>
        </div>

        <div className="border border-solid border-black/10 rounded-2xl p-8 mt-14">
          <div className="grid grid-cols-8">
            <div className="col-span-2 space-y-2">
              <p className="2xs:text-sm md:text-base 2xl:text-xl font-semibold">
                Destination
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl font-semibold">
                Departure Date
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl font-semibold">
                Return Date
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl font-semibold">
                Dress Code
              </p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-5 space-y-2">
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                {data?.data?.city?.title}
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                {formattedStartDate}
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                {formattedEndDate}
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                {data?.data?.dress_code}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-8 border-solid border-t-2 border-black/10 mt-5 pt-5">
            <div className="col-span-2">
              <p className="2xs:text-sm md:text-base 2xl:text-xl font-semibold">
                Package Include
              </p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-2 space-y-2">
              {data?.data?.include.map((element) =>
                element["package"]?.map((element) => (
                  <div key={element} className="flex items-center gap-2">
                    <CheckOutlined className="text-primary-green" />
                    <span className="2xs:text-sm md:text-base 2xl:text-xl">
                      {element}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="grid grid-cols-8 border-solid border-t-2 border-black/10 mt-5 pt-5">
            <div className="col-span-2">
              <p className="2xs:text-sm md:text-base 2xl:text-xl font-semibold">
                Meals Include
              </p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-2 space-y-2">
              {data?.data?.include.map((element) =>
                element["meals"]?.map((element) => (
                  <div key={element} className="flex items-center gap-2">
                    <CheckOutlined className="text-primary-green" />
                    <span className="2xs:text-sm md:text-base 2xl:text-xl">
                      {element}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="grid grid-cols-8 border-solid border-t-2 border-black/10 mt-5 pt-5">
            <div className="col-span-2">
              <p className="2xs:text-sm md:text-base 2xl:text-xl font-semibold">
                Category
              </p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-2 space-y-2">
              {data?.data?.category.map((element) => (
                <div key={element["name"]} className="flex items-center gap-2">
                  <CheckOutlined className="text-primary-green" />
                  <span className="2xs:text-sm md:text-base 2xl:text-xl">
                    {element["name"]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1"></div>

      <div className="lg:col-span-3 2xs:mt-10 lg:mt-0">
        <CheckoutCard data={data?.data} />

        <div className="flex items-center gap-4 mt-7">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <Link to={`/profile/admin/${data?.data?.organizer?._id}`}>
                <img src={data?.data?.organizer?.photo[0].url} />
              </Link>
            </div>
          </div>
          <div>
            <h5 className="2xs:text-base 2xl:text-xl border-solid border-b-[1px] border-black">
              <Link
                to={`/profile/admin/${data?.data?.organizer?._id}`}
                className="hover:text-primary-green"
              >
                {data?.data?.organizer?.username}
              </Link>
            </h5>
            <p className="2xs:text-sm 2xl:text-base text-glass-gray">
              {formattedTourDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverView;
