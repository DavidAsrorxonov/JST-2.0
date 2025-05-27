import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavigationButtons from "../components/NavigationButtons";

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white flex items-center justify-center px-4">
      <NavigationButtons />
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center space-y-8">
        <h1 className="text-4xl font-bold text-blue-600">Welcome!</h1>
        <p className="text-gray-500 text-lg">
          Choose how you'd like to continue
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/auth/register")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
          >
            I'm new here
          </button>
          <button
            onClick={() => navigate("/auth/login")}
            className="border border-blue-500 hover:bg-blue-100 text-blue-600 font-semibold py-3 px-6 rounded-full transition duration-300 shadow-sm hover:shadow-md"
          >
            I already have an account
          </button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
