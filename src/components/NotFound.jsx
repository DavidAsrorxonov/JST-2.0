import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-100 px-6 py-12">
      <div className="text-center max-w-xl animate-fade-in">
        <h1 className="text-[8rem] font-extrabold text-blue-600 drop-shadow-lg tracking-widest mb-4 glow">
          404
        </h1>
        <p className="text-2xl font-semibold mb-4 text-gray-800">
          Uh oh! Page not found.
        </p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-300"
        >
          Go Back Home
        </button>
      </div>

      <style jsx>{`
        .glow {
          text-shadow: 0 0 5px #3b82f6, 0 0 15px #3b82f6, 0 0 30px #3b82f6;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out both;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
