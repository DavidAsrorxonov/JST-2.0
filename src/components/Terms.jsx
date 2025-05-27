import React, { useEffect, useState } from "react";
import { addToast } from "@heroui/toast";
import ExitConfirmation from "./ExitConfirmation";

const Terms = () => {
  const [checked, setChecked] = useState(false);
  const [saveButtonVisible, setSaveButtonVisible] = useState(false);
  const [showExitModal, setIsShowExitModal] = useState(false);

  const handleCheckboxChange = (e) => {
    const isTryingToUncheck = !e.target.checked;
    if (isTryingToUncheck) {
      setIsShowExitModal(true);
    } else {
      setChecked(e.target.checked);
      setSaveButtonVisible(e.target.checked);
    }
  };

  const handleModalCancel = () => {
    setIsShowExitModal(false);
  };
  const handleModalConfirm = () => {
    setChecked(false);
    setSaveButtonVisible(false);
    setIsShowExitModal(false);
  };
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
      <p className="mb-8 text-sm text-center text-gray-500">
        Effective Date: May 24, 2025
      </p>

      <section className="mb-10">
        <p>
          Welcome to JST ("we", "our", or "us"). These Terms of Service
          ("Terms") govern your access to and use of our website and services
          (collectively, the "Service"). By using the Service, you agree to be
          bound by these Terms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">1. Use of the Service</h2>
        <p>
          You may use the Service only in accordance with these Terms and all
          applicable laws. You must be at least 13 years old to use the Service.
        </p>
        <p className="mt-2">
          You are solely responsible for maintaining the confidentiality of your
          account credentials and for all activity that occurs under your
          account.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          2. User Data and Application Tracking
        </h2>
        <p>
          JobTrackr allows you to log and track job applications. You may submit
          information such as:
        </p>
        <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
          <li>Company names</li>
          <li>Job titles</li>
          <li>Statuses (e.g., applied, interviewed, rejected)</li>
          <li>Notes or personal observations</li>
        </ul>
        <p className="mt-2">
          You retain all rights to your submitted content. We do not claim
          ownership over your data. However, by using our Service, you grant us
          a non-exclusive license to use this data solely for the purpose of
          operating and improving our platform.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">3. Privacy</h2>
        <p>
          Your privacy is important to us. Please review our{" "}
          <a href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </a>{" "}
          for details on how we collect, store, and use your personal
          information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
          <li>Use the Service for any illegal or unauthorized purpose</li>
          <li>
            Reverse engineer, decompile, or tamper with any part of the platform
          </li>
          <li>Upload or transmit malicious code or software</li>
          <li>Attempt to gain unauthorized access to other users' data</li>
        </ul>
        <p className="mt-2">
          Violation of these terms may result in the suspension or termination
          of your account.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          5. Availability and Updates
        </h2>
        <p>
          We strive to maintain continuous service but do not guarantee that the
          Service will always be available, secure, or error-free. We may modify
          or discontinue features at any time without notice.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">6. Third-Party Services</h2>
        <p>
          The Service may include links to third-party sites or integrations. We
          are not responsible for the content or functionality of third-party
          services and your use of them is at your own risk.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          7. Limitation of Liability
        </h2>
        <p>
          JobTrackr shall not be liable for any indirect, incidental, special,
          or consequential damages, or loss of data or profits, arising from
          your use of the Service.
        </p>
        <p className="mt-2">
          Our total liability to you for any claim arising out of or relating to
          the Service is limited to the amount paid by you (if any) in the
          twelve months preceding the claim.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">8. Termination</h2>
        <p>
          You may stop using the Service at any time. We reserve the right to
          suspend or terminate your access if you violate these Terms or engage
          in harmful behavior.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">9. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. If we make material
          changes, we will provide notice by updating the date at the top and/or
          through the Service. Continued use after changes constitutes
          acceptance.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          If you have any questions or concerns, please contact us at:{" "}
          <a
            href="mailto:support@jobtrackr.com"
            className="text-blue-600 underline"
          >
            support@jst.com
          </a>
        </p>
      </section>

      <p className="text-center text-sm text-gray-500 mt-8">
        Last updated: May 24, 2025
      </p>
      <div className="w-full flex items-start justify-center mt-6 px-4">
        <label className="flex items-start gap-3 max-w-2xl">
          <input
            type="checkbox"
            className="mt-1 accent-blue-600 w-5 h-5 cursor-pointer"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            After carefully reading the Terms, I acknowledge that I have read,
            understood, and agree to be bound by these Terms of Service.
          </p>
        </label>
      </div>
      {saveButtonVisible && (
        <div
          className="w-full flex items-center justify-center mt-6 px-4"
          onClick={() =>
            addToast({
              title: "Terms Accepted",
              description: "Thank you for accepting the terms of service.",
              color: "success",
            })
          }
        >
          <button className="w-fit px-4 py-2 bg-blue-100 text-blue-500 border border-blue-300 rounded-lg hover:bg-blue-200 transition-colors">
            Save the changes
          </button>
        </div>
      )}

      {showExitModal && (
        <ExitConfirmation
          onCancel={handleModalCancel}
          onConfirm={handleModalConfirm}
        />
      )}
    </div>
  );
};

export default Terms;
