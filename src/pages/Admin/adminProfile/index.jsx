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
import role from "../../../assets/images/Admin/AdminProfile/role.svg";
import { Modal } from "antd";
import { useState } from "react";
import "./app.css";
import { useParams } from "react-router-dom";
import { getUserData, useUser } from "../../../services/user";

const AdminProfile = () => {
  //----------- states -----------
  const [isModalOpen, setIsModalOpen] = useState(false);
  //custom hooks
  const { organizerId } = useParams();
  console.log(organizerId);

  //----------- handlers -----------
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //get user
  const { data: admin } = getUserData(organizerId);
  console.log("admin", admin);

  return (
    <>
      <div className="flex flex-row">
        <NavBar />
        <div className="w-full ">
          <SubNavBar />
          <div className="md:container md:mx-auto">
            <div className="grid lg:grid-cols-6 lg:grid-flow-row auto-rows-max w-full  gap-5 h-fill md:mt-8 mt-32 ">
              <div className="flex flex-col gap-8">
                <div className="flex md:flex-row 2xs:flex-col justify-between md:max-h-[283px] max-w-[1558px] rounded-2xl shadow-lg w-screen h-screen">
                  <div className="flex md:flex-row 2xs:flex-col gap-5 lg:mx-0">
                    <div className="2xs:mx-auto">
                      <div className="max-h-[283px] md:max-w-[283px] w-full md:px-4 ">
                        <img
                          src={admin?.data?.photo[0]?.url}
                          className="rounded-2xl object-cover  h-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between md:px-5 py-6 lg:mx-0 pl-10">
                      <div className="flex flex-col  gap-4 2xs:mb-8 md:mb-0">
                        <div className="flex flex-row justify-between">
                          <div className="">
                            <h1 className="md:text-3xl 2xs:text-2xl font-medium text-[#585858] capitalize">
                              {admin?.data?.username}
                            </h1>
                            <h2 className="md:text-2xl 2xs:text-lg font-medium text-[#585858]">
                              Full-Stack Developer
                            </h2>
                          </div>
                          <div className="md:hidden  pr-5">
                            <button
                              href=""
                              className="text-xl underline py-6 md:px-7 pr-4 text-[#9A9999]"
                              onClick={showModal}
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
                              {admin?.data?.city?.title}
                            </p>
                          </div>
                          <div className="flex flex-row items-center gap-7">
                            <img src={phone} />
                            <p className="text-xl text-[#9A9999]">
                              {admin?.data?.phone}
                            </p>
                          </div>
                          <div className="flex flex-row items-center gap-7">
                            <img src={email} />
                            <p className="text-xl text-[#9A9999]">
                              {admin?.data?.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col md:gap-4 2xs:gap-2 justify-end">
                          <div className="flex flex-row items-center gap-7">
                            <img src={ssn} />
                            <p className="text-xl text-[#9A9999]">
                              {admin?.data?.ssn}
                            </p>
                          </div>
                          <div className="flex flex-row items-center gap-7">
                            <img src={role} />
                            <p className="text-xl text-[#9A9999] capitalize">
                              {admin?.data?.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col  lg:justify-end 2xs:justify-start ">
                    <button
                      href=""
                      className="text-xl underline py-6 md:px-7 text-[#9A9999]"
                      onClick={showModal}
                    >
                      Edit profile
                    </button>
                    <Modal
                      title="Edit Profile"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <EditProfile />
                    </Modal>
                  </div>
                </div>
                <div className="flex md:flex-row 2xs:flex-col  w-screen max-w-[1558px] gap-5 2xs:flex-wrap lg:flex-nowrap">
                  <div className="flex flex-col flex-wrap bg-white justify-center items-center max-h-[515px] lg:max-w-[283px] py-[100px]  shadow-xl rounded-2xl w-screen gap-10">
                    <div className="flex flex-row gap-12">
                      <Statistics num="6" stat="Tours Created" />
                      <Statistics num="50" stat="Tours Favorite" />
                    </div>
                    <div className="flex flex-row gap-12">
                      <Statistics num="523" stat="Traveler Booked" />
                      <Statistics num="896" stat="Views" duration={2} />
                    </div>
                    <div className="flex flex-row gap-12">
                      <Statistics num="480" stat="Reviews" />
                      <Statistics num="511" stat="Rating" />
                    </div>
                  </div>
                  <div className="flex flex-col max-w-[830px] bg-white shadow-xl rounded-2xl w-screen md:px-5 py-6 gap-4 container flex-wrap px-4">
                    {/* about + Governorate of expertise tags + Language tags */}
                    <h3 className="text-[#9A9999] font-semibold text-xl mb-4">
                      About
                    </h3>
                    <p className="text-xl mb-6 flex flex-wrap">
                      {/* {admin?.data?.bio} */}
                    </p>
                    <h4 className="text-[#9A9999] font-semibold text-xl">
                      Governorate of expertise
                    </h4>
                    {/* {admin?.data?.governorate_expertise.map((gov) => {
                      return (
                        <div className="flex flex-row max-h-[42px] mb-4">
                          <div className="py-3 px-5 bg-[#D9D9D9] rounded-lg flex items-center">
                            {gov}
                          </div>
                        </div>
                      );
                    })} */}

                    <h4 className="text-[#9A9999] font-semibold text-xl">
                      Language
                    </h4>

                    <div className="flex flex-row gap-2 items-center max-w-[121px]">
                      {/* {admin?.data?.languages.map((lang) => {
                        return (
                          <div className="py-3 px-5 bg-[#D9D9D9] rounded-lg flex items-center">
                            {lang}
                          </div>
                        );
                      })} */}
                    </div>
                  </div>
                  <div className="flex flex-col max-h-[515px] lg:max-w-[405px] bg-white shadow-xl rounded-2xl w-screen py-12 md:px-12 2xs:px-3 gap-5">
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
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminProfile;
