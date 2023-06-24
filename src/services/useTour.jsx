import { useNavigate, useParams } from "react-router-dom";
import { request } from "./axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";

export const useTour = () => {
  const navigate = useNavigate();
  // const [progress, setProgress] = useState(0);

  //1- Add Tour
  const addTour = (tour) => {
    return request({
      url: "/v1/tours",
      method: "POST",
      data: tour,
      formData: true,

      // onDownloadProgress: (progressEvent) => {
      //   const { loaded, total, timestamp } = progressEvent;
      //   console.log("timestamp", timestamp);
      //   let percentCompleted = Math.floor((loaded * 100) / total);
      //   // const percentCompleted = Math.round(
      //   //   (progressEvent.loaded * 100) / progressEvent.total
      //   // );
      //   setProgress(percentCompleted);
      //   console.log("percentCompleted", percentCompleted);
      //   console.log("progress", progress);
      // },
      successMsg: "You have added your tour successfully",
    });
  };

  const addTourMutation = useMutation(addTour, {
    onSuccess: (res) => {
      console.log(res);
      if (res.success) {
        navigate(`/local`);
      }
    },
    onError: (err) => console.log(err),
  });

  //2- Get organizer tours
  const getOrganizerTours = ({ queryKey }) => {
    const organizerID = queryKey[1];
    // console.log("organizerID", organizerID);
    return request({
      url: `/v1/tours/organizer/${organizerID}`,
      method: "GET",
    });
  };

  const OrganizerTours = (organizerID) => {
    return useQuery(["oraganizerTours", organizerID], getOrganizerTours);
  };

  //3- Get Tour By Id
  const getTourById = ({ queryKey }) => {
    const tourID = queryKey[1];
    // console.log("tourID", tourID);

    return request({
      url: `/v1/tours/${tourID}`,
      method: "GET",
    });
  };

  const TourById = (tourID) => {
    return useQuery(["tourById", tourID], getTourById);
  };

  //3- Delete Tour By Id
  const deleteTourById = (tourID) => {
    return request({
      url: `/v1/tours/${tourID}`,
      method: "DELETE",
      successMsg: "You have deleted your tour successfully",
    });
  };

  const DeleteTourByIdmutation = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteTourById, {
      onSuccess: (res) => {
        console.log(res);
        queryClient.invalidateQueries("oraganizerTours");
      },
      onError: (err) => console.log(err),
    });
  };

  // useMutation((tourID) => {
  //   return deleteTourById(tourID);
  // });

  //4- Update Tour By Id
  const updateTourById = ({ id, tour }) => {
    console.log("update");

    return request({
      url: `/v1/tours/${id}`,
      method: "PATCH",
      data: tour,
      formData: true,
      successMsg: "You have updated your tour successfully",
    });
  };

  const updateTourByIdMutation = useMutation(updateTourById, {
    onSuccess: (res) => {
      console.log(res);
      if (res.success) {
        navigate(`/local`);
      }
    },
    onError: (err) => console.log(err),
  });

  //! 5- Get One Tour Details
  const getOneTour = (tourId) => {
    return request({ url: `/v1/tours/${tourId}`, method: "GET" });
  };

  const getTourDetails = (tourId) => {
    return useQuery(["tour-details", tourId], () => getOneTour(tourId));
  };

  //! 6- Create Tour Comment
  const mutateTourComment = ({ id: tourId, ...data }) => {
    return request({
      url: `/v1/comments/${tourId}`,
      method: "POST",
      data: data,
      successMsg: "Comment added successfully",
    });
  };

  const createTourComment = () => {
    const queryClient = useQueryClient();
    return useMutation(mutateTourComment, {
      onSuccess: (res) => {
        queryClient.invalidateQueries("tour-comments");
      },
      onError: (err) => console.log(err),
    });
  };

  //! 7- Get Tour Comments

  const fetchTourComments = (tourId) => {
    return request({ url: `/v1/comments/tour/${tourId}` });
  };

  const getTourComments = (tourId) => {
    return useQuery(["tour-comments", tourId], () => fetchTourComments(tourId));
  };

  //! 8- Update Tour Comment

  const updateTourComment = ({ commentId, ...data }) => {
    return request({
      url: `/v1/comments/${commentId}`,
      method: "PUT",
      data: data,
      successMsg: "Comment updated Successfully",
    });
  };

  const updateTourCommentMutation = (setOpenModal) => {
    const queryClient = useQueryClient();
    return useMutation(updateTourComment, {
      onSuccess: (res) => {
        setOpenModal(false);
        queryClient.invalidateQueries("tour-comments");
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  //! 9- Delete Tour Comment
  const deleteTourComment = (commentId) => {
    return request({ url: `/v1/comments/${commentId}`, method: "DELETE" });
  };

  const deleteTourCommentMutation = (setOpenDeleteModal) => {
    const queryClient = useQueryClient();
    return useMutation(deleteTourComment, {
      onSuccess: (res) => {
        setOpenDeleteModal(false);
        queryClient.invalidateQueries("tour-comments");
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  return {
    addTourMutation,
    OrganizerTours,
    TourById,
    DeleteTourByIdmutation,
    updateTourByIdMutation,
    getTourDetails,
    createTourComment,
    getTourComments,
    updateTourCommentMutation,
    deleteTourCommentMutation,
  };
};
