import { CalendarDays } from "lucide-react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { useDisclosure } from "@heroui/react";
import ProfileCalendar from "./ProfileCalendar";
import { useState } from "react";
import { parseDate } from "@internationalized/date";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { API_URL } from "../../constants/api";
import Toast from "../ui/Toast";
import { useUser } from "../../context/userContext";
import { authChecker } from "../../lib/utils/authChecker";

const Events = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const parsedDate = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(parseDate(parsedDate));
  const [isDateChosen, setIsDateChosen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const { id } = JSON.parse(localStorage.getItem("user"));

  const { logout } = useUser();

  const { t } = useTranslation();

  const newFormatted =
    date.year +
    "-" +
    date.month.toString().padStart(2, "0") +
    "-" +
    date.day.toString().padStart(2, "0");

  const payload = {
    event_name: eventName,
    event_description: eventDescription,
    event_date: newFormatted,
    user_id: id,
  };

  const handleAddEvent = async () => {
    if (!authChecker(logout)) {
      return;
    }

    const token = localStorage.getItem("token");

    if (!eventName || !eventDescription || !isDateChosen) {
      Toast({
        desciption: "All fields are required",
        color: "danger",
      });
    }

    try {
      const response = await axios.post(`${API_URL}/api/events`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        Toast({
          desciption: "Event added successfully",
          color: "success",
        });
      }
      setEventName("");
      setEventDescription("");
      setIsDateChosen(false);
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <>
      <div
        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[!171717] border border-white/30 cursor-pointer hover:bg-[#212121] transition "
        onClick={onOpen}
      >
        <CalendarDays size={20} className="text-[#e5e5e5]" />
        <div className="text-sm font-medium text-[#e5e5e5]">{t("Events")}</div>
      </div>

      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="md"
        backdrop="opaque"
        className="bg-[#171717]"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>
                <h1
                  className="text-4xl font-bold text-[#e5e5e5]"
                  onClick={() => console.log(typeof newFormatted)}
                >
                  {t("Events")}
                </h1>
              </DrawerHeader>
              <DrawerBody>
                <h1 className="font-semibold text-xl text-[#e5e5e5]">
                  {t("Create an event")}
                </h1>
                <span className="text-[#e5e5e5]">
                  {t("Choose a specific date to create an event")}
                </span>
                <div className="flex items-center justify-center">
                  <ProfileCalendar
                    date={date}
                    setDate={setDate}
                    setDateChosen={setIsDateChosen}
                  />
                </div>

                <div>
                  {isDateChosen && (
                    <>
                      <div className="font-semibold text-center text-md text-[#e5e5e5]">
                        {t("Create an event for")}:{" "}
                      </div>
                      <span className="flex items-center justify-center font-bold text-xl text-[#e5e5e5]">
                        {newFormatted}
                      </span>
                      <div className="mt-4 flex flex-col space-y-4">
                        <label className="text-[#e5e5e5]">
                          {t("Event name")}
                        </label>
                        <input
                          type="text"
                          placeholder={t("Event title")}
                          className="bg-[#212121] text-[#e5e5e5] p-2 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder:text-white/50"
                          value={eventName}
                          onChange={(e) => setEventName(e.target.value)}
                        />

                        <label className="text-[#e5e5e5]">
                          {t("Event description")}
                        </label>
                        <textarea
                          className="bg-[#212121] text-[#e5e5e5] p-2 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder:text-white/50"
                          placeholder={t("Event description")}
                          value={eventDescription}
                          onChange={(e) => setEventDescription(e.target.value)}
                        />

                        <button
                          className="px-4 py-1 bg-[#e5e5e5] transition-all text-[#212121] rounded-md"
                          onClick={handleAddEvent}
                        >
                          {t("Create")}
                        </button>
                        <button
                          className="px-4 py-1 bg-red-100 hover:bg-red-200 transition-all border border-red-500 text-red-600 rounded-md"
                          onClick={() => setIsDateChosen(false)}
                        >
                          {t("Cancel")}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </DrawerBody>
              <DrawerFooter>
                <button
                  onClick={onClose}
                  className="px-4 py-1 bg-[#171717] text-[#e5e5e5] border border-white/30 rounded-lg"
                >
                  {t("Close")}
                </button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Events;
