import { Table, Tag } from "antd";

import "../../Admin/AdminAllTours/style.css"
import NavBar from "../../../components/shared/Admin/Admin-NavBar/index.jsx";
import DataGrid from "../../../components/shared/Admin/Data-grid/index.jsx";
import SubNavBar from "../../../components/shared/Admin/SubNavBar.jsx";
import useModal from "../../../hooks/useModal.jsx";
import useSearchDatagrid from "../../../hooks/useSearchDataGrid.jsx";
import Icon from "../../../utils/icons.jsx";
import CustomModal from "../../../components/shared/Admin/CustomModal/index.jsx";
import { useState } from "react";

const AdminAllTours = () => {
 

  //custom hook
  const { getColumnSearchProps } = useSearchDatagrid();
  const { loading, open, handleOk, showModal, handleCancel } = useModal();
 
  const [selected,setSelected] = useState({});

  const data = [
    {
      key: "1",
      tourID: "#123456",
      Title: "2 days private tour all  ...",
      Destination: "Alex",
      Price: "2 980EGP",
      startDate: "01.oct 2020",
      Status: "Published",
    },
    {
      key: "2",
      tourID: "#123456",
      Title: "4 days private tour all  ...",
      Destination: "Dahab",
      Price: "2 980EGP",
      startDate: "01.oct 2020",
      Status: "Expired",
    },
    {
      key: "3",
      tourID: "#123456",
      Title: "6 days private tour all  ...",
      Destination: "Ismailia",
      Price: "2 980EGP",
      startDate: "01.oct 2020",
      Status: "Published",
    },
    {
      key: "4",
      tourID: "#123456",
      Title: "2 days private tour all  ...",
      Destination: "Cairo",
      Price: "2 980EGP",
      startDate: "01.oct 2020",
      Status: "Draft",
    },
    {
      key: "5",
      tourID: "#123456",
      Title: "3 days private tour all  ...",
      Destination: "Fayoum",
      Price: "2 980EGP",
      startDate: "01.oct 2020",
      Status: "Published",
    },
    {
      key: "6",
      tourID: "#123456",
      Title: "2 days private tour all  ...",
      Destination: "Ismailia",
      Price: "2 980EGP",
      startDate: "01.oct 2020",
      Status: "Expired",
    },
  ];

  //table structure
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
      title: "Title",
      dataIndex: "Title",
      key: "Title",
      //   width: "20%",
      //search
      ...getColumnSearchProps("Title"),
    },
    {
      title: "Destination",
      dataIndex: "Destination",
      key: "Destination",
      // width: "40%",

      //search
      ...getColumnSearchProps("Review"),
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
      // width: "40%",

      //search
      ...getColumnSearchProps("Price"),
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      // width: "40%",

      //search
      ...getColumnSearchProps("Review"),
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",      //search
      ...getColumnSearchProps("Status"),
      render: (_, { Status }) => {
        let color = "#009EB7";
        if (Status === "Expired") {
          color = "#DB3A34";
        } else if (Status === "Draft") {
          color = "#81CCD8";
        }
        return <Tag style={{width:"100px", fontSize :"16px" ,padding:"6px",textAlign:"center"}} color={color}>{Status}</Tag>;
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
          {console.log({ props })}
          <div
            className="flex justify-center items-center gap-6 "
          >
            <button><Icon name="eye"/></button>
            <button><Icon name="edit"/></button>
            <button  onClick={() => {
              setSelected(props)
              showModal();
            }}><Icon name="delete"  /></button>
          </div>
         
        </>
      ),
    },
  ];

  return (
    <>
     <CustomModal
            open={open}
            loading={loading}
            handleOk={handleOk}
            handleCancel={handleCancel}
            title="You Are About To Delete This Tour"
            message1="This Will Delete It From Your History"
            message2="Are You Sure ?"
          />
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
