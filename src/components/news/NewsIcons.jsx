import { Newspaper } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NewsIcons = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-fit h-10 rounded-xl px-4 gap-2 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
      onClick={() => navigate("/news")}
    >
      <Newspaper size={25} className="text-gray-600" />
      <div className="text-gray-600">Latest Dev News</div>
    </div>
  );
};

export default NewsIcons;
