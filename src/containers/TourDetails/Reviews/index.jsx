import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Rate } from "antd";
import { Modal } from "antd";

import CheckoutCard from "../../../components/shared/CheckoutCard";
import ReviewCard from "../../../components/shared/ReviewCard";
import CustomButton from "../../../components/shared/CustomButton";

import { getUserData } from "./../../../services/user";
import { useTour } from "../../../services/useTour";

import anonymous from "../../../assets/images/UserProfile/userprofile.png";

const Reviews = ({ data }) => {
  //! ------------- States -----------------

  //! comment states for create
  const [commentRate, setCommentRate] = useState(1);
  const [commentContent, setCommentContent] = useState("");
  const commentTitle = data?.data?.title;

  //! comment states for update
  const [commentUpdateRate, setCommentUpdateRate] = useState(1);
  const [commentUpdateContent, setCommentUpdateContent] = useState("");
  const [commentId, setCommentId] = useState(null);

  //! Modal states for update & delete
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  //! current user data
  const userId = localStorage.getItem("userId");
  const {
    data: userData,
    isLoading: Loading,
    isError: Error,
  } = getUserData(userId);

  const { id } = useParams();
  const {
    getTourComments,
    createTourComment,
    updateTourCommentMutation,
    deleteTourCommentMutation,
  } = useTour();

  const { data: comments, isLoading, isError, error } = getTourComments(id);
  console.log(comments);
  const {
    mutate,
    isLoading: commentLoading,
    isError: isCommentError,
    error: commentError,
  } = createTourComment();
  const {
    mutate: updateMutate,
    isLoading: isUpdateLoading,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
  } = updateTourCommentMutation(setOpenModal);

  const {
    mutate: deleteMutate,
    isLoading: isDeleteLoading,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = deleteTourCommentMutation(setOpenDeleteModal);

  //! ---------- Handlers -------------

  //! handlers for create comment
  const handleCommentRate = (value) => {
    setCommentRate(value);
  };

  const handleContentChange = (e) => {
    setCommentContent(e.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    const commentData = {
      title: commentTitle,
      content: commentContent,
      rating: commentRate,
    };
    console.log(commentData);
    mutate({ id, ...commentData });
    setCommentContent("");
    setCommentRate(1);
  };

  //! //! handlers for update & delete comment
  const showModal = (type, content, rating, commentId) => {
    type === "delete" ? setOpenDeleteModal(true) : setOpenModal(true);
    setCommentUpdateRate(rating);
    setCommentUpdateContent(content);
    setCommentId(commentId);
  };

  const handleCancel = (type) => {
    type === "delete" ? setOpenDeleteModal(false) : setOpenModal(false);
  };

  const handleCommentUpdateRate = (value) => {
    setCommentUpdateRate(value);
  };

  const handleContentUpdateChange = (e) => {
    setCommentUpdateContent(e.target.value);
  };

  const handleEditComment = (e) => {
    e.preventDefault();
    const updatedData = {
      title: commentTitle,
      content: commentUpdateContent,
      rating: commentUpdateRate,
    };

    updateMutate({ commentId, ...updatedData });
  };

  const handleDeleteComment = (e) => {
    e.preventDefault();
    deleteMutate(commentId);
  };
 

  return (
    <section className="container grid 2xs:grid-cols-1 lg:grid-cols-12">
      <div className="2xs:col-span-1 lg:col-span-8">
        <div>
          <h3 className="font-bold mb-5 2xs:text-base sm:text-lg 2xl:text-2xl">
            Reviews ({comments?.data?.length})
          </h3>

          <div className="grid 2xs:col-span-1 2xs:grid-cols-1 lg:col-span-8 lg:grid-cols-8 gap-4">
            {comments?.data?.map((comment) => (
              <ReviewCard
                key={comment?._id}
                username={comment?.user?.username}
                content={comment?.content}
                userImg={comment?.user?.photo[0]?.url}
                rating={comment?.rating}
                userId={comment?.user?._id}
                showModal={showModal}
                commentId={comment?._id}
              />
            ))}

            <div className="2xs:col-span-1 lg:col-span-8 flex 2xs:flex-col 2xs:items-start lg:flex-row justify-between items-center my-5">
              <p className="font-bold  2xs:text-base sm:text-lg 2xl:text-2xl">
                Your Opinion Matters To Us
              </p>
              <div>
                <p className="2xs:text-sm sm:text-base 2xl:text-2xl">
                  Rate us from 1 to 5
                </p>
                <Rate onChange={handleCommentRate} value={commentRate} />
              </div>
            </div>

            <div className="2xs:col-span-1 lg:col-span-1 ">
              <div className="avatar">
                <div className="2xs:w-24 lg:w-full rounded-full">
                  <Link to={`/user-profile/${userData?.data?.user._id}`}>
                    <img
                      src={userData?.data?.user.photo[0]?.url || anonymous}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleAddComment}
              className="2xs:col-span-1 lg:col-span-7"
            >
              <div>
                <textarea
                  name="content"
                  value={commentContent}
                  onChange={handleContentChange}
                  className="textarea textarea-bordered w-full md:textarea-lg resize-none focus:outline-none"
                  placeholder="Share details of your own experience at this place !"
                ></textarea>
                <div className="flex justify-end">
                  <CustomButton
                    isLoading={commentLoading}
                    submit="submit"
                    value="Add Review"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="2xs:col-span-1 lg:col-span-1"></div>
      <div className="2xs:col-span-1 lg:col-span-3 2xs:mt-10 lg:mt-0">
        <CheckoutCard data={data?.data} />
      </div>

      {/* //! Edit Comment Modal */}
      <Modal
        title="Edit your comment"
        open={openModal}
        onCancel={() => handleCancel("edit")}
        footer={null}
        centered
      >
        <div className="mb-4">
          <p className="2xs:text-sm sm:text-base 2xl:text-2xl">
            Rate us from 1 to 5
          </p>
          <Rate onChange={handleCommentUpdateRate} value={commentUpdateRate} />
        </div>

        <form
          onSubmit={handleEditComment}
          className="2xs:col-span-1 lg:col-span-7"
        >
          <div>
            <textarea
              value={commentUpdateContent}
              onChange={handleContentUpdateChange}
              className="textarea textarea-bordered w-full md:textarea-lg resize-none focus:outline-none"
              placeholder="Share details of your own experience at this place !"
            ></textarea>
            <div className="flex justify-end gap-2 mt-4">
              <CustomButton
                onClick={() => handleCancel("edit")}
                type="quadruple"
                submit="button"
                value="Cancel"
                width="w-18"
              />
              <CustomButton
                isLoading={isUpdateLoading}
                submit="submit"
                value="Save"
                width="w-28"
              />
            </div>
          </div>
        </form>
      </Modal>

      {/* //! Delete Comment Modal */}
      <Modal
        title={
          <span className="2xs:text-base md:text-lg 2xl:text-xl w-">
            Are you sure you want to delete this comment?
          </span>
        }
        open={openDeleteModal}
        onCancel={() => handleCancel("delete")}
        footer={null}
        centered
      >
        <p className="2xs:text-sm sm:text-base 2xl:text-lg">
          This will delete the item permanently
        </p>
        <div className="flex justify-end gap-2 mt-5">
          <button
            onClick={() => handleCancel("delete")}
            className="2xs:text-sm md:text-base 2xl:text-lg normal-case btn bg-transparent h-[2.5rem] min-h-[2.5rem] border border-solid border-black text-black py-1 px-2 rounded-lg hover:bg-black hover:text-white transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteComment}
            className={` ${
              isDeleteLoading ? "loading" : ""
            } font-semibold 2xs:text-base md:text-lg 2xl:text-xl normal-case btn bg-transparent h-[2.5rem] min-h-[2.5rem] border border-solid border-tertiary-red text-tertiary-red py-1 px-3 rounded-lg hover:bg-tertiary-red hover:border-tertiary-red hover:text-white transition duration-300`}
          >
            Yes
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Reviews;
