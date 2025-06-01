import { Bell } from "lucide-react";
import React from "react";

const Notification = () => {
  return (
    <div className=" w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors">
      <Bell size={25} className="text-gray-600" />
    </div>
  );
};

export default Notification;
