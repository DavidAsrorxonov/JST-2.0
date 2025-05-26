import { Lock, ShieldCheck } from "lucide-react";
import React from "react";

const Security = () => {
  const cardsInfo = [
    {
      icon: <ShieldCheck size={28} />,
      title: "End-to-End Protection",
      content:
        "All your job application data is encrypted in transit and securely stored. We follow modern best practices to keep your information protected.",
    },
    {
      icon: <Lock size={28} />,
      title: "Data Privacy",
      content:
        "Your privacy is our top priority. We don't share your data with third parties. Your information is kept secure and only accessible to authorized personnel.",
    },
  ];

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center py-20 px-6 text-black"
      id="security"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
        Security & Privacy
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 border border-green-400 mb-6 mx-auto">
            <ShieldCheck size={28} />
          </div>
          <h2 className="text-2xl font-bold text-center mb-3">
            End-to-End Protection
          </h2>
          <p className="text-center text-gray-700 leading-relaxed">
            All your job application data is encrypted in transit and securely
            stored. We follow modern best practices to keep your information
            protected.
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-500 border border-blue-400 mb-6 mx-auto">
            <Lock size={28} />
          </div>
          <h2 className="text-2xl font-bold text-center mb-3">Privacy First</h2>
          <p className="text-center text-gray-700 leading-relaxed">
            We never sell your data or share it with third parties. What you
            store is yours, and yours only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;
