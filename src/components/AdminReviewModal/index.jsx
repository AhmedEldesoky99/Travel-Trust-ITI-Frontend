import { Button, Modal, Rate } from "antd";
import { Link } from "react-router-dom";
import AdminImage from "../../assets/images/TourCard/MrRobot.jpg";

const AdminReviewModal = ({
  open,
  loading,
  handleOk,
  handleCancel,
  title,
  travellerName,
  review,
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
      style={
        {
          // display:"flex",
          // justifyContent:"center",
          // alignItems:"center"
        }
      }
    >
      <div className="2xs:col-span-1 lg:col-span-1 ">
        <div className="avatar">
          <div className="2xs:w-24  rounded-full">
            <Link to="">
              <img className="object-cover" src={AdminImage} />
            </Link>
          </div>
        </div>
      </div>

      <div className="2xs:col-span-1 lg:col-span-7">
        <div className="border border-solid border-black/10 rounded-2xl shadow-md p-8 flex flex-col justify-center gap-4">
          <div>
            <Link className="hover:text-primary-green" to="">
              <p className="font-bold 2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
                {travellerName}
              </p>
            </Link>
            <Rate disabled defaultValue={2} />
          </div>
          <div>
            <p className="2xs:text-sm sm:text-base 2xl:text-xl">{review}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AdminReviewModal;
