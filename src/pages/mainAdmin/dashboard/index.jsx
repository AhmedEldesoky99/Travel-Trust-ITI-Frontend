import React from "react";

import CardIcon from "../../../components/Admin/cardIcon";

import Icon from "../../../utils/icons";
import Avatar from "../../../components/Avatar";

//imports datagrid
import { Table, Tag } from "antd";
import useSearchDatagrid from "../../../hooks/useSearchDataGrid";
import DataGrid from "../../../components/shared/Admin/Data-grid";
import useModal from "../../../hooks/useModal";
import CustomModal from "../../../components/shared/Admin/CustomModal";
import MainNavBar from "../../../components/mainAdmin/Admin-NavBar";
import TopTravelers from "../../../components/AdminProfile/topTravelers";
import MainCardIcon from "../../../components/Admin/mainAdminCard/cardIcon";

import icon1 from "../../../assets/images/icons/icon1.png";
import icon2 from "../../../assets/images/icons/icon2.png";
import icon3 from "../../../assets/images/icons/icon3.png";
import icon4 from "../../../assets/images/icons/icon4.png";
import icon5 from "../../../assets/images/icons/icon5.png";
import icon6 from "../../../assets/images/icons/icon6.png";

const data = [
  {
    key: "1",
    tourID: "#123456",
    billingName: (
      <Avatar
        name="magid moustafa"
        image="https://media.istockphoto.com/id/108271508/photo/young-gray-cat.jpg?s=612x612&w=0&k=20&c=Cnra41iZ85qkZGDJB3cDNQ41BTg0vgl11Mlgu-OpjwM="
      />
    ),
    orderDate: "01.oct 2020",
    total: 1000,
    paymentMethod: "master card",
  },
  {
    key: "2",
    tourID: "#123456",
    billingName: (
      <Avatar
        name="mai moustafa"
        image="https://media.istockphoto.com/id/108271508/photo/young-gray-cat.jpg?s=612x612&w=0&k=20&c=Cnra41iZ85qkZGDJB3cDNQ41BTg0vgl11Mlgu-OpjwM="
      />
    ),
    orderDate: "01.oct 2020",
    total: 2000,
    paymentMethod: "master card",
  },
  {
    key: "4",
    tourID: "#123456",
    billingName: (
      <Avatar
        name="mai moustafa"
        image="https://media.istockphoto.com/id/108271508/photo/young-gray-cat.jpg?s=612x612&w=0&k=20&c=Cnra41iZ85qkZGDJB3cDNQ41BTg0vgl11Mlgu-OpjwM="
      />
    ),
    orderDate: "01.oct 2020",
    total: 2000,
    paymentMethod: "master card",
  },
];

const MainAdminDashBoard = () => {
  //custom hook
  const { getColumnSearchProps } = useSearchDatagrid();
  const { loading, open, showModal, handleOk, handleCancel } = useModal();

  // table structure
  const columns = [
    Table.SELECTION_COLUMN,
    {
      title: "Tour ID",
      dataIndex: "tourID",
      key: "tourID",
      //fixed column  NOTE: Do not use percentage
      width: 150,
      fixed: "left",
      //search
      ...getColumnSearchProps("tourID"),
    },
    {
      title: "Billing Name",
      dataIndex: "billingName",
      key: "billingName",
      //   width: "20%",
      //search
      ...getColumnSearchProps("billingName"),
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
      //search
      ...getColumnSearchProps("orderDate"),
    },
    {
      title: "Total (EPG)",
      dataIndex: "total",
      key: "total",
      //search
      ...getColumnSearchProps("orderDate"),
      //sort
      sorter: (a, b) => a.total - b.total,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      //search
      ...getColumnSearchProps("paymentMethod"),
    },
    {
      title: "Action",
      key: "operation",
      //fixed column
      fixed: "right",
      width: 100,
      //action icons
      render: () => (
        <>
          <button
            onClick={showModal}
            className="flex justify-center items-center "
          >
            <Icon name="delete" />
          </button>
          <CustomModal
            open={open}
            loading={loading}
            handleOk={handleOk}
            handleCancel={handleCancel}
            title="You Are About To Delete This Transiction"
            message1="this will delete it from your history"
            message2="are you sure ?"
          />
        </>
      ),
    },
  ];

  // const {
  //   data: categories,
  //   isLoading: isCategoriesLoading,
  //   error,
  // } = useQuery("categories", getAllCategories);

  // const localId = localStorage.getItem("localId");
  // const { data } = getUserData(localId);

  return (
    <>
      <div className="flex flex-row ">
        <MainNavBar />
        <div className="w-full container mx-auto">
          <div className="grid lg:grid-cols-12  auto-rows-max w-full  gap-5 h-fill md:mt-8 mt-32 ">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <MainCardIcon
                src={icon1}
                title="Total Earnings"
                generalStatistics="34,123.00 "
                type="$"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <MainCardIcon
                src={icon2}
                title="Total Earnings"
                generalStatistics="34,123.00 "
                type="$"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <MainCardIcon
                src={icon3}
                title="Total Earnings"
                generalStatistics="34,123.00 "
                type="$"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <MainCardIcon
                src={icon4}
                title="Total Earnings"
                generalStatistics="34,123.00 "
                type="$"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <MainCardIcon
                src={icon5}
                title="Total Earnings"
                generalStatistics="34,123.00 "
                type="$"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
              <MainCardIcon
                src={icon6}
                title="Total Earnings"
                generalStatistics="34,123.00 "
                type="$"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-12  auto-rows-max w-full  gap-5 h-fill md:mt-8 mt-32 ">
            <div className="col-span-12 lg:col-span-12 xl:col-span-3 shadow-xl rounded-2xl p-12">
              {/* Top travelers */}
              <h2 className="text-2xl mb-5">Top Locals</h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src="https://pbs.twimg.com/profile_images/830302889977344001/kNGk9Hf2.jpg"
                    className="rounded-full max-w-[70px] max-h-[70px]"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-[#585858] text-xl">Magid Mostafa</h3>
                    <h4 className="text-[#585858] text-lg">magid@gmail.com</h4>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src="https://pbs.twimg.com/profile_images/830302889977344001/kNGk9Hf2.jpg"
                    className="rounded-full max-w-[70px] max-h-[70px]"
                  />
                  <div className="">
                    <h3 className="text-[#585858] text-xl">Magid Mostafa</h3>
                    <h4 className="text-[#585858] text-lg">magid@gmail.com</h4>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src="https://pbs.twimg.com/profile_images/830302889977344001/kNGk9Hf2.jpg"
                    className="rounded-full max-w-[70px] max-h-[70px]"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-[#585858] text-xl">Magid Mostafa</h3>
                    <h4 className="text-[#585858] text-lg">magid@gmail.com</h4>
                  </div>
                </div>

                {/* </div> */}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-12 xl:col-span-6 shadow-xl rounded-2xl p-12 bg-white">
              <h2 className=" font-semibold text-xl">Latest Transaction</h2>
              <DataGrid data={data} columns={columns} />
            </div>
            <div className="col-span-12 lg:col-span-12 xl:col-span-3 shadow-xl rounded-2xl p-12">
              {/* Top travelers */}
              <h2 className="text-2xl mb-5">Top Travelers</h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src="https://pbs.twimg.com/profile_images/830302889977344001/kNGk9Hf2.jpg"
                    className="rounded-full max-w-[70px] max-h-[70px]"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-[#585858] text-xl">Magid Mostafa</h3>
                    <h4 className="text-[#585858] text-lg">magid@gmail.com</h4>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src="https://pbs.twimg.com/profile_images/830302889977344001/kNGk9Hf2.jpg"
                    className="rounded-full max-w-[70px] max-h-[70px]"
                  />
                  <div className="">
                    <h3 className="text-[#585858] text-xl">Magid Mostafa</h3>
                    <h4 className="text-[#585858] text-lg">magid@gmail.com</h4>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src="https://pbs.twimg.com/profile_images/830302889977344001/kNGk9Hf2.jpg"
                    className="rounded-full max-w-[70px] max-h-[70px]"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-[#585858] text-xl">Magid Mostafa</h3>
                    <h4 className="text-[#585858] text-lg">magid@gmail.com</h4>
                  </div>
                </div>

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAdminDashBoard;
