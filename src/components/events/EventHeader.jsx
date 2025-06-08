import React from "react";
import Logo from "../Logo";
import { getTimeOfDay } from "../../lib/utils/getTimeOfDay";

const EventHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-6">
        <Logo />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Event Manager</h1>
          <p className="text-sm text-gray-500">
            {getTimeOfDay()}, {user?.firstName}
          </p>
        </div>
      </div>

      {user && (
        <div className="flex flex-col items-end text-sm">
          <span className="font-medium text-gray-800">
            {user.firstName} {user.lastName}
          </span>
          <span className="text-gray-500 text-xs">User ID: {user.id}</span>
          <span className="text-gray-400 text-xs">{user.email}</span>
        </div>
      )}
    </header>
  );
};

export default EventHeader;
