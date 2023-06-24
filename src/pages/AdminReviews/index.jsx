import { useState } from "react";
import { useParams } from "react-router-dom";

import { Table, Tag } from "antd";

import AdminReviewCard from "../../components/AdminReviewCard/index.jsx";
import NavBar from "../../components/shared/Admin/Admin-NavBar/index.jsx";
import DataGrid from "../../components/shared/Admin/Data-grid/index.jsx";
import SubNavBar from "../../components/shared/Admin/SubNavBar.jsx";

import Icon from "../../utils/icons.jsx";
import Avatar from "../../components/Avatar/index.jsx";
import AdminReviewModal from "../../components/AdminReviewModal/index.jsx";

import useSearchDatagrid from "../../hooks/useSearchDataGrid.jsx";
import { useAdminReviews } from "../../services/useAdminReviews.jsx";

import ReviewPageLoader from "../../components/Admin/localLoaders/reviewPageLoader/index.jsx";

const placeholder =
  "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

const AdminReviews = () => {
  //-------------- State --------------
  const [open, setOpen] = useState(false);
  const [reviewContent, setReviewContetn] = useState(null);

  //custom hook
  const { getColumnSearchProps } = useSearchDatagrid();
  // const { loading, open, showModal, handleOk, handleCancel } = useModal();

  const { organizerId } = useParams();
  const { AdminReviewsById } = useAdminReviews([0, 1, 2, 3]);
  const { data: reviews, isLoading, isError } = AdminReviewsById(organizerId);

  console.log({ reviews });

  const showModal = (props) => {
    setReviewContetn(props);
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  //-------------- table row --------------
  const data = reviews?.data?.map((review, index) => {
    return {
      key: index,
      tourID: review?.tour?._id,
      UserName: (
        <Avatar
          name={review?.user?.username}
          image={
            review?.user?.photo[0]?.url
              ? review?.user?.photo[0]?.url
              : placeholder
          }
        />
      ),
      Review: [
        review?.tour?.title,
        review?.content,
        review?.user?.username,
        review?.user?.photo[0]?.url,
      ],
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
      width: "8%",
      //fixed column  NOTE: Do not use percentage
      // width: 150,
      // fixed: "left",
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
      width: "50%",

      //search
      ...getColumnSearchProps("Review"),
      render: (props) => (
        <>
          {/* {console.log({ props })} */}
          <p className="max-w-xs truncate capitalize">{props}</p>
        </>
      ),
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      key: "Rating",
      //search
      ...getColumnSearchProps("Rating"),
      render: (_, { Rating }) => {
        let color = "rgb(0, 158, 183,0.8)";
        if (Rating < 2) {
          color = "rgb(219, 58, 52,0.8)";
        } else if (Rating < 4) {
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
      render: (props) => (
        <>
          {console.log({ props })}
          <button
            onClick={() => {
              showModal(props);
            }}
            className="flex justify-center items-center "
          >
            <Icon name="eye" />
          </button>
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
            {isLoading ? (
              <ReviewPageLoader />
            ) : (
              <div className="md:grid md:grid-cols-12 gap-4">
                <div className="col-span-12 2xl:col-span-9 ">
                  <DataGrid data={data} columns={columns} loading={isLoading} />
                </div>
                <div className="col-span-12 2xl:col-span-3">
                  <AdminReviewCard totalReviews={reviews?.length} />
                </div>
              </div>
            )}
          </div>
          {reviewContent && (
            <AdminReviewModal
              open={open}
              loading={isLoading}
              btnOk="Close"
              handleOk={hideModal}
              handleCancel={hideModal}
              tourTitle={reviewContent?.Review[0]}
              travellerName={reviewContent?.Review[2]}
              AdminImage={reviewContent?.Review[3]}
              review={reviewContent?.Review[1]}
              rating={reviewContent?.Rating}
            />
          )}
        </div>
        {console.log({ reviewContent })}
      </div>
    </>
  );
};
export default AdminReviews;
