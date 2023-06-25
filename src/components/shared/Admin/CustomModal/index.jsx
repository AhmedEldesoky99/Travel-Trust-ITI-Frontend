import { Button, Modal } from "antd";
import Icon from "../../../../utils/icons";
import CustomButton from "../../CustomButton";

const place_holder_avatar =
  "https://frostbrowntodd.com/app/uploads/2021/10/FBT_NoPhoto-1.jpg";

const CustomModal = ({
  title,
  open,
  header,
  loading,
  iconName,
  handleOk,
  handleCancel,
  message1,
  message2,
  btnOk,
  frontPhoto,
  backPhoto,
  className,
}) => {
  console.log(loading);

  return (
    <Modal
      className={className}
      open={open}
      title={title}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="flex flex-col  justify-center items-center">
        <div className="mt-4">
          <Icon name={iconName} />
        </div>
        <p className="font-bold text-2xl normal-case text-center mt-6">
          {header}
        </p>
        <div className="mt-4">
          <p className="text-lg text-center capitalize">{message1}</p>
          <p className="text-lg text-center capitalize">{message2}</p>
        </div>
      </div>

      {frontPhoto && backPhoto && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <div>
            <img src={frontPhoto} alt="Organizer front image" />
          </div>
          <div>
            <img src={backPhoto} alt="Organizer back image" />
          </div>
        </div>
      )}

      {!frontPhoto && !backPhoto && (
        <figure className="w-1/2 mx-auto">
          <img src={place_holder_avatar} alt="Unknown" />
          <figcaption className="font-semibold text-red-600 mt-2 text-center 2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
            There are no photos for this organizer.
          </figcaption>
        </figure>
      )}

      <div className="flex justify-end mt-8 gap-4">
        <CustomButton
          type="quadruple"
          value="Cancel"
          width="w-24"
          onClick={handleCancel}
        />
        <CustomButton
          type="primary"
          value={btnOk}
          width="w-28"
          onClick={handleOk}
          isLoading={loading}
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
