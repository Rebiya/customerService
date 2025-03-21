import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPasswordService = {
  forgotPassword: async (user_email: string, new_password: string) => {
    const api_url = import.meta.env.VITE_API_URL.replace(/\/$/, "");

    try {
      const response = await axios.put(
        `${api_url}/auth/ForgotPass`,
        {
          user_email: user_email.trim().toLowerCase(), // Ensure uniform formatting
          new_password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // console.log("API Forgot Password Response:", response.data);

      if (
        response.data?.status === "success" ||
        response.data?.message?.toLowerCase().includes("updated")
      ) {
        toast.success(response.data.message);
        return true;
      } else {
        toast.error(response.data.message);
        return false;
      }
    } catch (error: any) {
      // console.error(
      //   "Forgot password error:",
      //   error.response?.data || error.message
      // );

      if (error.response) {
        const status = error.response.status;
        const message = error.response.data.message;
        if (status === 400) {
          toast.error(message);
        } else if (status === 404) {
          toast.error("Email not found ");
        } else if (status === 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error("An unexpected error occurred.");
        }
      } else {
        toast.error("Network error. Please check your connection.");
      }

      return false;
    }
  },
};

export default ResetPasswordService;
