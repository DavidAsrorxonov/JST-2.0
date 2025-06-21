import React from "react";
import NavigationButtons from "../ui/NavigationButtons";
import EmptyState from "../ui/EmptyState";
import { ArrowBigDown } from "lucide-react";

const ArchiveRight = () => {
  return (
    <div>
      <NavigationButtons />
      <h1 className="text-4xl font-bold text-gray-800">Archived Events</h1>
      <EmptyState
        title={"Your archive is empty"}
        subtitle={"You don't have any archived events yet."}
      />
    </div>
  );
};

export default ArchiveRight;
