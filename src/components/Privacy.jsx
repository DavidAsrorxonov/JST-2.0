import React, { useEffect, useState } from "react";
import { addToast } from "@heroui/toast";

const Privacy = () => {
  const [checked, setChecked] = useState(false);
  const [saveButtonVisible, setSaveButtonVisible] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!checked) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [checked]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="text-center text-sm text-gray-500 mb-8">
        Effective Date: May 24, 2025
      </p>

      <section className="mb-10">
        <p>
          At JobTrackr, your privacy is of utmost importance. This Privacy
          Policy explains how we collect, use, and protect your personal
          information when you use our website and services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            <strong>Account Information:</strong> Name, email address, and
            password when you create an account.
          </li>
          <li>
            <strong>Application Data:</strong> Job titles, companies, statuses,
            dates, and notes you manually input.
          </li>
          <li>
            <strong>Usage Data:</strong> Device type, IP address, browser type,
            and pages visited, collected via cookies and analytics tools.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>To provide, maintain, and improve our services</li>
          <li>To personalize your experience on our platform</li>
          <li>To analyze trends and track usage to improve functionality</li>
          <li>
            To communicate updates, promotions, and service-related information
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          3. Data Storage and Security
        </h2>
        <p>
          All user data is stored on secure servers with industry-standard
          encryption. We use administrative, technical, and physical safeguards
          to protect your information. However, no method of transmission over
          the internet is 100% secure, and we cannot guarantee absolute
          security.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          4. Sharing of Information
        </h2>
        <p>
          We do not sell, rent, or share your personal information with third
          parties except:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>To comply with legal obligations or law enforcement requests</li>
          <li>To prevent fraud, enforce policies, or protect our rights</li>
          <li>
            With trusted service providers who assist in hosting and maintenance
            (under confidentiality agreements)
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">5. Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to enhance user experience,
          remember preferences, and track usage analytics. You can disable
          cookies in your browser settings, but this may limit functionality.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">6. Third-Party Services</h2>
        <p>
          Our platform may contain links to third-party sites or integrations
          (e.g., login, analytics). We are not responsible for the privacy
          practices of third parties. Please review their policies separately.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          7. Your Rights and Choices
        </h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Request access to or deletion of your personal data</li>
          <li>Update your account information anytime via your profile</li>
          <li>Opt out of non-essential email communications</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
        <p>
          JobTrackr is not intended for use by children under 13. We do not
          knowingly collect personal information from minors. If we learn we
          have collected such data, it will be deleted promptly.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          9. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically. We’ll notify users of
          material changes by updating the date and optionally via email or a
          notice on our platform. Continued use of the service constitutes
          acceptance of any changes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">10. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:support@jobtrackr.com"
            className="text-blue-600 underline"
          >
            support@jst.com
          </a>
          .
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
            onChange={(e) => {
              setChecked(e.target.checked);
              setSaveButtonVisible(e.target.checked);
            }}
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            After carefully reviewing the Privacy Policy, I acknowledge that I
            have read, understood, and consent to the collection, use, and
            storage of my information as outlined in this policy.
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
    </div>
  );
};

export default Privacy;
