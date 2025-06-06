import { CalendarDays } from "lucide-react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { useDisclosure } from "@heroui/react";

const Events = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
              <DrawerBody>No events yet</DrawerBody>
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
