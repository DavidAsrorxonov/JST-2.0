import SupportHeader from "../components/support/SupportHeader";
import SupportBody from "../components/support/SupportBody";
import PageWrapper from "../transition/PageWrapper";

const SupportPage = () => {
  return (
    <PageWrapper>
      <div>
        <SupportHeader />
        <SupportBody />
      </div>
    </PageWrapper>
  );
};

export default SupportPage;
