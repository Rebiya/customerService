import React, { useState, useEffect, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import getAuth from "./auth";

// Define the type for the props
interface PrivateAuthRouteProps {
  roles?: string[];
  children: ReactNode;
}

const PrivateAuthRoute: React.FC<PrivateAuthRouteProps> = ({
  roles,
  children,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    const fetchAuth = async () => {
      const response = await getAuth();

      if (response.employee_token) {
        setIsLogged(true);

        if (roles?.length && roles.includes(response.employee_role!)) {
          setIsAuthorized(true);
        }
      }

      setIsChecked(true);
    };

    fetchAuth();
  }, [roles]);

  if (!isChecked) return null; // Prevents rendering until authentication is checked

  if (!isLogged) return <Navigate to="/login" />;
  if (!isAuthorized) return <Navigate to="/unauthorized" />;

  return <>{children}</>;
};

export default PrivateAuthRoute;
