import React, { useState, useEffect } from "react";
import GetStartedButton from "./GetStartedButton";
import { ChevronsDown } from "lucide-react";
import "../styles/Hero.css";

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
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-white to-yellow-50 px-6"
      id="home"
    >
      <div className="absolute w-96 h-96 bg-yellow-50 opacity-30 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse-slow"></div>
      <div className="absolute w-96 h-96 bg-orange-50 opacity-20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse-slow"></div>

      <div className="z-10 max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Track Your Job Applications{" "}
          <span className="glowing text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
            Effortlessly
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-800 animate-fade-in">
          Stay organized and on top of your job search with our smart
          application tracker. Visualize progress, manage tasks, and never miss
          an opportunity.
        </p>
        <div className="mt-10 flex justify-center animate-fade-in">
          <div className="w-40">
            <GetStartedButton />
          </div>
        </div>
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-16 w-full flex justify-center z-20">
          <div className="flex flex-col items-center gap-2 animate-pulse text-gray-800">
            <ChevronsDown size={48} className="text-gray-700 animate-bounce" />
            <span className="text-sm tracking-wide uppercase text-gray-700">
              Scroll to Explore
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
