import React from "react";
import PasswordChangeHeader from "../components/password_change/PasswordChangeHeader";
import PasswordChangeBody from "../components/password_change/PasswordChangeBody";

const PasswordChange = () => {
  return (
    <div>
      <div className="flex flex-col h-screen bg-[#171717] text-[#e5e5e5]">
        <PasswordChangeHeader />

        <div className="flex-1 flex justify-center px-4 py-6">
          <PasswordChangeBody />
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;
