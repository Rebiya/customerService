import axios from "axios";

const loginService = {
  logIn: async (email: string, password: string) => {
    const api_url = import.meta.env.VITE_API_URL.replace(/\/$/, "");

    try {
      const response = await axios.post(
        `${api_url}/auth/login`,
        { user_email: email.trim(), user_pass: password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;
      // console.log("API Login Response:", data);

      if (data.status === "success" && data.accessToken) {
        return data;
      } else {
        throw new Error(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      // console.error("Login error:", error);
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(`Login failed with status: ${error.response.status}`);
      }
      throw error;
    }
  },
};

export default loginService;
