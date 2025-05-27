import { ArrowLeft, House } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-6 left-6 flex gap-2 z-50">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center px-4 py-2 bg-blue-200 hover:bg-blue-300 transition rounded-full border border-blue-500 gap-2 text-blue-600 hover:text-blue-700 font-semibold"
      >
        <ArrowLeft size={20} />
        Back
      </button>
      <button
        onClick={() => navigate("/")}
        className="flex items-center px-4 py-2 bg-blue-200 hover:bg-blue-300 transition rounded-full border border-blue-500 gap-2 text-blue-600 hover:text-blue-700 font-semibold"
      >
        <House size={20} />
        Home
      </button>
    </div>
  );
};

export default NavigationButtons;
