import { ArchiveIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Archive = () => {
  const navigate = useNavigate();

  return (
    <div
      className="absolute bottom-3 right-4 p-3 rounded-full bg-[#171717] text-[#e5e5e5] border border-white/30 cursor-pointer"
      onClick={() => navigate("/archive")}
    >
      <ArchiveIcon />
    </div>
  );
};

export default Archive;
