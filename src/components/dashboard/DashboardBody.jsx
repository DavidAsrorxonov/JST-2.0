import React from "react";
import Input from "./Input";
import Table from "./Table";
import DashboardIntro from "./DashboardIntro";
import TableActions from "./TableActions";
import EditingInfo from "../EditingInfo";
import Filtering from "./Filtering";

const DashboardBody = () => {
  return (
    <>
      <DashboardIntro />
      <div className="w-[50%] m-10">
        <Input />
        <Filtering />
      </div>
      <TableActions />
      <Table />
      <EditingInfo />
    </>
  );
};

export default DashboardBody;
