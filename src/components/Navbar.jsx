import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain"></img>
      </Link>
        {user && (
          <div className="space-x-2.5">
            <Link
              to="/create-post"
              className="font-inter font-medium bg-[#6a27a0] text-white px-4 py-2 rounded-md"
            >
              Create
            </Link>
            <button
              className="font-inter font-medium bg-[#15a033] text-white px-4 py-1.5 rounded-md"
              onClick={handleClick}
            >
              Log out
            </button>
          </div>
        )}
        {!user && (
          <div className="space-x-2.5">
            <Link
              to="/login"
              className="font-inter font-medium bg-[#15a033] text-white px-4 py-2 rounded-md"
            >
              Login
            </Link>
          </div>
        )}
    </header>
  );
};

export default Navbar;
