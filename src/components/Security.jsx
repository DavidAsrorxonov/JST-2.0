import { Lock, ShieldCheck } from "lucide-react";
import React from "react";

const Security = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center py-20 px-6 text-black">
      <div className="w-full py-24 px-6 bg-[#f8f9fa] text-gray-800 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-12">
          Your Data is Safe With Us
        </h2>
        <div className="max-w-5xl grid md:grid-cols-2 gap-12">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 text-green-600 p-3 rounded-full">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                End-to-End Protection
              </h3>
              <p className="text-gray-600">
                All your job application data is encrypted in transit and
                securely stored. We follow modern best practices to keep your
                information protected.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <Lock size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p className="text-gray-600">
                We never sell your data or share it with third parties. What you
                store is yours, and yours only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
