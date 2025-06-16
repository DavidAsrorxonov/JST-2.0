import { Lock, ShieldCheck, KeyRound, EyeOff } from "lucide-react";
import React from "react";

const Security = () => {
  const cardsInfo = [
    {
      icon: <ShieldCheck size={28} />,
      title: "End-to-End Protection",
      content:
        "All your job application data is encrypted in transit and securely stored. We follow modern best practices to keep your information protected.",
      bg: "bg-green-100",
      color: "text-green-500",
      border: "border-green-400",
    },
    {
      icon: <Lock size={28} />,
      title: "Privacy First",
      content:
        "We never sell your data or share it with third parties. What you store is yours, and yours only.",
      bg: "bg-blue-100",
      color: "text-blue-500",
      border: "border-blue-400",
    },
    {
      icon: <KeyRound size={28} />,
      title: "You Control Access",
      content:
        "Only you can access your account. Our systems ensure no one else can read or modify your job history.",
      bg: "bg-yellow-100",
      color: "text-yellow-500",
      border: "border-yellow-400",
    },
    {
      icon: <EyeOff size={28} />,
      title: "Minimal Data Visibility",
      content:
        "We design our platform with minimal data access in mind—even our team cannot see your content without permission.",
      bg: "bg-red-100",
      color: "text-red-500",
      border: "border-red-400",
    },
  ];

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 text-black"
      id="security"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">
        Security & Privacy
      </h1>
      <p className="text-center max-w-2xl mb-16 text-gray-600 text-lg">
        Your trust is our top priority. We've built JST with security and data
        protection at its core to give you complete peace of mind.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {cardsInfo.map((card, idx) => (
          <div
            key={idx}
            className={`backdrop-blur-md bg-white/60 border ${card.border} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300`}
          >
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-full ${card.bg} ${card.color} border ${card.border} mb-6 mx-auto`}
            >
              {card.icon}
            </div>
            <h2 className="text-2xl font-bold text-center mb-3">
              {card.title}
            </h2>
            <p className="text-center text-gray-700 leading-relaxed">
              {card.content}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-16 max-w-lg">
        Have more questions? Reach out to our team at{" "}
        <a
          href="mailto:dovudxon.asrorxonov@icloud.com"
          className="text-blue-500 underline"
        >
          privacy@jst.com
        </a>{" "}
        — we're here to help.
      </p>
    </div>
  );
};

export default Security;
