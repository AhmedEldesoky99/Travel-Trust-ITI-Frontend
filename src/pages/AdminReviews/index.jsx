import { Table, Tag } from "antd";

import AdminReviewCard from "../../components/AdminReviewCard/index.jsx";
import NavBar from "../../components/shared/Admin/Admin-NavBar/index.jsx";
import DataGrid from "../../components/shared/Admin/Data-grid/index.jsx";
import SubNavBar from "../../components/shared/Admin/SubNavBar.jsx";
import useModal from "../../hooks/useModal.jsx";
import useSearchDatagrid from "../../hooks/useSearchDataGrid.jsx";
import Icon from "../../utils/icons.jsx";
import CustomModal from "../../components/shared/Admin/CustomModal/index.jsx";
import Avatar from "../../components/Avatar/index.jsx";
import AdminReviewModal from "../../components/AdminReviewModal/index.jsx";

const AdminReviews = () => {
  //custom hook
  const { getColumnSearchProps } = useSearchDatagrid();
  const { loading, open, showModal, handleOk, handleCancel } = useModal();

  const data = [
    {
      key: "1",
      tourID: "#123456",
      UserName: (
        <Avatar
          name="magid moustafa"
          image="https://media.istockphoto.com/id/108271508/photo/young-gray-cat.jpg?s=612x612&w=0&k=20&c=Cnra41iZ85qkZGDJB3cDNQ41BTg0vgl11Mlgu-OpjwM="
        />
      ),
      Review: "Our stay was pleasant and welcoming. We stayed...",
      Rating: 4.5,
    },
    {
      key: "2",
      tourID: "#123456",
      UserName: (
        <Avatar
          name="mai moustafa"
          image="https://media.istockphoto.com/id/108271508/photo/young-gray-cat.jpg?s=612x612&w=0&k=20&c=Cnra41iZ85qkZGDJB3cDNQ41BTg0vgl11Mlgu-OpjwM="
        />
      ),
      Review: "Our stay was pleasant and welcoming. We stayed...",
      Rating: 3.2,
    },
    {
      key: "3",
      tourID: "#123456",
      UserName: (
        <Avatar
          name="mai moustafa"
          image="https://media.istockphoto.com/id/108271508/photo/young-gray-cat.jpg?s=612x612&w=0&k=20&c=Cnra41iZ85qkZGDJB3cDNQ41BTg0vgl11Mlgu-OpjwM="
        />
      ),
      Review: "Our stay was pleasant and welcoming. We stayed...",
      Rating: 1.3,
    },
    {
      key: "4",
      tourID: "#123456",
      UserName: (
        <Avatar
          name="mai moustafa"
          image="https://media.istockphoto.com/id/108271508/photo/young-gray-cat.jpg?s=612x612&w=0&k=20&c=Cnra41iZ85qkZGDJB3cDNQ41BTg0vgl11Mlgu-OpjwM="
        />
      ),
      Review: "Our stay was pleasant and welcoming. We stayed...",
      Rating: 4.5,
    },
    {
      key: "5",
      tourID: "#123456",
      UserName: (
        <Avatar
          name="mai moustafa"
          image="https://media.istockphoto.com/id/108271508/photo/young-gray-cat.jpg?s=612x612&w=0&k=20&c=Cnra41iZ85qkZGDJB3cDNQ41BTg0vgl11Mlgu-OpjwM="
        />
      ),
      Review: "Our stay was pleasant and welcoming. We stayed...",
      Rating: 1.3,
    },
    {
      key: "6",
      tourID: "#123456",
      UserName: (
        <Avatar
          name="mai moustafa"
          image="https://media.istockphoto.com/id/108271508/photo/young-gray-cat.jpg?s=612x612&w=0&k=20&c=Cnra41iZ85qkZGDJB3cDNQ41BTg0vgl11Mlgu-OpjwM="
        />
      ),
      Review: "Our stay was pleasant and welcoming. We stayed...",
      Rating: 3.2,
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
      title: "User Name",
      dataIndex: "UserName",
      key: "UserName",
      //   width: "20%",
      //search
      ...getColumnSearchProps("UserName"),
    },
    {
      title: "Review",
      dataIndex: "Review",
      key: "Review",
      width: "40%",

      //search
      ...getColumnSearchProps("Review"),
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      key: "Rating",
      //search
      ...getColumnSearchProps("Rating"),
      render: (_, { Rating }) => {
        let color = "#009EB7";
        if (Rating < 2) {
          color = "#DB3A34";
        } else if (Rating < 4) {
          color = "#81CCD8";
        }
        return <Tag color={color}>{Rating}</Tag>;
      },
    },
    {
      title: "Action",
      key: "operation",
      //fixed column
      fixed: "right",
      width: 100,
      //action icons
      render: (_, record) => (
        <>
          {/* {console.log({ key: record.key })} */}
          <button
            onClick={showModal}
            className="flex justify-center items-center "
          >
            <Icon name="eye" />
          </button>
          <AdminReviewModal
            open={open}
            loading={loading}
            handleOk={handleOk}
            handleCancel={handleCancel}
            title="2 Days Private Tour All Inclusive, Cairo and Giza Attractions"
            travellerName="Magid Mostafa"
            review=" Our stay was pleasant and welcoming. We stayed in an apartment
            meant for 3 adults with kitchen facilities. The cleaning services
             were superp. We liked the laundry and kitchen cleaning services on
            top of the regular cleaning services. The support services were
             prompt...much needed extra bowls were delivered in a jiffy. Front
             desk were very cotdial and helpful though working under at times.
             Needed travel arrangements and info were delivered with smiles.
             Delivering luggeges to the room was done witbout request.?"
          />
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-row">
        <NavBar />
        <div className="w-full container mx-auto ">
          <SubNavBar />
          <div className="lg:grid lg:grid-cols-12 gap-6">
            <div className="col-span-12 2xl:col-span-8">
              <DataGrid data={data} columns={columns} />{" "}
            </div>
            <div className="col-span-12 lg:col-span-4">
              <AdminReviewCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminReviews;
