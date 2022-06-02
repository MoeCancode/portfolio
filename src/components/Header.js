import DP from "../assets/cropped.jpg";

const Header = () => {
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
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </div>
      {/* Collapsed menu icon */}
      <div>
        {}
      </div>
      {/* Collapsed menu option */}
      <ul className="hidden">
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
    </div>
  );
};

export default Header;
