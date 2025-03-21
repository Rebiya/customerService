import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const signupService = {
  signUp: async (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone_number: string
  ) => {
    const api_url = import.meta.env.VITE_API_URL.replace(/\/$/, "");

    try {
      const response = await axios.post(
        `${api_url}/auth/register`,
        {
          user_first_name: first_name.trim(),
          user_last_name: last_name.trim(),
          user_email: email.trim(),
          user_pass: password,
          user_phone_number: phone_number,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;
      // console.log("API Signup Response:", data);

      if (data.status === "success" && data.accessToken) {
        toast.success(data.message || "Signup successful!");
        return data; // Return response data for further use
      } else {
        toast.error(data.message || "Signup failed. Please try again.");
        return null;
      }
    } catch (error: any) {
      // console.error("Signup error:", error.response?.data || error.message);

      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";

      // Handle different HTTP error codes
      if (error.response?.status === 400) {
        toast.error(errorMessage);
      } else if (error.response?.status === 500) {
        toast.error("Internal server error. Please try again later.");
      } else {
        toast.error(errorMessage);
      }

      return null;
    }
  },
};

export default signupService;
