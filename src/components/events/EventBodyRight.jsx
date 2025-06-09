import React, { useEffect, useState } from "react";
import { useEvent } from "../../context/eventContext";
import NavigationButtons from "../NavigationButtons";
import { Bell, Ellipsis } from "lucide-react";
import { Tooltip } from "@heroui/tooltip";

const EventBodyRight = () => {
  const [ellipsisOpen, setEllipsisOpen] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const { events, fetchEvents } = useEvent();
  const { id, firstName } = JSON.parse(localStorage.getItem("user"));

  const handleEllipsisClick = (e, idx) => {
    e.stopPropagation();
    const rect = e.target.getBoundingClientRect();
    setModalPosition({
      top: rect.bottom + window.scrollY - 80,
      left: rect.left + window.scrollX - 150,
    });
    setEllipsisOpen((prev) => (prev === idx ? null : idx));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setEllipsisOpen(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  return (
    <>
      <div className="max-w-4xl mx-3 relative select-none">
        <h1 className="text-2xl font-semibold mb-4">Your recorded events</h1>

        <div className="border border-gray-200 rounded-lg max-h-[80vh] overflow-y-scroll p-3 shadow-inner bg-white">
          {events.map(({ event_name, event_description, event_date }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 p-4 rounded-xl shadow-sm mb-3"
            >
              <p className="flex items-center justify-center text-lg font-medium text-gray-800 mb-1">
                📌 <span className="font-semibold">Event name:</span>{" "}
                {event_name}
                <div className="ml-auto flex gap-1 items-center justify-center">
                  <div className="hover:bg-gray-200 rounded-md cursor-pointer transition-all px-2 py-1">
                    <Tooltip content="Set reminder" showArrow={true}>
                      <Bell />
                    </Tooltip>
                  </div>
                  <div className="hover:bg-gray-200 rounded-md cursor-pointer transition-all px-2 py-1">
                    <Ellipsis onClick={(e) => handleEllipsisClick(e, idx)} />
                  </div>
                </div>
              </p>
              <p className="text-sm text-gray-600 mb-1">
                📝 <span className="font-medium">Description:</span>{" "}
                {event_description}
              </p>
              <p className="text-sm text-gray-500">
                📅 <span className="font-medium">Date:</span> {event_date}
              </p>
              {ellipsisOpen === idx && (
                <div
                  className="absolute bg-white border rounded-md shadow-md p-2 w-40 z-10"
                  style={{ top: modalPosition.top, left: modalPosition.left }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-sm hover:bg-gray-100 px-2 py-1 cursor-pointer rounded">
                    Mark as completed
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <NavigationButtons />
    </>
  );
};

export default EventBodyRight;
