import { useState } from "react";
import { useUser } from "../../context/userContext";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { useDisclosure, Switch, Select, SelectItem } from "@heroui/react";
import { UserRound, UserRoundPen } from "lucide-react";
import ProfileCalendar from "./ProfileCalendar";
import { MoonIcon } from "../../../public/icons/MoonIcon";
import { SunIcon } from "../../../public/icons/SunIcon";

const Profile = () => {
  const [imageURL, setImageURL] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const user = JSON.parse(localStorage.getItem("user"));
  const userInitials = user.firstName[0] + user.lastName[0];
  const userFullName = `${user.firstName} ${user.lastName}`;
  const userEmail = user.email;
  const userId = user.id;

  const languages = [
    {
      value: "en",
      label: "English",
      flag: "🇬🇧",
    },
    {
      value: "ru",
      label: "Русский",
      flag: "🇷🇺",
    },
    {
      value: "uz",
      label: "O'zbek",
      flag: "🇺🇿",
    },
  ];

  return (
    <>
      <div
        className={`flex items-center justify-center w-14 h-14 rounded-full cursor-pointer bg-gray-200 select-none`}
        onClick={onOpen}
      >
        <span className="text-black font-bold">{userInitials}</span>
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
              <DrawerHeader className="flex flex-col gap-1">
                <div className="w-full flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-400">
                    <UserRound className="text-gray-600" size={30} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold text-2xl">{userFullName}</div>
                    <div className="font-normal text-sm">{userEmail}</div>
                  </div>
                  <div className="px-6 py-1 bg-purple-100 border border-purple-500 text-purple-600 rounded-full text-sm flex items-center justify-center ml-auto cursor-pointer">
                    Edit
                  </div>
                </div>
              </DrawerHeader>
              <DrawerBody>
                <hr />
                <h1 className="text-xl font-bold text-center">
                  Account Information and Settings
                </h1>
                <div>
                  <h4 className="text-lg text-center font-bold">
                    Authorization
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <span className="font-bold">Account Owner:</span>{" "}
                      {userFullName}
                    </div>
                    <div>
                      <span className="font-bold">Associated User ID:</span>{" "}
                      {userId}
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="font-bold">Authority:</span>{" "}
                    <span className="px-4 py-1 bg-yellow-100 border border-yellow-500 text-yellow-600 rounded-full">
                      User
                    </span>{" "}
                    |{" "}
                    <span className="px-4 py-1 bg-green-100 border border-green-500 text-green-600 rounded-full">
                      Active
                    </span>
                  </div>
                </div>

                <hr />

                <h1 className="text-xl font-bold text-center">Accessibility</h1>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-bold">Mode: </div>
                    <div>
                      <Switch
                        defaultSelected
                        color="default"
                        endContent={<MoonIcon />}
                        size="md"
                        startContent={<SunIcon />}
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="font-bold">Language:</div>
                    <div className="flex gap-2 ml-auto">
                      {languages.map(({ label, flag }, idx) => (
                        <div key={idx}>
                          <div className="border border-gray-300 px-2 rounded-md cursor-pointer">
                            <span>{flag}</span>
                            <span>{label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <hr />

                <h1 className="text-xl font-bold text-center">Security</h1>
                <div className="flex flex-col gap-2">
                  <button className="text-yellow-500 underline">
                    Change Password
                  </button>
                  <button className="text-green-500 underline">
                    Two-Factor Authentication
                  </button>
                  <button className="text-red-500 underline">Logout</button>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Device Info
                  </h4>
                  <div className="text-sm text-gray-500">
                    Browser: {navigator.userAgent.split(")")[0]})
                  </div>
                  <div className="text-sm text-gray-500">
                    OS: {navigator.platform}
                  </div>
                  <div className="text-sm text-gray-500">
                    Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Account Options
                  </h4>
                  <button className="w-full text-left text-yellow-600 hover:underline text-sm mb-1">
                    Deactivate Account
                  </button>
                  <button className="w-full text-left text-red-600 hover:underline text-sm">
                    Delete Account Permanently
                  </button>
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

export default Profile;
