import React from "react";


import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  UserOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import CheckoutCard from "../../../components/shared/CheckoutCard";

import AdminImage from "../../../assets/images/TourCard/admin.jpeg";
import { Link } from "react-router-dom";


const OverView = () => {


  return (
    <section className="container grid lg:grid-cols-12">
      <div className="lg:col-span-8">
        <div>
          <p className="lg:text-2xl font-bold">
            EGP 2,965 /{" "}
            <span className="lg:text-base xl:text-lg 2xl:text-xl font-normal">
              per person
            </span>
          </p>
        </div>

        <div className="flex items-center mt-3 2xs:gap-4 lg:gap-10">
          <div className="flex justify-center items-center gap-2">
            <ClockCircleOutlined className="text-primary-green" />{" "}
            <span className="text-glass-gray lg:text-sm xl:text-base 2xl:text-lg">
              2 days
            </span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <UserOutlined className="text-primary-green" />{" "}
            <span className="text-glass-gray lg:text-sm xl:text-base 2xl:text-lg">
              30 max people
            </span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <EnvironmentOutlined className="text-primary-green" />{" "}
            <span className="text-glass-gray lg:text-sm xl:text-base 2xl:text-lg">
              Alexandria
            </span>
          </div>
        </div>

        <div>
          <div className="mt-7 mb-5">
            <h3 className="2xs:text-sm sm:text-base lg:text-lg  2xl:text-2xl">
              There’s a lot to see in Cairo, but public transport is extremely
              patchy. Make life easy on yourself by booking this private tour,
              with door-to-door transfers, lunch, entrance fees, and an
              Egyptologist guide to curate the city for you. On day one, immerse
              in ancient Egypt:
            </h3>
          </div>

          <div>
            <h3 className="2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
              The Giza Pyramids, Sphinx, Valley Temple, and Saqqara. On day two,
              explore downtown, with the Egyptian Museum, Coptic Cairo, and the
              Khan al-Khalili bazaar.
            </h3>
          </div>
        </div>

        <div className="border border-solid border-black/10 rounded-2xl p-8 mt-14">
          <div className="grid grid-cols-8">
            <div className="col-span-2 space-y-2">
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                Destination
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                Departure Location
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                Departure Time
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                Return Time
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl">Dress Code</p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-5 space-y-2">
              <p className="2xs:text-sm md:text-base 2xl:text-xl">Cairo</p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                Cairo International Airport
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                Please arrive by 9:15 AM for a departure at 9:30 AM
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                Approximately 10:30 PM
              </p>
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>

          <div className="grid grid-cols-8 border-solid border-t-2 border-black/10 mt-5 pt-5">
            <div className="col-span-2">
              <p className="2xs:text-sm md:text-base 2xl:text-xl">
                Package Include
              </p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-2 space-y-2">
              <div className="flex justify-center items-center gap-2">
                <CheckOutlined className="text-primary-green" />
                <span className="2xs:text-sm md:text-base 2xl:text-xl">
                  Entrance Fee
                </span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <CheckOutlined className="text-primary-green" />
                <span className="2xs:text-sm md:text-base 2xl:text-xl">
                  Entrance Fee
                </span>
              </div>
            </div>
            <div className="col-span-2 space-y-2">
              <div className="flex justify-center items-center gap-2">
                <CheckOutlined className="text-primary-green" />
                <span className="2xs:text-sm md:text-base 2xl:text-xl">
                  Entrance Fee
                </span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <CheckOutlined className="text-primary-green" />
                <span className="2xs:text-sm md:text-base 2xl:text-xl">
                  Entrance Fee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1"></div>

      <div className="lg:col-span-3 2xs:mt-10 lg:mt-0">
        <CheckoutCard />

        <div className="flex items-center gap-4 mt-7">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <Link to="">
                <img src={AdminImage} />
              </Link>
            </div>
          </div>
          <div>
            <h5 className="2xs:text-base 2xl:text-xl border-solid border-b-[1px] border-black">
              <Link to="" className="hover:text-primary-green">
                Osama Sayed
              </Link>
            </h5>
            <p className="2xs:text-sm 2xl:text-base text-glass-gray">
              2 Mar 2023
            </p>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default OverView;
