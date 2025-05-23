import React, { createContext, useContext, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAuth, logout as authLogout } from "../util/auth";
import logoutService from "../services/AUTH/logout.service";

// Define the UserType interface
interface UserType {
  user_id: number; // Ensure user_id is always a number
  user_email: string;
  user_first_name: string;
  user_last_name: string;
  user_phone_number: string;
  role_id: number;
  user_img: string;
}

// Define the AuthContextType interface
interface AuthContextType {
  user: UserType | null; // User can be null if not logged in
  setUser: (user: UserType | null) => void;
  isLoggedIn: boolean;
  logout: () => Promise<void>;
}

// Create the AuthContext with an initial value of undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Use getAuth to check token and set user state
    const authUser = getAuth() as UserType;

    if (authUser) {
      // Ensure authUser matches the UserType interface
      setUser(authUser);
    } else {
      setUser(null); // Clear user state if token is invalid or expired
    }
  }, []); // Empty dependency array ensures this effect runs only once

  const logout = async () => {
    try {
      await logoutService.logout(); // Call the logout service
      authLogout(); // Clear token from local storage
      setUser(null); // Clear user state
      navigate("/"); // Redirect to sign-in page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn: !!user, logout }}>
      <ToastContainer position="top-right" autoClose={3000} />
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
