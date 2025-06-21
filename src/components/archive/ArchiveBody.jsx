import ArchiveLeft from "./ArchiveLeft";
import ArchiveRight from "./ArchiveRight";

const ArchiveBody = () => {
  return (
    <div className="flex w-full h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-1/2 h-full border-r border-gray-200 overflow-y-auto p-4">
        <ArchiveLeft />
      </div>
      <div className="w-1/2 h-full border-l border-gray-200 overflow-y-auto p-4">
        <ArchiveRight />
      </div>
    </div>
  );
};

export default ArchiveBody;
