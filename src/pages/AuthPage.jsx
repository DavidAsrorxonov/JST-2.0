import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white flex items-center justify-center px-4">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center px-4 py-2 bg-blue-200 hover:bg-blue-300 transition rounded-full border border-blue-500 gap-2 text-blue-600 hover:text-blue-700 font-semibold"
      >
        <ArrowLeft size={20} />
        Back
      </button>
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
