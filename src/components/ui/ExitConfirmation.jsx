// components/ExitConfirmation.js
import { useState } from "react";

const ExitConfirmation = ({ onCancel, onConfirm }) => {
  const [name, setName] = useState("");
  const [consent, setConsent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (consent !== "I consent") {
      setError("You must type 'I consent' exactly.");
      return;
    }
    setError("");
    onConfirm(name);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          We have detected that you are trying to move out without giving your
          consent and we want to confirm it.
        </h2>
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">
            I hereby confirm that I have read the Terms and acknowledge it
          </label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-600">
            Please write <strong>"I consent"</strong> in the field below:
          </label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={consent}
            onChange={(e) => setConsent(e.target.value)}
            placeholder='Type "I consent"'
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="flex justify-end gap-3 mt-4">
          <button onClick={onCancel} className="text-gray-500">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitConfirmation;
