import { request } from "./axios"
import { useMutation } from "react-query"

const mainAdminLogin = (data) => {
    return request({
        url: "/v1/users/sign-in/admin",
        method: "POST",
        data: data,
        successMsg: "You have been logged in successfully"
    })
}

export const mainAdminLoginMutation = () => {
    return useMutation(mainAdminLogin,
        {
            onSuccess: (res) => {
                console.log(res);
                localStorage.setItem("travelJWT", res?.data?.access_token);
                localStorage.setItem("adminId", res?.data?.userBody?._id);
            },
            onError: (err) => { console.log(err) }
        })
}

