import { Bell } from "lucide-react";
import { useState } from "react";

const Notification = () => {
  const [notificationModal, setNotificationModal] = useState(false);

  return (
    <>
      <div
        className=" w-10 h-10 rounded-lg flex items-center justify-center bg-[#171717] border border-white/30 transition-colors cursor-pointer"
        onClick={() => setNotificationModal(!notificationModal)}
      >
        <Bell size={25} strokeWidth={1.5} className="text-[#e5e5e5]" />
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
