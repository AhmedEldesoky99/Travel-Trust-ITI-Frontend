import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../utils/icons";

const organizerID = 16;

const navLinks = [
  {
    name: "adminHome",
    link: "Home",
    route: `/admin/${organizerID}`,
  },
  {
    name: "adminProfile",
    link: "Profile",
    route: `/admin/profile/${organizerID}`,
  },
  {
    name: "tourFlag",
    link: "Tours",
    route: `/admin/alltours/${organizerID}`,
  },
  {
    name: "adminReview",
    link: "Reviews",
    route: `/admin/reviews/${organizerID}`,
  },
  {
    name: "add",
    link: "Tour",
    route: `/admin/tour/add`,
  },
];

const NavBar = () => {
  return (
    <>
      <div className=" navbar fixed md:sticky md:top-0 md:flex-col md:justify-between md:w-[100px] md:h-[100vh] bg-base-100 rounded-lg shadow-md m-3 p-4 z-20">
        <div className="flex-1 md:flex-none">
          <a className="btn bg-white border-0 hover:bg-transparent normal-case text-xl">
            <Icon name="blackLogo" />
          </a>
        </div>
        <div className="flex-none md:flex-col md:justify-start md:hidden">
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://media.istockphoto.com/id/108271508/photo/young-gray-cat.jpg?s=612x612&w=0&k=20&c=Cnra41iZ85qkZGDJB3cDNQ41BTg0vgl11Mlgu-OpjwM=" />
              </div>
            </label>
            {/* <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul> */}
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn bg-white border-0 hover:bg-transparent "
            >
              <div className="indicator">
                <Icon name="burgerIcon" />
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
                  <li className="flex flex-col justify-center items-start my-4 p-4 rounded-lg  active:bg-white hover:bg-slate-300 w-full">
                    <span className=" text-black p-1">Log Out</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ul className="2xs:hidden  md:flex md:flex-col  md:justify-between md:h-[70vh]">
          <div>
            {navLinks.map(({ name, link, route }, index) => (
              <li
                key={index}
                className=" group flex flex-col justify-center items-center my-4 w-[70px] h-[70px] rounded-lg hover:border-2 active:bg-white hover:text-primary-green"
              >
                {/* to do change color of the icon when active */}
                <Icon name={name} />
                <Link
                  to={route}
                  className=" text-black text-sm group-hover:text-primary-green active:text-primary-green p-1 pr-0"
                >
                  {link}
                </Link>
              </li>
            ))}
          </div>
          <div>
            <li className="  flex flex-col justify-center items-center my-4 hover:border-2 active:bg-white hover:text-primary-green">
              <Icon name="logOut" />
              <span className="text-sm text-black ">Log Out</span>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
