import { CalendarDays } from "lucide-react";

const EventBodyLeft = () => {
  return (
    <div className="mt-2">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <CalendarDays size={18} /> Upcoming Events
      </h2>
      <ul className="mt-3 space-y-2 text-sm text-gray-600">
        <li>June 6 - React Workshop</li>
        <li>June 10 - AI Meetup</li>
        <li>June 15 - Hackathon Prep</li>
      </ul>
    </div>
  );
};

export default EventBodyLeft;
