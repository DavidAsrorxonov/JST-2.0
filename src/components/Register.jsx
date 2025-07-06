import { useEffect, useState } from "react";
import { CircleHelp, Eye, EyeOff, MoveLeft, TriangleAlert } from "lucide-react";
import NavigationButtons from "../components/ui/NavigationButtons";
import axios from "axios";
import getPasswordStrength from "../lib/utils/passwordStrength";
import PasswordDetails from "../lib/utils/PasswordDetails";
import validatePassword from "../lib/utils/passwordValidator";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constants/api";
import Toast from "./ui/Toast";
import { InputOtp } from "@heroui/react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailVerificationStage, setEmailVerificationStage] = useState(true);
  const [otpVerificationStage, setOtpVerificationStage] = useState(false);
  const [otp, setOtp] = useState(123456);
  const [otpValue, setOtpValue] = useState("");

  const [formFillingStage, setFormFillingStage] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordDetails, setPasswordDetails] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState([]);

  const [loading, setLoading] = useState(false);

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const strength = getPasswordStrength(password);

  const navigate = useNavigate();

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  useEffect(() => {
    const fieldsFilled =
      firstName.trim() &&
      lastName.trim() &&
      email.trim() &&
      password &&
      confirmPassword &&
      password === confirmPassword &&
      passwordErrors.length === 0;

    setAllFieldsFilled(fieldsFilled);
  }, [firstName, lastName, email, password, confirmPassword, passwordErrors]);

  const payload = {
    firstName,
    lastName,
    email,
    password,
  };

  const handleSubmit = async () => {
    try {
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        Toast({
          desciption: "All fields are required",
          color: "danger",
        });
        return;
      }

      if (password !== confirmPassword) {
        Toast({
          desciption: "Passwords do not match",
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

      const response = await axios.post(`${API_URL}/auth/register`, payload);

      if (response.status === 201) {
        Toast({
          desciption: "Registration successful",
          color: "success",
        });

        setTimeout(() => {
          Toast({
            desciption: "You will be redirected to login page in 3 seconds",
            color: "primary",
            duration: 3000,
          });

          setTimeout(() => {
            navigate("/auth/login");
          }, 3000);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }

    console.log("Payload", payload);
  };

  const sendOTP = async () => {
    if (!email) {
      Toast({
        desciption: "Email is not provided",
        color: "danger",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/auth/register-send-otp`, {
        email,
      });

      if (response.status === 200) {
        Toast({
          desciption: "OTP sent successfully",
          color: "success",
        });

        setEmailVerificationStage(false);
        setOtpVerificationStage(true);
      }
    } catch (error) {
      if (error.response?.status === 400) {
        Toast({
          desciption: "Email already exists",
          color: "danger",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axios.post(`${API_URL}/auth/verify-otp`, {
        email,
        otpValue,
      });
      if (response.status === 200) {
        Toast({
          desciption: "OTP verified successfully",
          color: "success",
        });

        setOtpVerificationStage(false);
        setFormFillingStage(true);
      }

      if (response.status === 400) {
        Toast({
          desciption: "Invalid OTP",
          color: "danger",
        });
      }
    } catch (error) {
      Toast({
        desciption: error.response?.data?.message || "Error verifying OTP",
        color: "danger",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-black">
      <div className="w-full md:w-[50%] h-full flex flex-col items-center justify-center py-10 px-6 rounded-lg shadow-lg border border-gray-200">
        <NavigationButtons />

        <h1 className="text-4xl font-extrabold mb-10">Register</h1>

        {emailVerificationStage && (
          <>
            <div className="flex flex-col w-full max-w-sm space-y-4 mb-4">
              <div>
                <label className="font-bold">Email</label>
              </div>
              <div>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    localStorage.setItem("email", e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your email"
                  className="p-3 w-full rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
                />
              </div>

              <button
                className="p-3 bg-blue-100 rounded-lg border border-blue-500"
                onClick={() => {
                  sendOTP();
                  console.log(email);
                }}
              >
                {loading ? "Sending..." : "Send Verification Code"}
              </button>
            </div>
          </>
        )}

        {otpVerificationStage && (
          <>
            <div className="flex flex-col items-center justify-center w-full max-w-sm space-y-4 mb-4">
              <InputOtp
                length={6}
                value={otpValue}
                onValueChange={setOtpValue}
                color="primary"
                size="lg"
                variant="bordered"
              />
              <div>OTP Value: {otpValue}</div>

              <button
                className="p-3 bg-blue-100 rounded-lg border border-blue-500 w-full"
                onClick={verifyOTP}
              >
                Verify
              </button>
            </div>
            <div className="text-sm text-red-500 font-bold">
              Do not refresh the page!
            </div>
          </>
        )}

        {formFillingStage && (
          <>
            <div className="w-full flex flex-col items-center">
              <div className="flex flex-col w-full max-w-sm space-y-4">
                <label>First Name</label>
              </div>
              <div className="flex gap-4 w-full flex-col max-w-sm mb-4">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="Enter your first name"
                  className="p-3 w-full rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
                />
              </div>

              <div className="flex flex-col w-full max-w-sm space-y-4">
                <label>Last Name</label>
              </div>
              <div className="flex gap-4 w-full flex-col max-w-sm mb-4">
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Enter your last name"
                  className="p-3 w-full rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
                />
              </div>

              <div className="flex flex-col w-full max-w-sm space-y-4">
                <label>Email</label>
              </div>
              <div className="flex gap-4 w-full flex-col max-w-sm mb-4">
                <input
                  defaultValue={localStorage.getItem("email")}
                  type="email"
                  disabled
                  placeholder="Enter your email"
                  className="p-3 w-full rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
                />
              </div>

              <div className="flex flex-col w-full max-w-sm space-y-4">
                <label>Password</label>
              </div>
              <div className="flex gap-4 w-full flex-col max-w-sm mb-4">
                <div className="relative">
                  <input
                    value={password}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPassword(value);

                      const result = validatePassword(value);
                      setPasswordErrors(Array.isArray(result) ? result : []);
                    }}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    className="p-3 w-full rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
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
                <div className={`text-sm font-semibold ${strength.color}`}>
                  {password !== "" && <div>Strength: {strength.label}</div>}
                  {passwordErrors.length > 0 && (
                    <ul className="text-sm text-red-500 font-medium space-y-1 mt-1">
                      {passwordErrors.map((err, idx) => (
                        <li key={idx}>• {err}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex flex-col w-full max-w-sm space-y-4">
                <label>Confirm Password</label>
              </div>
              <div className="flex gap-4 w-full flex-col max-w-sm mb-4">
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Re-enter your password"
                  className="p-3 w-full rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
                />
                {password.length > 0 && password !== confirmPassword && (
                  <div className="text-red-500 text-sm font-semibold">
                    Passwords do not match
                  </div>
                )}
                <button
                  className="p-3 bg-blue-100 rounded-lg border border-blue-500 w-full"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="text-sm text-red-500 font-bold">
              Do not refresh the page!
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
