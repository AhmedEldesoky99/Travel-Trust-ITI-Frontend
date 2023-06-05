import React from "react";
import { Table } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Icon from "./../../../utils/icons";
import TourImage from "../../../assets/images/TourCard/tour1.png";

const Booked = ({ showModal }) => {
  const columns = [
    { key: "1", title: "Tour", dataIndex: "tour", width: 100 },
    { key: "2", title: "Location", dataIndex: "location" },
    { key: "3", title: "Start Date", dataIndex: "startDate" },
    { key: "4", title: "Duration", dataIndex: "duration" },
    { key: "5", title: "Persons", dataIndex: "persons" },
    { key: "6", title: "Cost", dataIndex: "cost" },
    { key: "7", title: "Admin", dataIndex: "admin" },
    { key: "8", title: " ", dataIndex: "icon" },
  ];

  const dataSource = [
    {
      key: "1 ",
      tour: <img className="h-16 object-cover rounded-xl" src={TourImage} />,
      location: "Cairo",
      startDate: "27-5-2023",
      duration: "3 Days",
      persons: (
        <span className="flex justify-center items-center gap-2">
          4 <UserOutlined />
        </span>
      ),
      cost: <span className="font-bold">EGP 1000</span>,
      admin: "Osama",
      icon: (
        <button onClick={()=>showModal('delete')}>
          <Icon name="delete" />
        </button>
      ),
    },
    {
      key: "2",
      tour: <img className="h-16 object-cover rounded-xl" src={TourImage} />,
      location: "Cairo",
      startDate: "27-5-2023",
      duration: "3 Days",
      persons: (
        <span className="flex justify-center items-center gap-2">
          4 <UserOutlined />
        </span>
      ),
      cost: <span className="font-bold">EGP 1000</span>,
      admin: "Osama",
      icon: (
        <button>
          <Icon name="delete" />
        </button>
      ),
    },
  ];

  return (
    <Table
      scroll={{ x: 800, y: 500 }}
      className="my-custom-pagination"
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default Booked;
