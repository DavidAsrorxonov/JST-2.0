import Input from "./Input";
import Table from "./Table";
import DashboardIntro from "./DashboardIntro";
import TableActions from "./TableActions";
import EditingInfo from "../ui/EditingInfo";
import Filtering from "./Filtering";
import Sorting from "./Sorting";
import ShortcutHelp from "../../lib/commands/ShortcutHelp";
import CheckboxSelected from "./CheckboxSelected";
import SortingByDate from "./SortingByDate";

const DashboardBody = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <DashboardIntro />
      <div className="w-full">
        <Input />
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start gap-2 px-10 mb-5">
        <Filtering />
        <Sorting />
        <SortingByDate />
      </div>
      <CheckboxSelected />
      <TableActions />
      <Table />
      <EditingInfo />
      <ShortcutHelp />
    </div>
  );
};

export default DashboardBody;
