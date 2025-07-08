import React, { useState } from "react";
import Toast from "../ui/Toast";
import axios from "axios";
import { API_URL } from "../../constants/api";
import { Eye, EyeClosed, EyeOff } from "lucide-react";
import validatePassword from "../../lib/utils/passwordValidator";
import { useNavigate } from "react-router-dom";
import NavigationButtons from "../ui/NavigationButtons";

const PasswordChangeBody = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [isOldPasswordCorrect, setIsOldPasswordCorrect] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newPasswordForm, setNewPasswordForm] = useState(false);

  const email = JSON.parse(localStorage.getItem("user")).email;
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const payload = {
    email,
    password: oldPassword,
  };

  const newPasswordPayload = {
    email,
    password: newPassword,
  };

  const checkOldPassword = async (e) => {
    e.preventDefault();

    if (!oldPassword) {
      Toast({
        desciption: "Password is not provided",
        color: "danger",
      });
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/auth/password-check`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        Toast({
          desciption: response.data.message,
          color: "success",
        });
      }

      setIsOldPasswordCorrect(true);
    } catch (error) {
      if (error.response?.status === 400) {
        Toast({
          desciption: error.response.data.message,
          color: "danger",
        });
      } else {
        Toast({
          desciption: "Error checking password",
          color: "danger",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      Toast({
        desciption: "All fields are required",
        color: "danger",
      });
      return;
    }

    if (passwordErrors.length > 0) {
      Toast({
        desciption: "Password does not meet requirements",
        color: "danger",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      Toast({
        desciption: "Passwords do not match",
        color: "danger",
      });
      return;
    }

    if (oldPassword === newPassword) {
      Toast({
        desciption: "New password cannot be same as old password",
        color: "danger",
      });
      return;
    }

    try {
      const response = await axios.put(
        `${API_URL}/auth/password-update`,
        newPasswordPayload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        Toast({
          desciption: `Password updated successfully for

            User: ${response.data.user.firstName} ${response.data.user.lastName}
            Email: ${response.data.user.email}
            ID: ${response.data.user.id}
          `,
          color: "success",
        });
      }

      setIsOldPasswordCorrect(false);
      setOldPassword("");

      setTimeout(() => {
        Toast({
          desciption: "Redirecting to Dashboard in 3 seconds",
          color: "primary",
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      }, 3000);
    } catch (error) {
      if (error.response?.status === 400) {
        Toast({
          desciption: error.response.data.message,
          color: "danger",
        });
      } else {
        Toast({
          desciption: "Error updating password",
          color: "danger",
        });
      }
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <NavigationButtons />
      <form className="flex flex-col gap-4 mt-4">
        <h1 className="font-bold text-3xl text-center">Password Change</h1>
        <div className="flex flex-col gap-5">
          <div className="relative">
            <input
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter your old password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            {isPasswordVisible ? (
              <Eye
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-400 cursor-pointer"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            ) : (
              <EyeOff
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-400 cursor-pointer"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            )}
          </div>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            onClick={checkOldPassword}
          >
            {loading ? "Checking..." : "Check Password"}
          </button>
        </div>

        {isOldPasswordCorrect && (
          <div>
            <h1 className="font-bold text-3xl text-center mb-5">
              Enter your new password
            </h1>

            <div className="flex flex-col mb-5 gap-2">
              <label htmlFor="password">New Password</label>

              <div className="relative">
                <input
                  value={newPassword}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNewPassword(value);

                    const result = validatePassword(value);
                    setPasswordErrors(Array.isArray(result) ? result : []);
                  }}
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter your new password"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                {isPasswordVisible ? (
                  <Eye
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-400 cursor-pointer"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                ) : (
                  <EyeOff
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-400 cursor-pointer"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                )}
              </div>
            </div>

            <div>
              {passwordErrors.map((error, index) => (
                <p key={index} className="text-red-500 text-sm">
                  {error}
                </p>
              ))}
            </div>

            <div className="flex flex-col mb-5 gap-2">
              <label htmlFor="password">Confirm Password</label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm your new password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              {newPassword.length > 0 && newPassword !== confirmPassword && (
                <div className="text-red-500 text-sm font-semibold">
                  Passwords do not match
                </div>
              )}
            </div>

            <button
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              onClick={updatePassword}
            >
              Change Password
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default PasswordChangeBody;
