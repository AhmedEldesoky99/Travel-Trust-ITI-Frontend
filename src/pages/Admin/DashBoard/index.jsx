import React from "react";
import NavBar from "../../../components/shared/Admin/Admin-NavBar";
import CardIcon from "../../../components/Admin/cardIcon";
import SubNavBar from "../../../components/shared/Admin/SubNavBar.jsx/index.jsx";
import Icon from "../../../utils/icons";
import Avatar from "../../../components/Avatar";

//imports datagrid
import { Table, Tag } from "antd";
import useSearchDatagrid from "../../../hooks/useSearchDataGrid";
import DataGrid from "../../../components/shared/Admin/Data-grid";
import useModal from "../../../hooks/useModal";
import CustomModal from "../../../components/shared/Admin/CustomModal";
import CategoryLocalStatistics from "../../../components/Admin/categoryLocalStatistics";
import { useQuery } from "react-query";
import { getAllCategories } from "../../../services/Home";
import { getUserData } from "../../../services/user";
import AdminReviewCard from "../../../components/AdminReviewCard";
import DashboardLoader from "../../../components/Admin/localLoaders/dashboardLoader";

//dynamic data
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];

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
];

const DashBoard = () => {
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

  const { data: user, isLoading } = getUserData(2);
  console.log("user", user);

  return (
    <>
      <div className="flex flex-row  bg-admin-grey">
        <NavBar />

        <div className="w-full container mx-auto">
          {isLoading ? (
            <DashboardLoader />
          ) : (
            <>
              <div className="grid lg:grid-cols-6 lg:grid-flow-row auto-rows-max w-full  gap-5 h-fill md:mt-8 mt-32 ">
                <div className="col-span-6 lg:col-span-4  flex justify-between items-center  p-10 rounded-2xl shadow-md bg-white">
                  <div>
                    <h2 className=" text-3xl font-medium">
                      Hi {user?.data?.user?.username} !{" "}
                    </h2>
                    <p className=" mt-6">Welcome to your Dashboard</p>
                  </div>
                  <div className="">
                    <img src="../../../src/assets/images/Admin/hi.png" />
                  </div>
                </div>

                <div className="2xs:col-span-6 lg:col-span-2 row-span-3 rounded-2xl shadow-md bg-white p-8">
                  <AdminReviewCard totalReviews="100" />
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
                  <CardIcon
                    name="suitcase"
                    title="Total Earnings"
                    generalStatistics="34,123.00 "
                    type="EGP"
                  />
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
                  <CardIcon
                    name="layers"
                    title="Total Tours"
                    generalStatistics="34,123.00 "
                    type="Tours"
                  />
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
                  <CardIcon
                    name="shadedUser"
                    title="Today Views"
                    generalStatistics="22"
                    type="Views"
                  />
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2 ">
                  <CardIcon
                    name="wallet"
                    title="Today Expense"
                    generalStatistics="22"
                    type="EGP"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-12  auto-rows-max w-full  gap-5 h-fill md:mt-8 mt-32 ">
                <div className="col-span-12 lg:col-span-12 xl:col-span-4 shadow-xl rounded-2xl p-12 bg-white">
                  <div>
                    <h3 className=" text-2xl font-bold mb-8">
                      Tours By Category
                    </h3>
                    {user &&
                      Object.entries(user?.data?.stats?.categories).map(
                        ([key, value]) => {
                          return (
                            <CategoryLocalStatistics
                              key={key}
                              name={key}
                              tourNum={value}
                            />
                          );
                        }
                      )}
                  </div>
                </div>{" "}
                <div className="col-span-12 lg:col-span-12 xl:col-span-4 shadow-xl rounded-2xl p-12 bg-white">
                  {/* Top travelers */}
                  <h2 className="text-2xl mb-5">Top Travelers</h2>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-4 items-center">
                      <img
                        src="https://media.licdn.com/dms/image/C5603AQHOvcWzDuD9pQ/profile-displayphoto-shrink_800_800/0/1589972211462?e=2147483647&v=beta&t=kYzJrqWuPXYK99Fx8d3Sf6wGinr7OJhXHl2nv-R05gM"
                        className="rounded-full max-w-[70px] max-h-[70px]"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-[#585858] text-xl">
                          Magid Mostafa
                        </h3>
                        <h4 className="text-[#585858] text-lg">
                          magid@gmail.com
                        </h4>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <img
                        src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                        className="rounded-full max-w-[70px] max-h-[70px]"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-[#585858] text-xl">Rania Atef</h3>
                        <h4 className="text-[#585858] text-lg">
                          rania@gmail.com
                        </h4>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <img
                        src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
                        className="rounded-full max-w-[70px] max-h-[70px]"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-[#585858] text-xl">Jamila Ahmed</h3>
                        <h4 className="text-[#585858] text-lg">
                          jamila@gmail.com
                        </h4>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <img
                        src="https://pbs.twimg.com/profile_images/830302889977344001/kNGk9Hf2.jpg"
                        className="rounded-full max-w-[70px] max-h-[70px]"
                      />
                      <div className="">
                        <h3 className="text-[#585858] text-xl">Menna Kamal</h3>
                        <h4 className="text-[#585858] text-lg">
                          menna@gmail.com
                        </h4>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <img
                        src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
                        className="rounded-full max-w-[70px] max-h-[70px]"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-[#585858] text-xl">
                          Mostafa Mohamed
                        </h3>
                        <h4 className="text-[#585858] text-lg">
                          moustafa@gmail.com
                        </h4>
                      </div>
                    </div>

                    {/* </div> */}
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-12 xl:col-span-4 shadow-xl rounded-2xl p-12 bg-white">
                  <div>
                    <h3 className=" text-2xl font-bold mb-8">
                      Tours By Governorates
                    </h3>
                    {user &&
                      Object.entries(user?.data?.stats?.cities).map(
                        ([key, value]) => {
                          return (
                            <CategoryLocalStatistics
                              key={key}
                              name={key}
                              tourNum={value}
                            />
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
              <div className="rounded-2xl shadow-md mt-12 p-10 bg-white">
                <h2 className=" font-semibold text-xl">Latest Transaction</h2>
                <DataGrid data={data} columns={columns} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DashBoard;