import { useState } from "react";
import { Link } from "react-router-dom";

import { Table, Tag } from "antd";
import moment from "moment";
import useSearchDatagrid from "../../../hooks/useSearchDataGrid";
import { getAllTours } from "../../../services/mainAdmin";

import DataGridLoader from "../../../components/Admin/localLoaders/dataGridLoader";
import DataGrid from "../../../components/shared/Admin/Data-grid";
import CustomModal from "../../../components/shared/Admin/CustomModal";
import Avatar from "../../../components/Avatar";

import MainNavBar from "../../../components/mainAdmin/Admin-NavBar/index.jsx";
import Icon from "../../../utils/icons";

const placeholder =
  "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

const MainAdminAllTours = () => {
  //-------------- State --------------
  const [tourID, setTourId] = useState(null);

  const [open, setOpen] = useState(false);

  //custom hook
  const { getColumnSearchProps } = useSearchDatagrid();

  const { data: tours, isLoading, isError } = getAllTours();
  console.log("tours", tours);
  //-------------- table row --------------
  const data = tours?.data.map((tour, index) => {
    return {
      key: index,
      _id: tour?._id,
      title: tour?.title,
      local: {
        name: tour?.organizer?.username,
        photo: tour?.organizer?.photo[0]?.url,
      },
      city: tour?.city?.title,
      price_per_person: tour?.price_per_person,
      start_date: moment(tour?.start_date).format("MMMM Do YYYY"),
      status: tour?.status,
      Action: tour?._id,
    };
  });

  // const handleDelete = (tourId) => {
  //   DeleteTourByIdmutation.mutate(tourId);
  //   setOpen(false);
  // };

  const showModal = (id) => {
    setTourId(id);
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  //-------------- table structure --------------
  const columns = [
    Table.SELECTION_COLUMN,
    {
      title: "Tour ID",
      dataIndex: "_id",
      key: "_id",
      width: "6%",
      //search
      ...getColumnSearchProps("_id"),
    },
    {
      title: "Local",
      dataIndex: "local",
      key: "local",
      width: "15%",
      //search
      ...getColumnSearchProps("local"),
      render: (props) => (
        <>
          {console.log({ props })}
          <Avatar
            name={props.name}
            image={props.photo ? props.photo : placeholder}
          />
        </>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "25%",
      //search
      ...getColumnSearchProps("title"),
      render: (props) => (
        <>
          {/* {console.log({ props })} */}
          <p className=" max-w-lg truncate">{props}</p>
        </>
      ),
    },
    {
      title: "Governorate",
      dataIndex: "city",
      key: "city",
      width: "10%",
      //search
      ...getColumnSearchProps("city"),
    },
    {
      title: "Price ($$)",
      dataIndex: "price_per_person",
      key: "price_per_person",
      //search
      ...getColumnSearchProps("price_per_person"),
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
      width: "10%",
      //search
      ...getColumnSearchProps("start_date"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status", //search
      ...getColumnSearchProps("status"),
      render: (_, { status }) => {
        let color = "rgb(0, 158, 183,0.8)";
        if (status === "expired") {
          color = "rgb(219, 58, 52,0.8)";
        } else if (status === "draft") {
          color = "rgb(129, 204, 216,0.8)";
        }
        return (
          <Tag
            style={{
              width: "100px",
              fontSize: "16px",
              padding: "6px",
              textAlign: "center",
              borderRadius: "50px",
            }}
            color={color}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action", //search
      //fixed column
      fixed: "right",
      width: 150,
      //action icons
      render: (props) => (
        <>
          <div className="flex justify-center items-center gap-6 ">
            <Link to={`/admin/tour-details/${props}/${props}`}>
              <button>
                <Icon name="eye" />
              </button>
            </Link>

            <Link to={`/local/tour/${props}`}>
              <button>
                <Icon name="edit" />
              </button>
            </Link>
            <button
              onClick={() => {
                showModal(props);
              }}
            >
              <Icon name="delete" />
            </button>
          </div>
        </>
      ),
    },
  ];

  //-------------- Handlers --------------

  return (
    <>
      <div className="flex flex-row">
        <MainNavBar />
        <div className="w-full container mx-auto ">
          {isLoading ? (
            <DataGridLoader />
          ) : (
            <div className="lg:grid lg:grid-cols-12 gap-6">
              <div className=" lg:col-span-12">
                <DataGrid data={data} columns={columns} loading={isLoading} />
              </div>
            </div>
          )}
        </div>
      </div>
      <CustomModal
        open={open}
        iconName="delete"
        btnOk="Delete"
        // handleOk={() => handleDelete(tourID)}
        handleCancel={hideModal}
        // loading={DeleteTourByIdmutation.isLoading}
        title={`You Are About To Delete This Tour of ID:  ${tourID}`}
        header={`You Are About To Delete This Tour ID:  ${tourID}`}
        message1="This Will Delete It From Your History"
        message2="Are You Sure ?"
      />
    </>
  );
};
export default MainAdminAllTours;
