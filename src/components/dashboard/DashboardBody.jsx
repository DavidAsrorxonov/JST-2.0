import React from "react";
import Input from "./Input";
import Table from "./Table";
import DashboardIntro from "./DashboardIntro";
import TableActions from "./TableActions";
import EditingInfo from "../EditingInfo";
import Filtering from "./Filtering";
import Sorting from "./Sorting";

const DashboardBody = () => {
  return (
    <>
      <DashboardIntro />
      <div className="w-[70%] m-10">
        <Input />
        <div className="w-full flex items-center">
          <Filtering />
          <Sorting />
        </div>
      </div>
      <TableActions />
      <Table />
      <EditingInfo />
    </>
  );
};

export default DashboardBody;
