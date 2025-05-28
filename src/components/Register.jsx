import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { addToast } from "@heroui/toast";
import NavigationButtons from "./NavigationButtons";

const getPasswordStrength = (password) => {
  if (password.length < 6) return { label: "Weak", color: "text-red-500" };
  if (
    password.match(/[A-Z]/) &&
    password.match(/[0-9]/) &&
    password.length >= 8
  ) {
    return { label: "Strong", color: "text-green-500" };
  }
  return { label: "Medium", color: "text-yellow-500" };
};

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const strength = getPasswordStrength(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      addToast({
        title: "Error",
        description: "Please fill in all fields.",
        color: "danger",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
      return;
    }

    if (password !== confirmPassword) {
      addToast({
        title: "Error",
        description: "Passwords do not match.",
        color: "danger",
        timeout: 2000,
        shouldShowTimeoutProgress: true,
      });
      return;
    }

    console.log("Registering:", { firstName, lastName, email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-black">
      <div className="w-full md:w-[50%] h-full flex flex-col items-center justify-center py-10 px-6 rounded-lg shadow-lg border border-gray-200">
        <NavigationButtons />
        <h1 className="text-4xl font-extrabold mb-10">Create Account</h1>
        <div className="flex gap-4 w-full max-w-sm mb-4">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First Name"
            className="p-3 w-1/2 rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last Name"
            className="p-3 w-1/2 rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
          />
        </div>
        <div className="flex flex-col w-full max-w-sm space-y-4 mb-4">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
          />
        </div>
        <div className="flex flex-col w-full max-w-sm space-y-2 mb-4">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              className="p-3 pr-10 w-full rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
            />
            {isPasswordVisible ? (
              <Eye
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-400 cursor-pointer"
                onClick={() => setIsPasswordVisible(false)}
              />
            ) : (
              <EyeOff
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-400 cursor-pointer"
                onClick={() => setIsPasswordVisible(true)}
              />
            )}
          </div>
          <p className={`text-sm font-semibold ${strength.color}`}>
            {password !== "" && <p>Strength: {strength.label}</p>}
          </p>
        </div>
        <div className="flex flex-col w-full max-w-sm space-y-4 mb-8">
          <label htmlFor="confirmPassword" className="font-bold">
            Confirm Password
          </label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your password"
            className="p-3 rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
          />
        </div>
        <button
          className="p-3 w-full max-w-sm bg-blue-100 border border-blue-500 text-black rounded-lg font-bold hover:bg-blue-200 transition-all duration-300"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
