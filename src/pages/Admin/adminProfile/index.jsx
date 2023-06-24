import { useState } from "react";
import { useParams } from "react-router-dom";

import SubNavBar from "../../../components/shared/Admin/SubNavBar.jsx/index.jsx";
import NavBar from "../../../components/shared/Admin/Admin-NavBar/index.jsx";

import Statistics from "../../../components/AdminProfile/statistics/index.jsx";
import TopTravelers from "../../../components/AdminProfile/topTravelers/index.jsx";
import EditProfile from "../../../components/AdminProfile/EditProfile/index.jsx";

import profileImg from "../../../assets/images/Admin/AdminProfile/profileImg.png";
import phone from "../../../assets/images/Admin/AdminProfile/phone.svg";
import email from "../../../assets/images/Admin/AdminProfile/email.svg";
import location from "../../../assets/images/Admin/AdminProfile/location.svg";
import ssn from "../../../assets/images/Admin/AdminProfile/ssn.svg";

import { Modal } from "antd";
import "./app.css";

import { getUserData } from "../../../services/user";
import LocalProfileLoader from "../../../components/Admin/localLoaders/localProfileLoader/index.jsx";
import Icon from "../../../utils/icons.jsx";
import VerificationModal from "../../../components/Admin/verificationModal/index.jsx";

const placeholder =
  "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

const AdminProfile = () => {
  //----------- states -----------
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  //custom hooks
  const { organizerId } = useParams();
  // console.log(organizerId);

  //----------- handlers -----------
  const showModal = (display) => {
    if (display === "edit") {
      setIsUpdateModalOpen(true);
    } else {
      setIsUploadModalOpen(true);
    }
  };
  const handleOk = (display) => {
    if (display === "edit") {
      setIsUpdateModalOpen(false);
    } else {
      setIsUploadModalOpen(false);
    }
  };
  const handleCancel = (display) => {
    console.log("clicked cancel");

    if (display === "edit") {
      setIsUpdateModalOpen(false);
    } else {
      setIsUploadModalOpen(false);
    }
  };

  //get user
  const { data: admin, isLoading } = getUserData(organizerId);
  console.log("admin", admin);

  return (
    <>
      <div className="flex flex-row bg-admin-grey">
        <NavBar />
        <div className="w-full ">
          <SubNavBar />
          <div className="md:container md:mx-auto">
            {isLoading ? (
              <LocalProfileLoader />
            ) : (
              <div className="grid lg:grid-cols-6 lg:grid-flow-row auto-rows-max w-full  gap-5 h-fill md:mt-8 mt-32 ">
                <div className="flex flex-col gap-8">
                  <div className="flex md:flex-row 2xs:flex-col justify-between  md:max-h-[283px] max-w-[1558px] rounded-2xl shadow-lg w-screen h-screen  bg-white">
                    <div className="flex md:flex-row 2xs:flex-col gap-5 lg:mx-0">
                      <div className="2xs:mx-auto">
                        <div className="max-h-[283px] md:max-w-[283px] w-full  p-4">
                          <img
                            src={
                              admin?.data?.user?.photo?.length === 0
                                ? placeholder
                                : admin?.data?.user?.photo[0]?.url
                            }
                            className="rounded-2xl object-cover w-full  h-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-between md:px-5 py-6 lg:mx-0 pl-10">
                        <div className="flex flex-col  gap-4 2xs:mb-8 md:mb-0">
                          <div className="flex flex-row justify-between">
                            <div>
                              <div className="flex items-center gap-4 justify-brtween ">
                                <h1 className="md:text-3xl 2xs:text-2xl font-medium text-[#585858] capitalize">
                                  {admin?.data?.user?.username}
                                </h1>
                                {admin?.data?.user?.verified && (
                                  <div>
                                    <img
                                      className="w-[24px]"
                                      src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png"
                                    />
                                  </div>
                                )}
                              </div>
                              <h2 className="md:text-2xl 2xs:text-lg font-medium text-[#585858]">
                                {admin?.data?.user?.job_profile}
                              </h2>
                              {!admin?.data?.user?.verified && (
                                <div className="flex flex-row items-center ">
                                  <img src={ssn} />
                                  <button
                                    className="text-xl underline py-6 md:px-7 text-[#9A9999]"
                                    onClick={() => showModal("verify")}
                                  >
                                    <p className="text-xl text-[#9A9999] no-underline">
                                      + Identity verification
                                    </p>
                                  </button>
                                  <Modal
                                    className="custom_modal_profile "
                                    title="verify Profile"
                                    open={isUploadModalOpen}
                                    onOk={() => handleOk("verify")}
                                    onCancel={() => handleCancel("verify")}
                                  >
                                    <VerificationModal
                                      admin={admin}
                                      handleCancel={() =>
                                        handleCancel("verify")
                                      }
                                      setIsModalOpen={setIsUploadModalOpen}
                                    />
                                  </Modal>
                                </div>
                              )}
                            </div>
                            <div className="md:hidden  pr-5">
                              <button
                                href=""
                                className="text-xl underline py-6 md:px-7 pr-4 text-[#9A9999]"
                                onClick={() => showModal("edit")}
                              >
                                Edit
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-row 2xs:flex-col md:gap-16 2xs:gap-12">
                          <div className="flex flex-col md:gap-4 2xs:gap-2">
                            <div className="flex flex-row items-center gap-7">
                              <img src={location} />
                              <p className="text-xl text-[#9A9999]">
                                {admin?.data?.user?.city?.title}
                              </p>
                            </div>

                            <div className="flex flex-row items-center gap-7">
                              <img src={email} />
                              <p className="text-xl text-[#9A9999]">
                                {admin?.data?.user?.email}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col md:gap-4 2xs:gap-2 justify-end">
                            <div className="flex flex-row items-center gap-7">
                              <img src={phone} />
                              <p className="text-xl text-[#9A9999]">
                                {admin?.data?.user?.phone}
                              </p>
                            </div>

                            <div className="flex flex-row items-center gap-7">
                              <Icon name="adminProfile" color="#009EB7" />
                              <p className="text-xl text-[#9A9999] capitalize">
                                {admin?.data?.user?.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col  lg:justify-end 2xs:justify-start ">
                      <button
                        className="text-xl underline py-6 md:px-7 text-[#9A9999]"
                        onClick={() => showModal("edit")}
                      >
                        Edit profile
                      </button>
                      <Modal
                        className="custom_modal_profile "
                        title="Edit Profile"
                        open={isUpdateModalOpen}
                        onOk={() => handleOk("edit")}
                        onCancel={() => handleCancel("edit")}
                      >
                        <EditProfile
                          admin={admin}
                          handleCancel={() => handleCancel("edit")}
                          setIsModalOpen={setIsUpdateModalOpen}
                        />
                      </Modal>
                    </div>
                  </div>
                  <div className="flex md:flex-row 2xs:flex-col  w-screen max-w-[1558px] gap-5 2xs:flex-wrap lg:flex-nowrap">
                    <div className="flex flex-row lg:flex-col  flex-wrap bg-white justify-between items-center max-h-[515px] lg:max-w-[283px] p-[24px]  shadow-xl rounded-2xl w-screen ">
                      {/* <h2 className="text-2xl">Insights</h2> */}
                      <div className="flex flex-col lg:flex-row  gap-12">
                        <Statistics num="6" stat="Tours Created" />
                        <Statistics num="50" stat="Tours Favorite" />
                      </div>
                      <div className="flex flex-col lg:flex-row gap-12">
                        <Statistics num="523" stat="Traveler Booked" />
                        <Statistics num="896" stat="Views" duration={2} />
                      </div>
                      <div className="flex flex-col lg:flex-row gap-12">
                        <Statistics num="480" stat="Reviews" />
                        <Statistics num="511" stat="Rating" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between max-w-[830px] bg-white shadow-xl rounded-2xl w-screen md:p-[24px] py-6 gap-4 container flex-wrap px-4">
                      {/* about + Governorate of expertise tags + Language tags */}
                      <div>
                        <h2 className="text-2xl">About :</h2>
                        <p className="text-xl mb-6 flex flex-wrap">
                          {admin?.data?.bio === "" ? (
                            <p>
                              "Write something about yourself so that the
                              traveller can know you petter"
                            </p>
                          ) : (
                            admin?.data?.user?.bio
                          )}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[#9A9999] font-semibold text-xl">
                          Governorate of expertise
                        </h4>
                        {/* {console.log("gov", admin?.data?.governorate_expertise)} */}
                        {admin?.data?.user?.governorate_expertise?.length !==
                        0 ? (
                          admin?.data?.user?.governorate_expertise?.map(
                            (gov, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex flex-row max-h-[42px] mb-4 mt-4"
                                >
                                  <div className="py-3 px-5 bg-[#D9D9D9] rounded-lg flex items-center">
                                    {/* {console.log("gov fv", gov)} */}
                                    {gov?.title}
                                  </div>
                                </div>
                              );
                            }
                          )
                        ) : (
                          <div>
                            <p>No Governorate of expertise selected</p>
                          </div>
                        )}

                        <h4 className="text-[#9A9999] font-semibold text-xl mt-8">
                          Language
                        </h4>
                        {admin?.data?.user?.languages?.length !== 0 ? (
                          admin?.data?.user?.languages?.map((lang, index) => {
                            return (
                              <div
                                key={index}
                                className="flex flex-row max-h-[42px] mb-4 mt-4"
                              >
                                <div className="py-3 px-5 bg-[#D9D9D9] rounded-lg flex items-center">
                                  {lang}
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div>
                            <p>No languages selected</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col max-h-[515px] lg:max-w-[405px] bg-white shadow-xl rounded-2xl w-screen py-12 md:p-[24px] 2xs:px-3 gap-5">
                      {/* Top travelers */}
                      <h2 className="text-2xl">Top Travelers</h2>
                      <div className="flex flex-col gap-6">
                        <TopTravelers
                          img={profileImg}
                          name="Maged Mostafa"
                          mail="maged@gmail.com"
                        />
                        <TopTravelers
                          img={profileImg}
                          name="Maged Mostafa"
                          mail="maged@gmail.com"
                        />
                        <TopTravelers
                          img={profileImg}
                          name="Maged Mostafa"
                          mail="maged@gmail.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminProfile;
