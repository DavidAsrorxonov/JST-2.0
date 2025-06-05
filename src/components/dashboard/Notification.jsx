import { Bell } from "lucide-react";
import React, { useState } from "react";

const Notification = () => {
  const [notificationModal, setNotificationModal] = useState(false);

  return (
    <>
      <div
        className=" w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
        onClick={() => setNotificationModal(!notificationModal)}
      >
        <Bell size={25} className="text-gray-600" />
      </div>

      {notificationModal && (
        <div className="absolute top-16 right-16 z-50 px-6 py-4 rounded-lg shadow-lg border border-blue-300 bg-blue-50 text-black text-sm max-w-xs w-fit select-none transition-all duration-300">
          There are no notifications yet
        </div>
      )}
    </>
  );
};

export default Notification;
