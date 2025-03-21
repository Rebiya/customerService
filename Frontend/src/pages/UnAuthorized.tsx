import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router
import { HomeIcon } from "@heroicons/react/24/solid"; // Icon for the home button

const Unauthorized: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6">
      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-2xl p-8 sm:p-12 text-center max-w-md w-full border-2 border-gray-200">
        {/* Icon */}
        <div className="mx-auto h-16 w-16 bg-red-100 rounded-full flex items-center justify-center">
          <svg
            className="h-10 w-10 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
          Unauthorized Access
        </h1>

        {/* Message */}
        <p className="mt-4 text-sm sm:text-base text-gray-600">
          You don’t have permission to view this page. Please contact the
          administrator if you believe this is an error.
        </p>

        {/* Home Button */}
        <button
          onClick={handleGoHome}
          className="mt-8 w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <HomeIcon className="h-5 w-5 mr-2" />
          Go Back Home
        </button>
      </div>

      {/* Footer */}
      <p className="mt-8 text-sm text-gray-400">
        Need help? Contact support at{" "}
        <a
          href="mailto:support@example.com"
          className="text-blue-500 hover:underline"
        >
      rebum.19@gmail.com 
        </a>
      </p>
    </div>
  );
};

export default Unauthorized;
