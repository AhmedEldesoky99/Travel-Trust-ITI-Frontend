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
import './app.css';

const AdminProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex flex-row  ">
        <NavBar />
        <div className="w-full container mx-auto">
          <SubNavBar />
          <div className="grid lg:grid-cols-6 lg:grid-flow-row auto-rows-max w-full  gap-5 h-fill md:mt-8 mt-32 ">
            <div className="flex flex-col gap-8">
              <div className="flex flex-row justify-between max-h-[283px] max-w-[1558px] rounded-2xl shadow-lg w-screen h-screen">
                {/* user card + edit profile */}
                <div className="flex flex-row gap-5">
                  <div className="max-h-[283px] max-w-[283px] w-full">
                    <img
                      src={profileImg}
                      className="rounded-2xl w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between px-5 py-6">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-3xl font-medium text-[#585858]">
                        Name
                      </h1>
                      <h2 className="text-2xl font-medium text-[#585858]">
                        title
                      </h2>
                    </div>
                    <div className="flex flex-row gap-16">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-row items-center gap-7">
                          <img src={location} />
                          <p className="text-xl text-[#9A9999]">Alexandria</p>
                        </div>
                        <div className="flex flex-row items-center gap-7">
                          <img src={phone} />
                          <p className="text-xl text-[#9A9999]">+123-456-789</p>
                        </div>
                        <div className="flex flex-row items-center gap-7">
                          <img src={email} />
                          <p className="text-xl text-[#9A9999]">
                            ahmed@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 justify-end">
                        <div className="flex flex-row items-center gap-7">
                          <img src={ssn} />
                          <p className="text-xl text-[#9A9999]">+123-456-789</p>
                        </div>
                        <div className="flex flex-row items-center gap-7">
                          <img src={role} />
                          <p className="text-xl text-[#9A9999]">organizer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col  justify-end">
                  <button
                    href=""
                    className="text-xl underline py-6 px-7 text-[#9A9999]"
                    onClick={showModal}
                  >
                    Edit profile
                  </button>
                  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <EditProfile/>
                  </Modal>
                </div>
              </div>
              <div className="flex flex-row w-screen max-w-[1558px] gap-5">
                <div className="flex flex-col bg-white justify-center items-center max-h-[515px] max-w-[283px] py-[100px] px-auto shadow-xl rounded-2xl w-screen gap-10">
                  <div className="flex flex-row gap-12">
                    <Statistics num="6" stat="Tours Created" />
                    <Statistics num="50" stat="Tours Favorite" />
                  </div>
                  <div className="flex flex-row gap-12">
                    <Statistics num="5k" stat="Traveler Booked" />
                    <Statistics num="10k" stat="Views" />
                  </div>
                  <div className="flex flex-row gap-12">
                    <Statistics num="5k" stat="Reviews" />
                    <Statistics num="5k" stat="Rating" />
                  </div>
                </div>
                <div className="flex flex-col max-h-[515px] max-w-[830px] bg-white shadow-xl rounded-2xl w-screen px-5 pt-6 gap-4">
                  {/* about + Governorate of expertise tags + Language tags */}
                  <h3 className="text-[#9A9999] font-semibold text-xl mb-4">About</h3>
                  <p className="text-xl mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                  </p>
                  <h4 className="text-[#9A9999] font-semibold text-xl">Governorate of expertise</h4>
                  <div className="flex flex-row max-h-[42px] mb-4">
                    <div className="py-3 px-5 bg-[#D9D9D9] rounded-lg flex items-center">
                      Alexandria
                    </div>
                  </div>
                  <h4 className="text-[#9A9999] font-semibold text-xl">Language</h4>
                  <div className="flex flex-row gap-2 items-center">
                    <div className="py-3 px-5 bg-[#D9D9D9] rounded-lg flex items-center">
                      Arabic
                    </div>
                    <div className="py-3 px-5 bg-[#D9D9D9] rounded-lg flex items-center">
                      English
                    </div>
                  </div>
                </div>
                <div className="flex flex-col max-h-[515px] max-w-[405px] bg-white shadow-xl rounded-2xl w-screen py-12 px-12 gap-5">
                  {/* Top travelers */}
                  <h2 className="text-2xl">Top Travelers</h2>
                  <div className="flex flex-col gap-6">
                    <TopTravelers img={profileImg} name='Maged Mostafa' mail='maged@gmail.com'/>
                    <TopTravelers img={profileImg} name='Maged Mostafa' mail='maged@gmail.com'/>
                    <TopTravelers img={profileImg} name='Maged Mostafa' mail='maged@gmail.com'/>
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
