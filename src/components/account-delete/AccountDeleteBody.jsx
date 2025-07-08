import React, { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";

const AccountDeleteBody = () => {
  const [showDeletingWarning, setShowDeletingWarning] = useState(true);

  const defaultContent =
    "Once you proceed, all of your data, including your personal information, saved settings preferences, job history, events, todos and notes will be permanently removed from our servers. This action cannot be undone, and we will not be able to help you recover any part of your account once it's deleted. Please make sure to save any important information before proceeding. If you're sure about your decision, confirm your password and proceed with the deletion. Otherwise, we recommend going back to your dashboard or contacting support if you need help.";

  return (
    <div>
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
                    className="px-4 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition"
                    onClick={() => setShowDeletingWarning(false)}
                  >
                    I have read the terms and I want to delete my account
                  </button>
                </div>
              </AccordionItem>
            </Accordion>
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
