import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { useState } from "react";

// import "./style.css";
import "../uploadImage/style.css";
import useImageList from "../../../hooks/useImageList";

const CustomUploadImage = ({ length, fileList, setFileList }) => {
  const {
    previewOpen,
    previewImage,
    previewTitle,
    handleCancel,
    handlePreview,
  } = useImageList();

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        className="custom-upload"
        action="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0QPGbDQdIb65Ic2w0Z83Mdp-_PFGfEQUz8Chra8a&s"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {!fileList || fileList?.length <= length ? uploadButton : null}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default CustomUploadImage;
