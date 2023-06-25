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

import DataGridLoader from "../../../components/Admin/localLoaders/dataGridLoader/index.jsx";
import {
  getAllLocals,
  getAllTours,
  verifyOrganizerMutation,
} from "../../../services/mainAdmin.js";
import Avatar from "../../../components/Avatar/index.jsx";
import MainNavBar from "../../../components/mainAdmin/Admin-NavBar/index.jsx";

const placeholder =
  "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

const MainAdminAllLocals = () => {
  //-------------- State --------------
  const [localId, setLocalId] = useState(null);
  const [open, setOpen] = useState(false);

  const [frontIdentityPhoto, setFrontIdentityPhoto] = useState("");
  const [backIdentityPhoto, setBackIdentityPhoto] = useState("");

  //custom hook
  const { getColumnSearchProps } = useSearchDatagrid();

  const { data: locals, isLoading, isError } = getAllLocals();
  console.log("locals", locals);

  const { mutate: verifyMutate, isLoading: isVerifyLoading } =
    verifyOrganizerMutation(setOpen);

  //-------------- table row --------------

  //id- username - photo -phone  - no. of tours - verified /not verified

  const data = locals?.data?.map((local, index) => {
    return {
      key: index,
      _id: local?._id,
      localname: {
        name: local?.username,
        photo: local?.photo?.length > 0 ? local?.photo[0]?.url : placeholder,
      },
      phone: local?.phone ? local?.phone : "Unknown",

      jobProfile: local?.job_profile ? local?.job_profile : "Unknown",
      status: local?.verified,
      Action: {
        localId: local?._id,
        localFrontPhoto:
          local?.civil_photos?.front?.length > 0
            ? local?.civil_photos?.front[0]?.url
            : "",
        localBackPhoto:
          local?.civil_photos?.back?.length > 0
            ? local?.civil_photos?.back[0]?.url
            : "",
      },
    };
  });

  const showModal = (localId, frontPhoto, backPhoto) => {
    setLocalId(localId);
    setFrontIdentityPhoto(frontPhoto);
    setBackIdentityPhoto(backPhoto);
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
      title: "Job Profile",
      dataIndex: "jobProfile",
      key: "jobProfile",
      //search
      ...getColumnSearchProps("jobProfile"),
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
          {console.log("clicked on eye", props)}
          <div className="flex justify-center items-center gap-6 ">
            <button
              onClick={() =>
                showModal(
                  props.localId,
                  props.localFrontPhoto,
                  props.localBackPhoto
                )
              }
            >
              <Icon name="eye" />
            </button>
          </div>
        </>
      ),
    },
  ];

  //-------------- Handlers --------------
  const handleVerify = () => {
    verifyMutate(localId);
  };

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
        btnOk="Verify"
        handleOk={handleVerify}
        handleCancel={hideModal}
        loading={isVerifyLoading}
        title={
          <span className="text-primary-green font-bold 2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
            Verify the organizer of ID: {localId}
          </span>
        }
        header={`Check the organizer's photos`}
        message1={
          <span className="font-bold 2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
            Is it ok ?
          </span>
        }
        frontPhoto={frontIdentityPhoto}
        backPhoto={backIdentityPhoto}
        className="!w-[800px]"
      />
    </>
  );
};
export default MainAdminAllLocals;
