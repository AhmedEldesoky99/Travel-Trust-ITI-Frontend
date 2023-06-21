import { useMutation } from "react-query";
import { request } from "./axios";

export const getCart = () => {
    return request({
        url: "v1/cart",
        method: "GET",
    });
};



const addToCart = (tourId) => {
    return request({
        url: `/v1/cart/${tourId}`,
        method: "POST",
        succesMsg: "Added to cart successfully",
    });
};


export const addToCartMutation = (tourId) => {
    return useMutation(() => addToCart(tourId), {
        onSuccess: (res) => console.log(res),
        onError: (err) => console.log(err),
    });
};