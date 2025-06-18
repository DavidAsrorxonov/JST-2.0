import { ArchiveIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Archive = () => {
  const navigate = useNavigate();

  return (
    <div
      className="absolute bottom-3 right-4 p-3 rounded-full bg-blue-100 text-blue-600 border border-blue-500 cursor-pointer"
      onClick={() => navigate("/archive")}
    >
      <ArchiveIcon />
    </div>
  );
};

export default Archive;
