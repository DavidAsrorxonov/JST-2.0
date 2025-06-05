import React, { use, useEffect, useState } from "react";
import { useUser } from "../../context/userContext";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { useDisclosure } from "@heroui/react";
import { UserRound } from "lucide-react";

const Profile = () => {
  const [imageURL, setImageURL] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const user = JSON.parse(localStorage.getItem("user"));
  const userInitials = user.firstName[0] + user.lastName[0];
  const userFullName = `${user.firstName} ${user.lastName}`;
  const userEmail = user.email;

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
        size="lg"
        backdrop="opaque"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                <div className="w-full flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <UserRound className="" size={30} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold text-2xl">{userFullName}</div>
                    <div className="font-normal text-sm">{userEmail}</div>
                  </div>
                  <div className="px-4 py-1 bg-green-100 border border-green-500 text-green-600 rounded-full text-sm flex items-center justify-center ml-auto">
                    User
                  </div>
                </div>
              </DrawerHeader>
              <DrawerBody>
                <div className="flex items-center gap-2 mt-4">
                  <label
                    htmlFor="profile-upload"
                    className="cursor-pointer bg-blue-100 hover:bg-blue-200 border-blue-500 border text-blue-600 px-4 py-2 rounded-lg text-sm transition"
                  >
                    Upload Profile Picture
                  </label>
                  <input
                    id="profile-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
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
