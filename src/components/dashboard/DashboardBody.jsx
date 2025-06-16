import React from "react";
import Input from "./Input";
import Table from "./Table";
import DashboardIntro from "./DashboardIntro";
import TableActions from "./TableActions";
import EditingInfo from "../EditingInfo";
import Filtering from "./Filtering";
import Sorting from "./Sorting";
import ShortcutHelp from "../../lib/commands/ShortcutHelp";
import CheckboxSelected from "./CheckboxSelected";

const DashboardBody = () => {
  return (
    <>
      <DashboardIntro />
      <div className="w-full m-10">
        <Input />
        <div className="w-full flex items-center gap-2">
          <Filtering />
          <Sorting />
        </div>
      </div>
      <CheckboxSelected />
      <TableActions />
      <Table />
      <EditingInfo />
      <ShortcutHelp />
    </>
  );
};

export default DashboardBody;
