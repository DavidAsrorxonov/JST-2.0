import React from "react";
import AccountDeleteHeader from "../components/account-delete/AccountDeleteHeader";
import AccountDeleteBody from "../components/account-delete/AccountDeleteBody";

const AccountDeletePage = () => {
  return (
    <div>
      <div className="flex flex-col h-screen bg-[#171717] text-[#e5e5e5]">
        <AccountDeleteHeader />

        <div className="flex-1 flex justify-center px-4 py-6">
          <AccountDeleteBody />
        </div>
      </div>
    </div>
  );
};

export default AccountDeletePage;
