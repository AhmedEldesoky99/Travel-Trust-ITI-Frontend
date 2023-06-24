import { useState } from "react";

import { Table, Tag } from "antd";

import AdminReviewCard from "../../../components/AdminReviewCard";
import NavBar from "../../../components/shared/Admin/Admin-NavBar/index.jsx";
import DataGrid from "../../../components/shared/Admin/Data-grid/index.jsx";
import SubNavBar from "../../../components/shared/Admin/SubNavBar.jsx";

import useSearchDatagrid from "../../../hooks/useSearchDataGrid.jsx";

import ReviewPageLoader from "../../../components/Admin/localLoaders/reviewPageLoader/index.jsx";
import Icon from "../../../utils/icons.jsx";
import AdminReviewModal from "../../../components/AdminReviewModal/index.jsx";
import CustomModal from "../../../components/shared/Admin/CustomModal";
import { mainAdminReviewsById } from "../../../services/mainAdmin";
import Avatar from "../../../components/Avatar";

const placeholder =
  "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

const MainAdminReviews = () => {
  //-------------- State --------------
  const [open, setOpen] = useState(false);
  const [reviewID, setReviewId] = useState(null);
  const [reviewContent, setReviewContetn] = useState(null);

  //custom hook
  const { getColumnSearchProps } = useSearchDatagrid();

  const { data: reviews, isLoading, isError } = mainAdminReviewsById();

  console.log({ reviews });

  const showModal = ({ display, props }) => {
    if (display === "show") {
      setReviewContetn(props);
    } else {
      setReviewId(props);
    }
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
          <p className="max-w-xs truncate">{props}</p>
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
      width: 150,
      //action icons
      render: (props) => (
        <>
          {console.log({ props })}

          <div className="flex justify-center items-center gap-6 ">
            <button
              onClick={() => {
                showModal({ display: "show", props: props });
              }}
            >
              <Icon name="eye" />
            </button>

            <button>
              <Icon name="edit" />
            </button>

            <button
              onClick={() => {
                showModal({ display: "delete", props: reviewID });
              }}
            >
              <Icon name="delete" />
            </button>
          </div>
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
        <CustomModal
          open={open}
          iconName="delete"
          btnOk="Delete"
          // handleOk={() => handleDelete(tourID)}
          handleCancel={hideModal}
          // loading={DeleteTourByIdmutation.isLoading}
          header={`You Are About To Delete This Tour ID:  ${reviewID}`}
          message1="This Will Delete It From Your History"
          message2="Are You Sure ?"
        />
      </div>
    </>
  );
};
export default MainAdminReviews;
