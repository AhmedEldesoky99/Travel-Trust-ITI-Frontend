import React, { useState } from "react";
import { Rate } from "antd";
import { Link, useParams } from "react-router-dom";

import CheckoutCard from "../../../components/shared/CheckoutCard";
import ReviewCard from "../../../components/shared/ReviewCard";

import CustomButton from "../../../components/shared/CustomButton";

import { getUserData } from "./../../../services/user";
import { useTour } from "../../../services/useTour";

import anonymous from "../../../assets/images/UserProfile/userprofile.png";

const Reviews = ({ data }) => {
  //! ------------- States -----------------
  const [commentRate, setCommentRate] = useState(1);
  const [commentContent, setCommentContent] = useState("");
  const commentTitle = data?.data?.title;

  const userId = localStorage.getItem("userId");
  const {
    data: userData,
    isLoading: Loading,
    isError: Error,
  } = getUserData(userId);

  // console.log(userData?.data?.user);

  const { id } = useParams();
  const { getTourComments, createTourComment } = useTour();
  const { data: comments, isLoading, isError, error } = getTourComments(id);
  const {
    mutate,
    isLoading: commentLoading,
    isError: isCommentError,
    error: commentError,
  } = createTourComment();

  //! ---------- Handlers -------------

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
    </section>
  );
};

export default Reviews;
