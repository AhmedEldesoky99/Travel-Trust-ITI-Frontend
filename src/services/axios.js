import axios from "axios";
import { toast } from "react-toastify";

export const baseURL = "https://travel-8ztv.onrender.com";

const client = axios.create({ baseURL });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Accept = "application/json";
  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    "travelJWT"
  )}`;
  if (options.formData) {
    client.defaults.headers.common["Content-Type"] = "multipart/form-data";
  } else {
    client.defaults.headers.common["Content-Type"] = "application/json";
  }

    const onSuccess = (response) => {
        console.log("<<Success>>", response.data);
        if(!response.data.success)         
        { console.log("Error"); throw new Error("somthing is wrong") 
      }
        if (options.successMsg) toast.success(options.successMsg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return response.data;
    };

    const onError = (err) => {
        console.log("<<ERROR>>", err);
        if (err) err.response.data.message.map((error) => {
            toast.error(error || 'Something went wrong...', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })

        return err;
    };

  return client(options).then(onSuccess).catch(onError);
};



// export const headers = (formdata = false) => {
//     return {
//         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//         "content-type": formdata ? "multipart/form-data" : "application/json",
//         Accept: "application/json",
//     };
// };

//usage examples

// export const getPostByID = (id) => {
//     return request({ url: `/v1/post/${id}`, method: "GET" });
//   };
//   export const deletePostByID = (id) => {
//     return request({ url: `/v1/post/${id}`, method: "Delete" });
//   };
// export const getlAllPosts = () => {
//   return request({ url: `/v1/post`, method: "GET" });
// };
//   export const updatePostByID = (id) => {
//     return request({ url: `/v1/post/${id}`, method: "Patch" });
//   };

