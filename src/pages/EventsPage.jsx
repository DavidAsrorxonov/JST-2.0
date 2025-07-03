import EventBody from "../components/events/EventBody";
import EventHeader from "../components/events/EventHeader";
import PageWrapper from "../transition/PageWrapper";

const EventsPage = () => {
  return (
    <PageWrapper>
      <div>
        <EventHeader />
        <EventBody />
      </div>
    </PageWrapper>
  );
};

export default EventsPage;
