import { Tooltip } from "@heroui/tooltip";

const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer m-2">
      <Tooltip content="Job Site Tracker">
        <img
          src="/images/jst_logo_bg_remove.png"
          className="w-8 h-8 hover:bg-[#262626] rounded-lg transition-colors"
        />
      </Tooltip>
    </div>
  );
};

export default Logo;
