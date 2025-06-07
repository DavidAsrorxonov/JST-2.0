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

const Events = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const parsedDate = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(parseDate(parsedDate));
  const [isDateChosen, setIsDateChosen] = useState(false);

  const newFormatted =
    date.year +
    "-" +
    date.month.toString().padStart(2, "0") +
    "-" +
    date.day.toString().padStart(2, "0");

  return (
    <>
      <div
        className="w-fit h-10 rounded-xl px-4 gap-2 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
        onClick={onOpen}
      >
        <CalendarDays size={25} className="text-gray-600" />
        <div className="text-gray-600">Events</div>
      </div>

      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="md"
        backdrop="opaque"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>
                <h1 className="text-4xl font-bold">Events</h1>
              </DrawerHeader>
              <DrawerBody>
                <h1 className="font-semibold text-xl">Create an event</h1>
                <span>Choose a specific date to create an event</span>
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
                      <div className="font-semibold text-center text-md">
                        Create an event for:{" "}
                      </div>
                      <span className="flex items-center justify-center font-bold text-xl">
                        {newFormatted}
                      </span>
                      <div className="mt-4 flex flex-col space-y-4">
                        <label>Event name</label>
                        <input
                          type="text"
                          placeholder="Event title"
                          className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <label>Event description</label>
                        <textarea
                          className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Event description"
                        />

                        <button className="px-4 py-1 bg-blue-100 hover:bg-blue-200 transition-all border border-blue-500 text-blue-600 rounded-md">
                          Create
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </DrawerBody>
              <DrawerFooter>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-red-100 border border-red-500 text-red-600 rounded-full"
                >
                  Close
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
