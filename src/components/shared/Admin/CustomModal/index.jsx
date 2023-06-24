import { Button, Modal } from "antd";
import Icon from "../../../../utils/icons";
import CustomButton from "../../CustomButton";

const CustomModal = ({
  open,
  header,
  loading,
  iconName,
  handleOk,
  handleCancel,
  message1,
  message2,
  btnOk
}) => {
  return (
    <Modal
      open={open}
      // title={title}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="flex flex-col  justify-center items-center">
        <div className="mt-4">
          <Icon name={iconName} />
        </div>
        <p className="text-2xl capitalize text-center mt-6">{header}</p>
        <div className="mt-4">
          <p className="text-lg text-center capitalize">{message1}</p>
          <p className="text-lg text-center capitalize">{message2}</p>
        </div>
      </div>
      <div className="flex justify-end mt-8 gap-4">
        <CustomButton
          type="quadruple"
          value="Cancel"
          width="w-24"
          onClick={handleCancel}
        />
        <CustomButton
          type="delete"
          value={btnOk}
          width="w-24"
          onClick={handleOk}
          loading={loading}
        />
      </div>
    </Modal>
  );
};

export default CustomModal;
// [
//   <Button key="back" onClick={handleCancel}>
//     Cancel
//   </Button>,
//   <Button
//     key="submit"
//     type="primary"
//     loading={loading}
//     onClick={handleOk}
//     style={{ backgroundColor: "#DB3A34" }}
//   >
//     Delete
//   </Button>,
// ]
