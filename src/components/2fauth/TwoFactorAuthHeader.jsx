import React from "react";
import { useNavigate } from "react-router-dom";

const TwoFactorAuthHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Two-Factor Authentication
      </h1>

      <p className="text-lg text-gray-600 mb-8 max-w-md">
        This feature is coming soon. We’re working hard to bring you stronger
        security. Stay tuned!
      </p>

      <div className="flex gap-4">
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
          onClick={() => alert("We'll notify you soon!")}
        >
          Notify Me
        </button>

        <button
          className="px-6 py-3 bg-gray-300 text-gray-800 rounded-full shadow-md hover:bg-gray-400 transition"
          onClick={() => navigate("/dashboard")}
        >
          Back Home
        </button>
      </div>

      <p className="mt-10 text-sm text-gray-400 animate-pulse">
        🚧 Feature under construction
      </p>
    </div>
  );
};

export default TwoFactorAuthHeader;
