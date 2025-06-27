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
  });

  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-black">
      <div className="w-full md:w-[50%] h-full flex flex-col items-center justify-center py-10 px-6 rounded-lg shadow-lg border border-gray-200">
        <NavigationButtons />
        <div className="">
          <h1 className="text-4xl font-extrabold mb-10">Welcome Back!</h1>
        </div>
        <div className="flex flex-col w-full max-w-sm space-y-4">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg bg-blue-50 border-1 border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
          />
        </div>

        <div className="flex flex-col w-full max-w-sm space-y-4 mt-4">
          <label htmlFor="password" className="font-bold">
            Password
          </label>

          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="p-3 pr-10 rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300 w-full"
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

        <div className="flex flex-col w-full max-w-sm space-y-4 mt-4">
          <span className="text-sm underline cursor-pointer">
            Forgot your password?
          </span>
        </div>

        <div className="flex flex-col w-full max-w-sm space-y-4 mt-10">
          <button
            className={`p-3 w-full max-w-sm font-bold rounded-lg transition-all duration-300 border ${
              allFieldsFilled
                ? "bg-blue-100 border-blue-500 text-black hover:bg-blue-200 cursor-pointer"
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
    <div className="flex flex-col w-full max-w-sm space-y-4">
      <label htmlFor="email" className="font-bold">
        Email
      </label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        placeholder="Enter your email"
        className="p-3 rounded-lg bg-blue-50 border-1 border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
      />
    </div>
  );
};

export default Login;
