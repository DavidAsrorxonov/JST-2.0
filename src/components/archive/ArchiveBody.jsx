import ArchiveLeft from "./ArchiveLeft";
import ArchiveRight from "./ArchiveRight";

const ArchiveBody = () => {
  return (
    <div className="flex w-full h-[80vh] overflow-hidden">
      <div className="w-1/2 h-full border-r border-white/30 overflow-y-auto p-4">
        <ArchiveLeft />
      </div>
      <div className="w-1/2 h-full overflow-y-auto p-4">
        <ArchiveRight />
      </div>
    </div>
  );
};

export default ArchiveBody;
