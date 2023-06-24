import { useMutation } from "react-query";
import { request } from "./axios";

export const getCart = () => {
  return request({
    url: "v1/cart",
    method: "GET",
  });
};

const addToCart = (tourId, data) => {
  return request({
    url: `/v1/cart/${tourId}`,
    method: "POST",
    data: data,
    successMsg: "Added to cart successfully",
  });
};

export const deleteFromCart = (tourId) => {
  return request({
    url: `/v1/cart/${tourId}`,
    method: "DELETE",
    // successMsg: "deleted from cart successfully",
  });
};

export const clearCart = (tourId) => {
  return request({
    url: `/v1/cart`,
    method: "POST",
    // successMsg: "cleared cart successfully",
  });
};

export const addToCartMutation = (tourId, data, invalidateCart) => {
  return useMutation(() => addToCart(tourId, data), {
    onSuccess: (res) => {
      console.log(res.json);
      invalidateCart();
    },
    onError: (err) => console.log(err),
  });
};
export const deleteFromCartMutation = (tourId, invalidateCart) => {
  return useMutation(() => deleteFromCart(tourId), {
    onSuccess: (res) => {
      // console.log(res.json);
      // invalidateCart();
    },
    onError: (err) => console.log(err),
  });
};
