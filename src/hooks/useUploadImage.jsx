import { useState } from "react";
import { toast } from "react-toastify";

const useUploadImage = () => {
  const [userImageUrl, setUserImageUrl] = useState("");
  const [userCoverUrl, setUserCoverUrl] = useState("");

  const onImageChange = (e, type) => {
    try {
      const file = e.target.files[0];
      console.log({ file });
      if (file && file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        type === "userImage" ? setUserImageUrl(url) : setUserCoverUrl(url);
      } else {
        toast.error(`Please select a valid image file`, {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    userImageUrl,
    userCoverUrl,
    onImageChange,
  };
};

export default useUploadImage;
