import React from "react";
import { Steps } from "antd";
import { EnvironmentOutlined, DownCircleOutlined } from "@ant-design/icons";

import Icon from "../../../utils/icons";
import CheckoutCard from "../../../components/shared/CheckoutCard";
import CollapseImage from "../../../components/CollapseImage";



const Plan = () => {
  const items = [
    {
      title: (
        <span className="2xs:text-base 2xl:text-xl">You will start at</span>
      ),
      icon: <EnvironmentOutlined className="text-primary-green" />,
      description: (
        <span className="text-black font-bold 2xs:text-lg 2xl:text-xl">
          DownTown Cairo
        </span>
      ),
    },
    {
      title: (
        <span className="font-semibold 2xs:text-base xl:text-lg 2xl:text-xl">
          Day 1 : The Great Pyramids and Sphinx of Giza and The Amzaing Step
          Pyramid Of Saqqara
        </span>
      ),
      icon: <DownCircleOutlined className="text-primary-green" />,
      description: (
        <span className="2xs:text-sm xl:text-base 2xl:text-lg text-glass-gray">
          9:30 am - 4:00 pm
        </span>
      ),
    },
    {
      title: (
        <span className="font-semibold 2xs:text-base xl:text-lg 2xl:text-xl">
          Day 2 : Cairo City Tour Museum, Coptic Cairo, Citadel and Khan
          Alkhalili Market
        </span>
      ),
      icon: <DownCircleOutlined className="text-primary-green " />,
      description: (
        <div>
          <span className="2xs:text-sm xl:text-base 2xl:text-lg text-glass-gray">
            9:30 am - 4:00 pm
          </span>
          <CollapseImage />
          <CollapseImage />
          <CollapseImage />
        </div>
      ),
    },
    {
      title: (
        <span className="2xs:text-base xl:text-lg 2xl:text-xl">Categories</span>
      ),
      icon: <DownCircleOutlined className="text-primary-green" />,
      description: (
        <>
          <div className="flex items-center gap-2">
            <Icon name="culture" />
            <span className="text-glass-gray 2xs:text-sm md:text-base 2xl:text-lg">Culture</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="food" />
            <span className="text-glass-gray 2xs:text-sm md:text-base 2xl:text-lg">Food</span>
          </div>
        </>
      ),
    },
    {
      title: (
        <span className="2xs:text-base xl:text-lg 2xl:text-xl">
          Meals Included
        </span>
      ),
      icon: <DownCircleOutlined className="text-primary-green" />,
      description: <span className="text-glass-gray 2xs:text-sm md:text-base 2xl:text-lg">Lunch</span>,
    },
  ];

  return (
    <section className="container grid lg:grid-cols-12">
      <div className="lg:col-span-8">
        <div>
          <h2 className="font-bold mb-2 2xs:text-base sm:text-lg 2xl:text-2xl ">
            Tour Plan
          </h2>
          <h3 className="2xs:text-sm sm:text-base 2xl:text-xl">
            Aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </h3>
        </div>

        <div className="mt-10">
          <Steps
            // progressDot
            // status="finish"
            current={100}
            direction="vertical"
            items={items}
          />
        </div>
      </div>

      <div className="lg:col-span-1"></div>

      <div className="lg:col-span-3 2xs:mt-10 lg:mt-0">
        <CheckoutCard />
      </div>
    </section>
  );
};

export default Plan;
