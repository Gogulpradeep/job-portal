import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(Appcontext);

  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer h-10"
          src={assets.logo}
          alt="logo"
        />

        {user ? (
          <div className="flex items-center gap-3">
            <Link to="/applications" className="hover:text-blue-600">
              Applied Jobs
            </Link>
            <span className="text-gray-400">|</span>
            <p className="max-sm:hidden">
              Hi, {user.firstName} {user.lastName}
            </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 text-sm max-sm:gap-2">
            <button
              onClick={() => setShowRecruiterLogin(true)}
              className="text-gray-600 hover:text-gray-800 transition"
            >
              Recruiter Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
