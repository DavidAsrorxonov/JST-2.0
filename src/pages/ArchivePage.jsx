import ArchiveHeader from "../components/archive/ArchiveHeader";
import ArchiveBody from "../components/archive/ArchiveBody";
import PageWrapper from "../transition/PageWrapper";

const ArchivePage = () => {
  return (
    <PageWrapper>
      <div>
        <ArchiveHeader />
        <ArchiveBody />
      </div>
    </PageWrapper>
  );
};

export default ArchivePage;
