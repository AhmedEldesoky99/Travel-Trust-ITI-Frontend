import { Button, Modal } from "antd";

const CustomModal = ({
  open,
  loading,
  handleOk,
  handleCancel,
  title,
  message1,
  message2,
}) => {
  return (
    <Modal
      open={open}
      title={title}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
          style={{ backgroundColor: "#DB3A34" }}
        >
          Delete
        </Button>,
      ]}
      style={{
        // display:"flex",
        // justifyContent:"center",
        // alignItems:"center"
      }}
    >
      <div className="flex flex-col  justify-center items-center">
        <p className="capitalize">{message1}</p>
        <p className="capitalize">{message2}</p>
      </div>
    </Modal>
  );
};

export default CustomModal;
