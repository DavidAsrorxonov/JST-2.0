import React, { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import NavigationButtons from "../ui/NavigationButtons";
import { authChecker } from "../../lib/utils/authChecker";
import { useUser } from "../../context/userContext";
import Toast from "../ui/Toast";
import capi from "../../lib/CAPII";
import axios from "axios";
import { API_URL } from "../../constants/api";

const AccountDeleteBody = () => {
  const [showDeletingWarning, setShowDeletingWarning] = useState(true);
  const [showDeletingForm, setShowDeletingForm] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logout } = useUser();

  const defaultContent =
    "Once you proceed, all of your data, including your personal information, saved settings preferences, job history, events, todos and notes will be permanently removed from our servers. This action cannot be undone, and we will not be able to help you recover any part of your account once it's deleted. Please make sure to save any important information before proceeding. If you're sure about your decision, confirm your password and proceed with the deletion. Otherwise, we recommend going back to your dashboard or contacting support if you need help.";

  const payload = {
    email: email,
    password: password,
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();

    console.log(payload);

    if (!authChecker(logout)) {
      return;
    }

    if (!email || !password) {
      Toast({
        desciption: "All fields are required",
        color: "danger",
      });
    }

    try {
      const response = await capi.delete("/api/users/users", {
        data: payload,
      });

      if (response.status === 200) {
        Toast({
          desciption: "Account deleted successfully",
          color: "success",
        });

        setShowDeletingForm(false);
        logout();
      }
    } catch (error) {
      if (error.response?.status === 404) {
        Toast({
          desciption: "Account not found",
          color: "danger",
        });
      } else if (error.response?.status === 401) {
        Toast({
          desciption: "Password does not match",
          color: "danger",
        });
      } else if (error.response?.status === 400) {
        Toast({
          desciption: "Email does not match",
          color: "danger",
        });
      } else if (error.response?.status === 440) {
        Toast({
          desciption:
            "Too many wrong attempts! Logging you out for security reasons",
          color: "danger",
          duration: 5000,
        });

        // Show second toast after 3 seconds
        setTimeout(() => {
          Toast({
            desciption:
              "You will be logged out in 2 seconds. Please log in again to continue",
            color: "primary",
          });
        }, 3000);

        // Logout after 5 seconds total
        setTimeout(() => {
          logout();
        }, 5000);
      } else {
        Toast({
          desciption: "Error deleting account",
          color: "danger",
        });
      }
    }
  };

  return (
    <div>
      <NavigationButtons />
      {showDeletingWarning && (
        <div className="flex items-center justify-center mt-10">
          <div className="w-[100%] md:w-[50%]">
            <Accordion variant="splitted">
              <AccordionItem
                startContent={<InfoIcon />}
                key={1}
                aria-label="Delete Account Permanently"
                subtitle="Press to see more"
                title="Delete Account"
              >
                {defaultContent}

                <div className="flex justify-center mt-4">
                  <button
                    className="px-4 py-1 border border-gray-400 rounded-full"
                    onClick={() => {
                      setShowDeletingWarning(false);
                      setShowDeletingForm(true);
                    }}
                  >
                    I have read the terms and I want to delete my account
                  </button>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      )}

      {showDeletingForm && (
        <div className="flex items-center justify-center mt-10">
          <div className="w-[100%] md:w-[50%] flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Account Deleting</h1>

            <div className="w-[70%]">
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
              </div>

              <button
                className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                onClick={handleDeleteAccount}
              >
                Delete Account Permanently
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const InfoIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="24"
      role="presentation"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12 8V13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M11.9945 16H12.0035"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default AccountDeleteBody;
