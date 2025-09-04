import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import NavigationButtons from "../components/ui/NavigationButtons";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Toast from "./ui/Toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remembersPassword, setRemembersPassword] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password) {
      Toast({
        desciption: "All fields are required",
        color: "danger",
      });
      return;
    }

    const response = await login(email, password);

    if (response.success) {
      Toast({
        desciption: "Login successful",
        color: "success",
      });

      navigate("/dashboard");
    } else {
      if (response.status === 401) {
        Toast({
          desciption: "Invalid credentials",
          color: "danger",
        });
      } else if (response.status === 429) {
        Toast({
          desciption: "Too many wrong attempts! Please try again later",
          color: "danger",
        });
      } else {
        Toast({
          desciption: "Something went wrong" || response.message,
          color: "danger",
        });
      }
    }
  };

  useEffect(() => {
    if (email && password) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  }, [email, password]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10">
      <div className="w-full max-w-md bg-[#171717] flex flex-col items-center py-10 px-8 rounded-lg shadow-lg border border-white/30 space-y-8">
        {/* Navigation */}
        <div className="w-full flex justify-start">
          <NavigationButtons />
        </div>

        {/* Header */}
        <h1 className="text-4xl font-extrabold text-[#e5e5e5] text-center">
          Welcome Back!
        </h1>

        {/* Email */}
        <div className="flex flex-col w-full space-y-2">
          <label htmlFor="email" className="font-bold text-[#e5e5e5]">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="bg-[#212121] text-[#e5e5e5] p-2 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder:text-white/50"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col w-full space-y-2">
          <label htmlFor="password" className="font-bold text-[#e5e5e5]">
            Password
          </label>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full bg-[#212121] text-[#e5e5e5] p-2 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition placeholder:text-white/50"
            />
            {isPasswordVisible ? (
              <Eye
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#e5e5e5] cursor-pointer"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            ) : (
              <EyeOff
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#e5e5e5] cursor-pointer"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            )}
          </div>
          <span className="text-sm underline cursor-pointer text-[#e5e5e5] self-end">
            Forgot your password?
          </span>
        </div>

        {/* Button */}
        <div className="w-full">
          <button
            className={`p-2 w-full font-bold rounded-lg transition-all duration-300 border ${
              allFieldsFilled
                ? "bg-[#e5e5e5] text-[#171717] cursor-pointer"
                : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed hover:bg-gray-100"
            }`}
            onClick={handleSubmit}
            disabled={!allFieldsFilled}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export const PasswordForgotEmailInput = () => {
  return (
    <div className="flex flex-col w-full max-w-sm space-y-2">
      <label htmlFor="email" className="font-bold">
        Email
      </label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="p-2 rounded-lg bg-blue-50 border-1 border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
      />
    </div>
  );
};

export default Login;
