import EventBodyRight from "./EventBodyRight";
import EventBodyLeft from "./EventBodyLeft";

const EventBody = () => {
  return (
    <div className="w-full flex items-start justify-center gap-2">
      <div className="w-1/2">
        <EventBodyRight />
      </div>
      <div className="w-1/2">
        <EventBodyLeft />
      </div>
    </div>
  );
};

export default EventBody;
