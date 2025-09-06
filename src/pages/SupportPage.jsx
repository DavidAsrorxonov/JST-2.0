import SupportHeader from "../components/support/SupportHeader";
import SupportBody from "../components/support/SupportBody";
import PageWrapper from "../transition/PageWrapper";

const SupportPage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col h-screen bg-[#171717] text-[#e5e5e5]">
        <SupportHeader />

        <div className="flex-1 flex justify-center px-4 py-6">
          <SupportBody />
        </div>
      </div>
    </PageWrapper>
  );
};

export default SupportPage;
