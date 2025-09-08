import { useEffect, useState } from "react";
import { useEvent } from "../../context/eventContext";
import NavigationButtons from ".././ui/NavigationButtons";
import { Bell, Check, Ellipsis } from "lucide-react";
import { Tooltip } from "@heroui/tooltip";
import { useTranslation } from "react-i18next";

const EventBodyRight = () => {
  const [ellipsisOpen, setEllipsisOpen] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [customReminderModal, setCustomReminderModal] = useState(false);
  const [reminderEvent, setReminderEvent] = useState(null);

  const { events, fetchEvents } = useEvent();
  const { id, firstName } = JSON.parse(localStorage.getItem("user"));

  const { t } = useTranslation();

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

  const handleBellClick = (event) => {
    setCustomReminderModal(true);
    setReminderEvent(event);

    setTimeout(() => {
      setCustomReminderModal(false);
      setReminderEvent(null);
    }, 3000);
  };

  return (
    <>
      <div className="max-w-4xl mx-3 relative select-none">
        <h1 className="text-2xl font-semibold mb-6 text-[#e5e5e5]">
          {t("Your recorded events")}
        </h1>

        <div className="border border-white/30 rounded-xl max-h-[70vh] overflow-y-auto p-4 bg-[#0a0a0a] shadow-inner">
          {events && events.length > 0 ? (
            events.map(({ event_name, event_description, event_date }, idx) => (
              <div
                key={idx}
                className="bg-[#171717] hover:bg-[#212121] transition-colors duration-200 p-5 rounded-xl shadow-md border border-white/20 mb-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lg">📌</span>
                  <h2 className="text-lg font-semibold text-[#e5e5e5] flex-1">
                    {event_name}
                  </h2>

                  <div className="flex gap-2 items-center">
                    <Tooltip content={t("Set reminder")} showArrow={true}>
                      <div className="hover:bg-[#212121] p-2 rounded-md cursor-pointer transition-all">
                        <Bell
                          onClick={() =>
                            handleBellClick({ event_name, event_date })
                          }
                          className="text-[#e5e5e5]"
                        />
                      </div>
                    </Tooltip>

                    <div className="hover:bg-[#212121] p-2 rounded-md cursor-pointer transition-all">
                      <Ellipsis
                        onClick={(e) => handleEllipsisClick(e, idx)}
                        className="text-[#e5e5e5]"
                      />
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#cccccc] mb-2">
                  📝 <span className="font-medium">{t("Description")}:</span>{" "}
                  {event_description}
                </p>

                <p className="text-sm text-[#aaaaaa]">
                  📅 <span className="font-medium">{t("Date")}:</span>{" "}
                  {event_date}
                </p>

                {ellipsisOpen === idx && (
                  <div
                    className="absolute bg-[#212121] border border-white/30 rounded-md shadow-lg p-2 w-44 z-20"
                    style={{ top: modalPosition.top, left: modalPosition.left }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p className="text-sm text-[#e5e5e5] hover:bg-[#171717] px-3 py-2 cursor-pointer rounded-md transition-colors">
                      {t("Mark as completed")}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div>
              <p className="text-[#aaaaaa]">{t("No events recorded yet")}</p>
            </div>
          )}
        </div>
      </div>

      <NavigationButtons />

      {customReminderModal && reminderEvent && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-xl border border-blue-400 bg-[#171717] text-[#e5e5e5] text-sm max-w-xs w-fit">
          <div className="flex items-start gap-3">
            <Check size={25} className="text-blue-400 mt-0.5" />
            <div>
              <p className="font-semibold text-[#e5e5e5]">
                {t("Reminder set for")}:{" "}
                <span className="text-blue-400">
                  {reminderEvent.event_name}
                </span>
              </p>
              <p className="text-[#cccccc] text-xs">
                📅 {reminderEvent.event_date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventBodyRight;
