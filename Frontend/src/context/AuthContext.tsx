import React, { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface UserType {
  user_id: number;
  user_email: string;
  user_first_name: string;
  user_last_name: string;
  user_phone_number: string;
  role_id: number;
  user_img: string;
}

interface AuthContextType {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  isLoggedIn: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(() => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const decodedToken: any = jwtDecode(token);
      return {
        user_id: decodedToken.user_id,
        user_email: decodedToken.user_email,
        user_first_name: decodedToken.user_first_name,
        user_last_name: decodedToken.user_last_name,
        user_phone_number: decodedToken.user_phone_number,
        role_id: decodedToken.role_id ?? -1,
        user_img: decodedToken.user_img,
      };
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  });

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/signin";
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn: !!user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
