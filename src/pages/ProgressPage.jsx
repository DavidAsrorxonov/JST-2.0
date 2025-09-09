import ProgressHeader from "../components/progress/ProgressHeader";
import ProgressBody from "../components/progress/ProgressBody";
import PageWrapper from "../transition/PageWrapper";

const ProgressPage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col h-fit bg-[#171717] text-[#e5e5e5]">
        <ProgressHeader />

        <div className="flex-1 flex justify-center px-4 py-6">
          <ProgressBody />
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProgressPage;
