import React from "react";
import Header from "../../components/header/Header";
import UserProfiles from "../UserProfiles";

const Profile: React.FC = () => {
  return (
    <div>
      <Header
        onToggle={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <UserProfiles />
    </div>
  );
};

export default Profile;
