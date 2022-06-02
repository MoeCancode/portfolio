import React from "react";
import artket from "../assets/akp.png";
import dayplan from "../assets/dayp.png";
import datenight from "../assets/dnc.png";
import quiz from "../assets/quizme.png";
import weather from "../assets/wd.png";

import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-[#c27137] font-bold inline border-b-4 border-dashed border-white">Projects</p>
          <p className="font-bold text-white py-6">
            Click Project Name to visit Github Repository. Click image to visit
            Deployed link.
          </p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" >
            
            
            {/* SingleProject component */}
            <SingleProject projectName="ArtketPlace" projectImage={artket}/>

        </div>
      </div>
    </div>
  );
};

export default Projects;
