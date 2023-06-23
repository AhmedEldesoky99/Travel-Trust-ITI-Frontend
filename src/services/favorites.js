import { request } from "./axios";
import { useMutation, useQueryClient } from "react-query";

const toggleFavoriteCard = ({ tourId, checked }) => {
    console.log(tourId, checked);
    return request({
        url: `/v1/favorites/${tourId}`,
        method: "PATCH",
        successMsg: `${!checked ? "Added to favorites successfully" : "Removed from favorites successfully"}`
    });
};

export const toggleFavoriteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(toggleFavoriteCard, {
        onSuccess: (res) => {
            console.log(res)
            queryClient.invalidateQueries('user-data')
        },
        onError: (err) => console.log(err),
    });
};