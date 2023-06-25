import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Table, Tag } from "antd";
import moment from "moment";

import NavBar from "../../../components/shared/Admin/Admin-NavBar/index.jsx";
import SubNavBar from "../../../components/shared/Admin/SubNavBar.jsx";
import DataGrid from "../../../components/shared/Admin/Data-grid/index.jsx";
import Icon from "../../../utils/icons.jsx";
import CustomModal from "../../../components/shared/Admin/CustomModal/index.jsx";

import useSearchDatagrid from "../../../hooks/useSearchDataGrid.jsx";

import { useTour } from "../../../services/useTour.jsx";

import DataGridLoader from "../../../components/Admin/localLoaders/dataGridLoader/index.jsx";

const AdminAllTours = () => {
  //-------------- State --------------
  const [tourID, setTourId] = useState(null);
  const { organizerId } = useParams();
  const [open, setOpen] = useState(false);

  //custom hook
  const { getColumnSearchProps } = useSearchDatagrid();

  const { OrganizerTours, DeleteTourByIdmutation } = useTour();
  const { data: tours, isLoading, isError } = OrganizerTours(organizerId);
  const { mutate, isLoading: isDelete } = DeleteTourByIdmutation();
  //-------------- table row --------------
  const data = tours?.data.map((tour, index) => {
    return {
      key: index,
      _id: tour?._id,
      title: tour?.title,
      city: tour?.city?.title,
      price_per_person: tour?.price_per_person,
      start_date: moment(tour?.start_date).format("MMMM Do YYYY"),
      status: tour?.status,
      Action: tour?._id,
    };
  });

  const handleDelete = (tourId) => {
    mutate(tourId);
    setOpen(false);
  };

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
      //fixed column  NOTE: Do not use percentage
      width: "10%",
      //search
      ...getColumnSearchProps("_id"),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "30%",
      //search
      ...getColumnSearchProps("title"),
      render: (props) => (
        <>
          {/* {console.log({ props })} */}
          <p className=" max-w-lg truncate capitalize">{props}</p>
        </>
      ),
    },
    {
      title: "Governorate",
      dataIndex: "city",
      key: "city",

      //search
      ...getColumnSearchProps("city"),
    },
    {
      title: "Price",
      dataIndex: "price_per_person",
      key: "price_per_person",

      //search
      ...getColumnSearchProps("price_per_person"),
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",

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
      width: 200,
      //action icons
      render: (props) => (
        <>
          <div className="flex justify-center items-center gap-6 ">
            <Link to={`/local/tour-details/${props}/${organizerId}`}>
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
                // setSelected(props);
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
      <div className="flex flex-row bg-admin-grey ">
        <NavBar />
        <div className="w-full container mx-auto ">
          {/* <SubNavBar /> */}
          {isLoading ? (
            <DataGridLoader />
          ) : (
            <div className="lg:grid lg:grid-cols-12 gap-6 mt-32 md:mt-8">
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
        handleOk={() => handleDelete(tourID)}
        handleCancel={hideModal}
        loading={isDelete}
        header={`You Are About To Delete This Tour ID:  ${tourID}`}
        message1="This Will Delete It From Your History"
        message2="Are You Sure ?"
      />
    </>
  );
};
export default AdminAllTours;
