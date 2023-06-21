import { useTour } from "../../../../services/useTour";
import { useNavigate } from "react-router-dom";

import CustomModal from "../../../../components/shared/Admin/CustomModal";
import CustomButton from "../../../../components/shared/CustomButton";

import useAddTourFormContext from "../../../../hooks/useAddTourFormContext";
import useModal from "../../../../hooks/useModal";
import Modal from "antd/es/modal/Modal";
import { useState } from "react";
import { Progress } from "antd";
import { useEffect } from "react";

const AddComplete = () => {
  //custom hook
  const {
    handlePrev,
    formData,
    handleSaveTour,
    modalOpen,
    setModalOpen,
    progress,
    isAddTourLoading,
    isUpdateTourLoading,
  } = useAddTourFormContext();

  return (
    <>
      <div className="rounded-2xl shadow-md h-[80vh] p-10 mt-16 flex justify-center items-center flex-col  mb-10">
        <img
          src="../../../../src/assets/images/Admin/done.png"
          alt="add toue complete image"
        />

        <p className="mt-8 capitalize text-center text-xl md:text-3xl font-medium">
          Great, you finished all the steps <br />
          save your tour now !
        </p>

        <div className="flex flex-col items-center md:flex-row md:justify-center mt-10 mb-10 gap-5">
          <CustomButton
            type="quadruple"
            value="previous"
            width="w-64"
            onClick={handlePrev}
          />
          <CustomButton
            type="secondary"
            onClick={() => setModalOpen(true)}
            value="Save As"
            width="w-64"
          />

          <Modal
            title="Save as"
            open={modalOpen}
            onOk={() => handleSaveTour(formData, "publish")}
            //------------------------------------------------------------------- cancel X
            onCancel={() => handleSaveTour(formData, "draft")}
            okText="Publish"
            cancelText="Draft"
          >
            <p></p>
            <p>Do you want to publish the tour now or save it as draft ?</p>
            <p></p>
          </Modal>
        </div>
        {isAddTourLoading && isUpdateTourLoading && (
          <div className="w-[70%]">
            <div className="flex flex-col justify-center items-center">
              <Progress percent={progress} status="active" />
              <span className=" text-lg mt-4 text-primary-green">
                This might take a while .. please wait{" "}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddComplete;
