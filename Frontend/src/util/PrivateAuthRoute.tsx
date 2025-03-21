import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { PuffLoader } from "react-spinners";
interface PrivateAuthRouteProps {
  roles?: number[];
  children: React.ReactNode;
}

const PrivateAuthRoute: React.FC<PrivateAuthRouteProps> = ({
  roles,
  children,
}) => {
  const { user, isLoggedIn } = useAuth();

  // Wait until the user data is available
  if (user === null) {
    // Add a loading state or just return null until user state is initialized
    return (
      <div>
        <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
          <PuffLoader
            color="#1c22b0"
            cssOverride={{ margin: "auto auto" }}
            size={90}
          />
        </div>
      </div>
    );
  }

  // Prevent access if the user is not logged in
  if (!isLoggedIn) {
    // console.log("User is not logged in. Redirecting to /signin");
    return <Navigate to="/signin" />;
  }

  // Role-based access control
  if (roles && !roles.includes(user.role_id)) {
    // console.log(
    //   "User does not have required role. Redirecting to /unauthorized"
    // );
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default PrivateAuthRoute;
