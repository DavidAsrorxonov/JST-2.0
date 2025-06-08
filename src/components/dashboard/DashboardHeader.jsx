import React from "react";
import Logo from "../Logo";
import Input from "./Input";
import Notification from "./Notification";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import Events from "./Events";

const DashboardHeader = () => {
  const navigate = useNavigate();

  const options = [
    "Dashboard",
    "Applications",
    "Companies",
    "Events",
    "Support",
  ];

  return (
    <div className="flex shadow-lg">
      <Logo />
      <div className="flex items-center justify-center mr-auto ml-10 gap-7 text-gray-600">
        {options.map((option, idx) => (
          <div
            key={idx}
            className="text-lg font-bold cursor-pointer hover:text-gray-800"
            onClick={() => navigate(`/${option.toLowerCase()}`)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-10 mr-5">
        <Events />
        {/* <Input /> */}
        <Notification />
        <Profile />
      </div>
    </div>
  );
};

export default DashboardHeader;
