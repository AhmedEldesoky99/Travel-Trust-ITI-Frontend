import React, { useState } from "react";
import { Tabs } from "antd";

import OverView from "../OverView";
import Plan from "../Plan";
import Gallery from "../Gallery";
import MeetingPoint from "../MeetingPoint";
import Reviews from "../Reviews";

import {
  QuestionCircleOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import Icon from "./../../../utils/icons";
import "./TourTabsStyle.css";

const TourTabs = ({ data }) => {
  const items = [
    {
      key: "1",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <QuestionCircleOutlined /> <span>Overview</span>
        </span>
      ),
      children: <OverView data={data} />,
    },
    {
      key: "2",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <CalendarOutlined /> <span>Plan</span>{" "}
        </span>
      ),
      children: <Plan data={data} />,
    },
    {
      key: "3",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <Icon name="photo" /> <span className="ml-3">Gallery</span>
        </span>
      ),
      children: <Gallery data={data} />,
    },
    {
      key: "4",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center">
          <EnvironmentOutlined />
          <span>Meeting Point</span>
        </span>
      ),
      children: <MeetingPoint data={data} />,
    },
    {
      key: "5",
      label: (
        <span className="2xs:text-sm sm:text-base flex items-center hover:text-black">
          <Icon name="review" />
          <span className="ml-3">Reviews</span>
        </span>
      ),
      children: <Reviews data={data}/>,
    },
  ];

  return (
    <>
      <Tabs
        className="my-custom-tabs container mx-auto w-full 2xs:-translate-y-[39px]"
        tabBarGutter={20}
        tabBarStyle={{ color: "white", marginBottom: "25px" }}
        defaultActiveKey="1"
        type="card"
        size="large"
        items={items}
      />
    </>
  );
};

export default TourTabs;
