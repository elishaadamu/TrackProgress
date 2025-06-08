import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // Adjust the path as necessary
import TPLogo from "../assets/TP-Logo.png"; // Adjust the path as necessary

function Navbar() {
  return (
    <div className="navbar bg-white shadow-md">
      <nav className="flex justify-between items-center flex-wrap p-4   max-w-[1280px] mx-auto">
        <div className="flex items-center">
          <div className="flex gap-10 items-center">
            <Link to="/">
              <img src={TPLogo} alt="Logo" className="h-auto w-40 mr-2" />
            </Link>
            <button className="border text-[#008085] text-[18px] font-semibold   hover:bg-[#008085] hover:text-white py-2 px-2 rounded-sm hover:transistion duration-300 ease-in-out">
              How to
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <img src={Logo} alt="TP Logo" className="h-auto w-40 ml-2" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
