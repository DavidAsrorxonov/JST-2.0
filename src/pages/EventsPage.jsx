import EventBody from "../components/events/EventBody";
import EventHeader from "../components/events/EventHeader";
import PageWrapper from "../transition/PageWrapper";

const EventsPage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col h-screen bg-[#171717] text-[#e5e5e5]">
        <EventHeader />

        <div className="flex-1 flex justify-center px-4 py-6">
          <EventBody />
        </div>
      </div>
    </PageWrapper>
  );
};

export default EventsPage;
