import { Button, Modal, Rate } from "antd";
import { Link } from "react-router-dom";
import AdminImage from "../../assets/images/TourCard/MrRobot.jpg";
import CustomButton from "../shared/CustomButton";

import "./style.css";

const AdminReviewModal = ({
  open,
  loading,
  handleOk,
  handleCancel,
  tourTitle,
  travellerName,
  AdminImage,
  review,
  rating,
  btnOk,
}) => {
  return (
    <Modal
      className="custom_modal_review"
      centered
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <p className=" text-2xl mb-4 capitalize font-bold">{tourTitle}</p>
      <div
        className="flex justify-start items-start gap-4
      "
      >
        <div className=" ">
          <div className="avatar">
            <div className="w-20  rounded-full">
              <Link to="">
                <img className="object-cover" src={AdminImage} />
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <div className="w-full border border-solid border-black/10 rounded-2xl shadow-md p-8 flex flex-col justify-center gap-4">
            <div>
              <Link className="hover:text-primary-green" to="">
                <p className=" font-semibold 2xs:text-sm sm:text-base lg:text-lg 2xl:text-2xl">
                  {travellerName}
                </p>
              </Link>
              <Rate disabled defaultValue={rating} />
            </div>
            <div>
              <p className="2xs:text-sm sm:text-base 2xl:text-xl">{review}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8 gap-4">
        <CustomButton
          type="secondary"
          value={btnOk}
          width="w-24"
          onClick={handleOk}
          loading={loading}
        />
      </div>
    </Modal>
  );
};

export default AdminReviewModal;
