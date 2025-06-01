import React from "react";
import Logo from "../Logo";
import Input from "./Input";
import Notification from "./Notification";
import Profile from "./Profile";

const DashboardHeader = () => {
  const options = ["Dashboard", "Applications", "Companies"];

  return (
    <div className="flex shadow-lg">
      <Logo />
      <div className="flex items-center justify-center mr-auto ml-10 gap-7 text-gray-600 hover:text-gray-800">
        {options.map((option, idx) => (
          <div key={idx} className="text-lg font-bold cursor-pointer">
            {option}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-10 mr-5">
        {/* <Input /> */}
        <Notification />
        <Profile />
      </div>
    </div>
  );
};

export default DashboardHeader;
