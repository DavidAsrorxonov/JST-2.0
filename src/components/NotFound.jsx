import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-10 max-w-xl w-full text-center animate-fade-in-smooth">
        <div className="text-red-500 text-7xl font-black tracking-wide mb-4">
          404
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Rejection Notice
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the application (page) you’re looking for isn’t available.
        </p>

        <div className="text-left text-sm bg-gray-50 border border-gray-200 rounded-md px-5 py-4 font-mono text-gray-700 leading-relaxed shadow-inner mb-6">
          <p>
            <strong>Status:</strong> Application Not Found
          </p>
          <p>
            <strong>Error Code:</strong> JST-404
          </p>
          <p>
            <strong>Tip:</strong> Check the link or return to safety.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-5 py-2 rounded-lg transition"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition shadow"
          >
            Go to Home
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-smooth {
          animation: fadeInSmooth 0.9s ease-in-out both;
        }

        @keyframes fadeInSmooth {
          0% {
            opacity: 0;
            transform: scale(0.97) translateY(15px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
