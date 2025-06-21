import { useNavigate } from "react-router-dom";

const GetStartedButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center px-4 py-2 bg-[#0A80EE] rounded-full text-white font-bold cursor-pointer hover:scale-95 transition-all duration-300"
      onClick={() => navigate("/auth")}
    >
      <button>Get Started</button>
    </div>
  );
};

export default GetStartedButton;
