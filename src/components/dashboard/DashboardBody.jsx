import React from "react";
import Input from "./Input";

const DashboardBody = () => {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="w-[90%] h-full mt-10">
        <div className="font-bold text-4xl mb-5">Dashboard</div>
        <span>Manage your job applications and track your progress</span>
        <div className="w-[50%] flex items-start justify-start mt-10">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;
