import { useQuery } from "react-query";
import { request } from "./axios"



const addTourToHistory = (tourId) => {
    return request({ url: `/v1/history/${tourId}`, method: "GET" });
}

export const addTourToHistoryQuery = (tourId) => {
    return useQuery(['add-tour-history', tourId], () => addTourToHistory(tourId));
}


const getTourHistory = () => {
    return request({ url: `/v1/history`, method: "GET" });
}

export const getUserTourHistory = () => {
    return useQuery(['user-tours-history'], getTourHistory);
}

