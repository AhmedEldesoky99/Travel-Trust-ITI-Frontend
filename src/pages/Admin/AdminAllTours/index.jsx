import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Table, Tag } from "antd";
import moment from "moment";

import NavBar from "../../../components/shared/Admin/Admin-NavBar/index.jsx";
import SubNavBar from "../../../components/shared/Admin/SubNavBar.jsx";
import DataGrid from "../../../components/shared/Admin/Data-grid/index.jsx";
import Icon from "../../../utils/icons.jsx";
import CustomModal from "../../../components/shared/Admin/CustomModal/index.jsx";

import useModal from "../../../hooks/useModal.jsx";
import useSearchDatagrid from "../../../hooks/useSearchDataGrid.jsx";
import { useTour } from "../../../services/useTour.jsx";

const AdminAllTours = () => {
  //-------------- State --------------
  const [selected, setSelected] = useState({});

  const { organizerId } = useParams();

  //custom hook
  const { getColumnSearchProps } = useSearchDatagrid();
  const { loading, open, handleOk, showModal, handleCancel } = useModal();

  //-------------- table structure --------------
  const { OrganizerTours, DeleteTourByIdmutation } = useTour();
  const { data: tours, isLoading, isError } = OrganizerTours(organizerId);
  const { mutate } = DeleteTourByIdmutation;
  // console.log("organizerId", organizerId);
  // console.log("tours", tours);

  const data = tours?.data.map((tour, index) => {
    return {
      key: index,
      _id: tour._id,
      title: tour.title,
      city: tour.city.title,
      price_per_person: tour.price_per_person,
      start_date: moment(tour.start_date).format("MMMM Do YYYY"),
      status: tour.status,
    };
  });

  const handleDelete = (tourId) => {
    DeleteTourByIdmutation.mutate(tourId);
  };

  //-------------- table structure --------------
  const columns = [
    Table.SELECTION_COLUMN,
    {
      title: "Tour ID",
      dataIndex: "_id",
      key: "_id",
      //fixed column  NOTE: Do not use percentage
      width: 150,
      fixed: "left",
      //search
      ...getColumnSearchProps("_id"),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",

      //search
      ...getColumnSearchProps("title"),
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
        let color = "#009EB7";
        if (status === "Expired") {
          color = "#DB3A34";
        } else if (status === "Draft") {
          color = "#81CCD8";
        }
        return (
          <Tag
            style={{
              width: "100px",
              fontSize: "16px",
              padding: "6px",
              textAlign: "center",
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
      key: "operation",
      //fixed column
      fixed: "right",
      width: 200,
      //action icons
      render: (props) => (
        <>
          {/* {console.log({ props })} //each tour */}
          <div className="flex justify-center items-center gap-6 ">
            <button>
              <Icon name="eye" />
            </button>
            <Link to={`/admin/tour/${props._id}`}>
              <button>
                <Icon name="edit" />
              </button>
            </Link>
            <button
              onClick={() => {
                setSelected(props);
                showModal();
                // handleDelete(props._id);
              }}
            >
              <Icon name="delete" />
            </button>
          </div>
          <CustomModal
            open={open}
            loading={loading}
            handleOk={() => handleDelete(props._id)}
            handleCancel={handleCancel}
            title="You Are About To Delete This Tour"
            message1="This Will Delete It From Your History"
            message2="Are You Sure ?"
          />
        </>
      ),
    },
  ];

  //-------------- Handlers --------------

  return (
    <>
      <div className="flex flex-row">
        <NavBar />
        <div className="w-full container mx-auto ">
          <SubNavBar />
          <div className="lg:grid lg:grid-cols-12 gap-6">
            <div className=" lg:col-span-12">
              <DataGrid data={data} columns={columns} />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminAllTours;
