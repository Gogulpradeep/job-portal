import React from "react";
import { assets } from "../assets/assets";
import { Outlet, useNavigate, NavLink } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          {/* Logo */}
          <img
            onClick={() => navigate("/")}
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt="Company Logo"
          />

          {/* User Menu */}
          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome, InsiderJobs</p>
            <div className="relative group">
              <img
                className="w-8 h-8 object-cover border rounded-full cursor-pointer"
                src={assets.company_icon}
                alt="Company Icon"
              />
              <div
                className="absolute hidden group-hover:block top-full right-0 z-10 text-black 
                rounded mt-2 transition-all duration-200 ease-in-out transform opacity-0 
                group-hover:opacity-100 group-hover:translate-y-1"
              >
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm shadow-lg">
                  <li>
                    <button className="py-1 cursor-pointer pr-10 hover:text-red-500">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        {/* Sidebar */}
        <div className="inline-block min-h-screen border-r-2">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
              to="add-job"
            >
              <img className="min-w-4" src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
              to="manage-jobs"
            >
              <img className="min-w-4" src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
              to="view-applications"
            >
              <img className="min-w-4" src={assets.person_tick_icon} alt="" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>

        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
