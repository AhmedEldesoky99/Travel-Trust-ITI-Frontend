import { Table, Tag } from "antd";

import AdminReviewCard from "../../components/AdminReviewCard/index.jsx";
import NavBar from "../../components/shared/Admin/Admin-NavBar/index.jsx";
import DataGrid from "../../components/shared/Admin/Data-grid/index.jsx";
import SubNavBar from "../../components/shared/Admin/SubNavBar.jsx";
import useModal from "../../hooks/useModal.jsx";
import useSearchDatagrid from "../../hooks/useSearchDataGrid.jsx";
import Icon from "../../utils/icons.jsx";
import Avatar from "../../components/Avatar/index.jsx";
import AdminReviewModal from "../../components/AdminReviewModal/index.jsx";
import { useState } from "react";
import { useAdminReviews } from "../../services/useAdminReviews.jsx";
import { useParams } from "react-router-dom";

const AdminReviews = () => {
  //-------------- State --------------
  //custom hook
  const { getColumnSearchProps } = useSearchDatagrid();
  const { loading, open, showModal, handleOk, handleCancel } = useModal();

  const [selected, setSelected] = useState({});

  const { organizerId } = useParams();
  const { AdminReviewsById } = useAdminReviews();
  const { data: reviews, isLoading, isError } = AdminReviewsById(organizerId);

  // console.log({ reviews });
  //-------------- table row --------------
  const data = reviews?.data.map((review, index) => {
    return {
      key: index,
      tourID: review?.tour._id,
      UserName: (
        <Avatar
          name={review?.user?.username}
          image={review?.user?.photo[0].url}
        />
      ),
      Review: review?.content,
      Rating: review?.rating,
    };
  });

  //-------------- table structure --------------
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
            {Rating}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "operation",
      //fixed column
      fixed: "right",
      width: 100,
      //action icons
      render: (props, record) => (
        <>
          {/* {console.log({ props })} */}
          <button
            onClick={() => {
              setSelected(props);
              showModal();
            }}
            className="flex justify-center items-center "
          >
            <Icon name="eye" />
          </button>
          <AdminReviewModal
            open={open}
            loading={loading}
            handleOk={handleOk}
            handleCancel={handleCancel}
            // title={review?.tour.title}
            travellerName={props.UserName.props.name}
            AdminImage={props.UserName.props.image}
            review={props.Review}
            rating={props.Rating}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-row">
        <NavBar />
        <div className="w-full mx-auto ">
          <SubNavBar />
          <div className="container mx-auto">
            <div className="md:grid md:grid-cols-12 gap-4">
              <div className="col-span-12 2xl:col-span-9 ">
                <DataGrid data={data} columns={columns} loading={isLoading} />
              </div>
              <div className="col-span-12 2xl:col-span-3">
                <AdminReviewCard totalReviews={reviews.length} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminReviews;
