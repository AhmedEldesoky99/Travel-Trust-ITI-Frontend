import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Table, Tag } from "antd";

import MainNavBar from "../../../components/mainAdmin/Admin-NavBar/index.jsx";
import DataGrid from "../../../components/shared/Admin/Data-grid/index.jsx";
import Icon from "../../../utils/icons.jsx";
import CustomModal from "../../../components/shared/Admin/CustomModal/index.jsx";

import useSearchDatagrid from "../../../hooks/useSearchDataGrid.jsx";

import DataGridLoader from "../../../components/Admin/localLoaders/dataGridLoader/index.jsx";
import { getAllLocals, getAllTours } from "../../../services/mainAdmin.js";
import Avatar from "../../../components/Avatar/index.jsx";

const placeholder =
  "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

const MainAdminAllLocals = () => {
  //-------------- State --------------
  const [tourID, setTourId] = useState(null);
  const [open, setOpen] = useState(false);

  //custom hook
  const { getColumnSearchProps } = useSearchDatagrid();

  const { data: locals, isLoading, isError } = getAllLocals();
  console.log("locals", locals);
  //-------------- table row --------------

  //id- username - photo -phone  - no. of tours - verified /not verified

  const data = locals?.data?.map((local, index) => {
    return {
      key: index,
      _id: local?._id,
      localname: {
        name: local?.username,
        photo: local?.photo[0]?.url ? local?.photo[0]?.url : placeholder,
      },
      phone: local?.phone,

      toursNum: "",
      status: local?.verified,
      Action: local?._id,
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
      title: "Local ID",
      dataIndex: "_id",
      key: "_id",
      width: "6%",
      //search
      ...getColumnSearchProps("_id"),
    },
    {
      title: "Local",
      dataIndex: "localname",
      key: "localname",

      //search
      ...getColumnSearchProps("localname"),
      render: (props) => (
        <>
          {console.log({ props })}
          <Avatar name={props.name} image={props.photo} />
        </>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",

      //search
      ...getColumnSearchProps("phone"),
    },

    {
      title: "Total Tours",
      dataIndex: "toursNum",
      key: "toursNum",
      //search
      ...getColumnSearchProps("toursNum"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status", //search
      ...getColumnSearchProps("status"),
      render: (_, { status }) => {
        let color = "rgb(0, 158, 183,0.8)";
        if (status) {
          color = "rgb(129, 204, 216,0.8)";
          status = "verified";
        } else {
          color = "rgb(219, 58, 52,0.8)";
          status = "Not verified";
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
export default MainAdminAllLocals;
