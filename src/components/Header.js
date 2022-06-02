import { useState } from "react";
import DP from "../assets/cropped.jpg";
import {FaBars, FaTimes} from "react-icons/fa"
import React from "react";

const Header = () => {
  const [navMode, setNavMode] = useState(false);

  function toggleNav() {
    setNavMode(!navMode);
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-[#FFFFFF] font-bold">
      {/* My picture  */}
      <div>
        <img
          src={DP}
          alt="Display Picture"
          style={{ width: "55px", height: "auto", borderRadius: "50%" }}
        />
      </div>
      
      {/* Nav Links */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      
      {/* Collapsed menu icon */}
      <div className="md:hidden z-10" onClick={toggleNav}>
        {navMode ? <FaTimes/> : <FaBars/>}
      </div>
      
      {/* Collapsed menu option */}
      <ul className={navMode ? "absolute top-0 left-0 w-full h-screen bg-[#1b0707] flex flex-col justify-center items-center": "hidden"}>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Projects</li>
          <li className="py-6 text-4xl">Contact</li>
          <li className="py-6 text-4xl">Resume</li>
        </ul>
    </div>
  );
};

export default Header;
