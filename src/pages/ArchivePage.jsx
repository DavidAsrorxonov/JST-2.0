import ArchiveHeader from "../components/archive/ArchiveHeader";
import ArchiveBody from "../components/archive/ArchiveBody";
import PageWrapper from "../transition/PageWrapper";

const ArchivePage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col h-screen bg-[#171717] text-[#e5e5e5]">
        <ArchiveHeader />

        <div className="flex-1 flex justify-center px-4 py-6">
          <ArchiveBody />
        </div>
      </div>
    </PageWrapper>
  );
};

export default ArchivePage;
