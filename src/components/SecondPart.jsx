import React from "react";
import "../styles/Logo.css";

const SecondPart = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 h-screen">
      <h1 className="text-5xl font-bold">
        About{" "}
        <span className="gradient-effect font-oswald tracking-widest text-6xl">
          JST
        </span>
      </h1>
      <div className="w-full h-screen flex items-center justify-between bg-red-400"></div>
    </div>
  );
};

export default SecondPart;
