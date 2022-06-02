import { useState } from "react";
import DP from "../assets/cropped.jpg";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDiceFive,
  FaFileAlt
} from "react-icons/fa";

const Header = () => {
  const [navMode, setNavMode] = useState(false);

  function toggleNav() {
    setNavMode(!navMode);
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-[#FFFFFF] font-bold">
      {/* My picture  */}
      <div>
        <img className="border-4 border-[#c27137]"
          src={DP}
          alt="Display Picture"
          style={{ width: "55px", height: "auto", borderRadius: "50%" }}
        />
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>

      {/* Collapsed menu icon */}
      <div className="md:hidden z-10" onClick={toggleNav}>
        {navMode ? <FaTimes /> : <FaBars />}
      </div>

      {/* Collapsed menu option */}
      <ul
        className={
          navMode
            ? "absolute top-0 left-0 w-full h-screen bg-[#1b0707] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
        <li className="py-6 text-4xl">Resume</li>
      </ul>

      {/* Socials */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]" style={{color: "pink", border: "1px solid pink"}}>
            <a href="https://github.com/MoeCancode/" className="flex justify-between items-center w-full">
              GitHub <span style={{color: "white"}}><FaGithub size={30}/></span>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]" style={{color: "#2d7dd2", border: "1px solid #2d7dd2"}}>
            <a href="https://www.linkedin.com/in/mohammad-razvi/" className="flex justify-between items-center w-full">
              LinkedIn <span style={{color: "white"}}><FaLinkedin size={30}/></span>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]" style={{color: "#3e885b", border: "1px solid #3e885b"}}>
            <a href="https://www.fiverr.com/abuzarrazvi?up_rollout=true" className="flex justify-between items-center w-full">
              Fiverr <span style={{color: "white"}}><FaDiceFive size={30}/></span>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]" style={{color: "#C2714F", border: "1px solid #C2714F"}}>
            <a href="https://drive.google.com/file/d/1yHR2GHoHAl7Lk1ZjDfdkKc5mvRDyIM4m/view?usp=sharing" className="flex justify-between items-center w-full">
              Resume <span style={{color: "white"}}><FaFileAlt size={30}/></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
