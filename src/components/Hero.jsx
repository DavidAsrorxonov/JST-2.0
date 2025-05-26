import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import GetStartedButton from "./GetStartedButton";
import { ChevronsDown } from "lucide-react";

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex items-center justify-center mt-5 h-screen relative">
      <div className="w-[70%]">
        <img
          src="/images/hero.PNG"
          className="w-full h-[750px] blur-sm rounded-3xl"
          alt="Hero"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4 px-4">
          <div className="text-white text-6xl font-bold text-center">
            Track Your Job Applications{" "}
            <span className="glowing">Effortlessly</span>
          </div>
          <span className="text-white text-xl text-center flex mt-10">
            Stay organized and on top of your job search with our intuitive
            application tracker. Manage your applications, track progress, and
            never miss an opportunity.
          </span>
          <div className="flex items-center justify-center mt-10">
            <div className="w-[20%]">
              <GetStartedButton />
            </div>
          </div>
        </div>
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-16 w-full flex justify-center">
          <div className="flex flex-col items-center gap-2 animate-pulse text-white">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-xl w-20 h-20" />
              <ChevronsDown
                size={60}
                className="text-white drop-shadow-lg animate-bounce"
              />
            </div>
            <span className="text-sm tracking-wide uppercase text-black/90">
              Scroll to Explore
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
