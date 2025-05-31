import React from "react";
import Input from "./Input";
import Table from "./Table";
import DashboardIntro from "./DashboardIntro";

const DashboardBody = () => {
  return (
    <>
      <DashboardIntro />
      <div className="w-[50%] m-10">
        <Input />
      </div>
      <Table />
    </>
  );
};

export default DashboardBody;
