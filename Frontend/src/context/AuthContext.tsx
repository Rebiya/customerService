import React, { useState, useEffect, useContext, ReactNode } from "react";
import getAuth from "../util/auth";
import serv from "../services/login.service";

// Define Employee type
interface Employee {
  employee_token: string;
  employee_role?: number;
  employee_id?: string;
  employee_first_name?: string;
  employee_last_name?: string;
  employee_email?: string;
  employee_phone?: string;
}

// Define Context Type
interface AuthContextType {
  isLogged: boolean;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  employee: Employee | null;
  serviceDatas: any[]; // Adjust type if possible
  apiError: boolean;
  apiErrorMessage: string | null;
  loading: boolean;
}

// Create Context with default value
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

// Custom Hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Define Props Type
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider Component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [serviceDatas, setServiceDatas] = useState<any[]>([]);
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null);
  const [apiError, setApiError] = useState<boolean>(false);

  // Fetch Service Data
  const fetchDatas = async () => {
    try {
      const res = await serv.getAllServcies();
      const data = await res.json();
      setServiceDatas(data.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);


  // Fetch Authentication Data
  useEffect(() => {
    const fetchAuth = async () => {
      const response = await getAuth();
      console.log(response);
      if (response.employee_token) {
        setIsLogged(true);
        if (response.employee_role === 3) {
          setIsAdmin(true);
        }
        setEmployee(response);
      }
    };
    fetchAuth();
  }, []);

  // Context Value
  const value: AuthContextType = {
    isLogged,
    isAdmin,
    setIsAdmin,
    setIsLogged,
    employee,
    serviceDatas,
    setServiceDatas,
    fetchDatas,
    apiError,
    apiErrorMessage,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
