import React from "react";
import artket from "../assets/akp.png";
import dayplan from "../assets/dayp.png";
import datenight from "../assets/dnc.png";
import quiz from "../assets/quizme.png";
import weather from "../assets/wd.png";
import portfolio from "../assets/fsportfolio.png";

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

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8" >
            
            
            {/* SingleProject component */}
            <SingleProject projectName="ArtketPlace" projectImage={artket} repo="https://github.com/MoeCancode/artketplace" deployed="https://artketplace.herokuapp.com/"/>
            <SingleProject projectName="Date Night n Chill" projectImage={datenight} repo="https://github.com/MoeCancode/date-night-and-chill" deployed="https://sfzmango.github.io/date-night-and-chill/"/>
            <SingleProject projectName="Weather Dashboard" projectImage={weather} repo="https://github.com/MoeCancode/weather-dashboard" depolyed="https://moecancode.github.io/weather-dashboard/"/>
            <SingleProject projectName="Quiz Me!" projectImage={quiz} repo="https://github.com/MoeCancode/Quiz-me" deployed="https://moecancode.github.io/Quiz-me/"/>
            <SingleProject projectName="Day Planner" projectImage={dayplan} repo="https://github.com/MoeCancode/Day-Planner" deployed="https://moecancode.github.io/Day-Planner/"/>
            <SingleProject projectName="Old Portfolio" projectImage={portfolio} repo="https://github.com/MoeCancode/full-stack-portfolior" deployed="https://moesportfolio.herokuapp.com/"/>


        </div>
      </div>
    </div>
  );
};

export default Projects;
