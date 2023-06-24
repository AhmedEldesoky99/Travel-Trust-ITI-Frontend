import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Icon from "../../../../utils/icons";
import { getUserData } from "../../../../services/user";

const NavBar = () => {
  const navigate = useNavigate();
  const localId = localStorage.getItem("localId");
  const { data } = getUserData(localId);

  console.log("data from navbar", data);

  const navLinks = [
    {
      name: "adminHome",
      link: "Home",
      route: `/local/dashboard`,
    },
    {
      name: "adminProfile",
      link: "Profile",
      route: `/local/profile/${localId}`,
    },
    {
      name: "tourFlag",
      link: "Tours",
      route: `/local/alltours/${localId}`,
    },
    {
      name: "adminReview",
      link: "Reviews",
      route: `/local/reviews/${localId}`,
    },
    {
      name: "add",
      link: "Tour",
      route: `/local/tour/add`,
    },
  ];
  const placeholder =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

  const logout = () => {
    navigate("/local/login");
    // console.log({ localId });
    localStorage.removeItem("travelJWT");
    localStorage.removeItem("localId");
  };

  return (
    <>
      {/* bg-[#0c768a]  */}
      <div className=" navbar fixed md:sticky md:top-0 md:flex-col md:justify-between md:w-[100px] md:h-[100vh] bg-[#0c768a]  p-4 z-20">
        <div className="flex-1 md:flex-none">
          <Link
            to={`/admin/${localId}`}
            // className="bg-{white} border-0 hover:bg-transparent normal-case text-xl"
          >
            <Icon name="blackLogo" />
          </Link>
        </div>
        <div className="flex-none md:flex-col md:justify-start md:hidden">
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Link to={`/local/profile/${localId}`}>
                  <img
                    src={
                      data?.user?.[photo]?.url
                        ? data?.user?.[photo]?.url
                        : placeholder
                    }
                  />
                </Link>
              </div>
            </label>
          </div>
          {/* dropdown menu */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" border-0 hover:bg-transparent p-4">
              <div className="indicator">
                <Icon name="burgerIcon" color="white" />
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <ul className=" ">
                  {navLinks.map(({ name, link, route }, index) => (
                    <li
                      key={index}
                      className="flex flex-col justify-center items-start my-4 p-4 rounded-lg  active:bg-white hover:bg-slate-300 w-full"
                    >
                      <Link to={route} className=" text-black p-1">
                        {link}
                      </Link>
                    </li>
                  ))}
                  <Link>
                    <li className="flex flex-col justify-center items-start my-4 p-4 rounded-lg  active:bg-white hover:bg-slate-300 w-full">
                      <span onClick={logout} className=" text-black p-1">
                        Log Out
                      </span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* -------- side navBar ---------- */}
        <ul className="2xs:hidden  md:flex md:flex-col  md:justify-between md:h-[70vh]">
          <div>
            {navLinks.map(({ name, link, route }, index) => (
              <li
                key={index}
                className=" group flex flex-col justify-center items-center my-4 w-[70px] h-[70px] rounded-lg "
              >
                {/* to do change color of the icon when active */}
                <Icon name={name} color="white" />
                <NavLink
                  to={route}
                  className={({ isActive }) =>
                    isActive
                      ? " border-b border-white text-white text-sm p-1 pr-0"
                      : "text-white text-sm p-1 pr-0 hover:border-b hover:border-white"
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </div>
          <div>
            <li className="  flex flex-col justify-center items-center my-4  text-white text-sm p-1 pr-0 hover:border-b hover:border-white ">
              <Icon name="logOut" color="white" />
              Log Out
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
