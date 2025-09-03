import { useNavigate } from "react-router-dom";
import NavigationButtons from "../components/ui/NavigationButtons";
import PageWrapper from "../transition/PageWrapper";

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <NavigationButtons />
        <div className="bg-[#171717] border border-white/30 shadow-2xl rounded-lg p-10 w-full max-w-md text-center space-y-8">
          <h1 className="text-4xl font-bold text-[#e5e5e5]">Welcome!</h1>
          <p className="text-[#e5e5e5] text-lg">
            Choose how you'd like to continue
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate("/auth/register")}
              className="bg-[#e5e5e5] text-[#171717] font-medium py-2 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              I'm new here
            </button>
            <button
              onClick={() => navigate("/auth/login")}
              className="bg-[#0a0a0a] border border-white/30 text-[#e5e5e5] font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-sm hover:shadow-md"
            >
              I already have an account
            </button>
            <button></button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AuthPage;
