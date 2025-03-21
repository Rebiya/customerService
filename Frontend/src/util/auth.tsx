import { jwtDecode } from "jwt-decode";

interface User {
  token: string;
  user_id?: number;
  user_first_name?: string;
  user_last_name?: string;
  user_email?: string;
  user_phone_number?: string;
  role_id?: number;
  user_img?: string;
  active_user_status?: number;
}

interface DecodedToken {
  role_id: number;
  user_id: number;
  user_first_name: string;
  user_last_name: string;
  user_email: string;
  user_phone_number: string;
  active_user_status: number;
  user_img: string;
  exp: number;
}

const getAuth = (): User | null => {
  try {
    // Retrieve the token directly from local storage
    const token = localStorage.getItem("token");
    if (!token) return null;

    // Decode the token to extract user information
    const decodedToken = jwtDecode<DecodedToken>(token);

    // console.log("Decoded Token:", decodedToken);

    // Check if the token is expired
    if (decodedToken.exp * 1000 < Date.now()) {
      logout();
      return null;
    }

    // Return the user object with token and decoded information
    return {
      token,
      ...decodedToken,
    };
  } catch (error) {
    // console.error("Error parsing user data:", error);
    return null;
  }
};

const logout = () => {
  // console.log("Logging out...");
  // Remove the token from local storage
  localStorage.removeItem("token");
  // Redirect to the home page
  window.location.href = "/";
};

export { getAuth, logout };
