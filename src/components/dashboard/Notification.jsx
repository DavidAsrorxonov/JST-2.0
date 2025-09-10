import { Bell } from "lucide-react";

const Notification = () => {
  return (
    <div className="relative">
      <div className="group relative w-10 h-10 rounded-lg flex items-center justify-center bg-[#171717] border border-white/30 transition-colors cursor-pointer">
        <Bell size={25} strokeWidth={1.5} className="text-[#e5e5e5]" />

        <div className="absolute top-10 right-0 z-50 w-[250px] px-4 py-2 rounded-lg shadow-lg border border-white/30 bg-[#171717] text-[#e5e5e5] text-sm max-w-xs select-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
          There are no notifications yet
        </div>
      </div>
    </div>
  );
};

export default Notification;
