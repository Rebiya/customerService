import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const logoutService = {
  logout: async () => {
    const api_url = import.meta.env.VITE_API_URL.replace(/\/$/, "");

    try {
      const response = await axios.post(
        `${api_url}/auth/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Send token if needed
          },
        }
      );

      const data = response.data;
      // console.log("API Logout Response:", data);

      if (data.status === "success" || data.message === "Logout successful") {
        // Show success toast
        toast.success(data.message || "Logged out successfully!");

        // Clear local storage
        localStorage.removeItem("token");
        localStorage.removeItem("userId");

        return true; // Indicate successful logout
      } else {
        toast.error(data.message || "Logout failed. Please try again.");
        throw new Error(data.message || "Logout failed. Please try again.");
      }
    } catch (error) {
      // console.error("Logout error:", error);

      if (axios.isAxiosError(error) && error.response) {
        toast.error(
          `Logout failed: ${
            error.response.data.message || error.response.status
          }`
        );
        throw new Error(`Logout failed with status: ${error.response.status}`);
      }

      toast.error("An unexpected error occurred.");
      throw error;
    }
  },
};

export default logoutService;
