import ProgressHeader from "../components/progress/ProgressHeader";
import ProgressBody from "../components/progress/ProgressBody";
import PageWrapper from "../transition/PageWrapper";

const ProgressPage = () => {
  return (
    <PageWrapper>
      <div>
        <ProgressHeader />
        <ProgressBody />
      </div>
    </PageWrapper>
  );
};

export default ProgressPage;
