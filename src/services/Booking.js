import { request } from "./axios";

export const bookingCheckOut = (cartID) => {
  console.log({ cartID });
  return request({
    url: `v1/checkout-session/${cartID}`,
    method: "GET",
  });
};
