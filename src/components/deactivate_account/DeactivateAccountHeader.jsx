import React from "react";
import { useNavigate } from "react-router-dom";

const DeactivateAccountHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#171717] flex flex-col items-center justify-center px-6 text-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#e5e5e5] mb-4">
        Account Deactivation
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-[#a3a3a3] mb-8 max-w-md">
        This feature is coming soon. We’re working hard to bring you stronger
        security. Stay tuned!
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          className="px-6 py-3 bg-[#212121] text-[#e5e5e5] border border-white/30 rounded-full shadow-md hover:bg-[#2e2e2e] transition"
          onClick={() => alert("We'll notify you soon!")}
        >
          Notify Me
        </button>

        <button
          className="px-6 py-3 bg-[#0a0a0a] text-[#e5e5e5] border border-white/20 rounded-full shadow-md hover:bg-[#1a1a1a] transition"
          onClick={() => navigate("/dashboard")}
        >
          Back Home
        </button>
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-[#a3a3a3] animate-pulse">
        🚧 Feature under construction
      </p>
    </div>
  );
};

export default DeactivateAccountHeader;
