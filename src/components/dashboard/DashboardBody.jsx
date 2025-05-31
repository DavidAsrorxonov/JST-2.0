import React from "react";
import Input from "./Input";
import Table from "./Table";

const DashboardBody = () => {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="w-[80%] h-full mt-10">
        <div className="w-full flex flex-col items-center justify-center mt-10">
          <div className="w-[80%] flex flex-col items-start justify-start">
            <div className="font-bold text-4xl mb-5">Dashboard</div>
            <span>Manage your job applications and track your progress</span>
          </div>
          <div className="w-[50%] flex items-start justify-start mt-10">
            <Input />
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;
