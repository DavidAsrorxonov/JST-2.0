import React from "react";
import "../styles/Hero.css";
import GetStartedButton from "./GetStartedButton";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center mt-5">
      <div className="relatice inline-block w-[70%]">
        <img
          src="/images/hero.PNG"
          className="w-[100%] h-[750px] blur-sm rounded-3xl"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4">
          <div className="text-white text-6xl font-bold text-center">
            Track Your Job Applications{" "}
            <span className="glowing">Effortlessly</span>
          </div>
          <span className="text-white text-xl text-center flex mt-10">
            Stay organized and on top of your job search with out intuitive
            application tracker. Manage your applications, track progress, and
            never miss an opportunity
          </span>
          <div className="flex items-center justify-center mt-10">
            <div className="w-[20%]">
              <GetStartedButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
