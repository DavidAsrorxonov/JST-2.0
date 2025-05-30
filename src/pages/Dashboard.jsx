import React from "react";
import { useUser } from "../context/userContext";

const Dashboard = () => {
  const { user } = useUser();
  const backupUser = localStorage.getItem("user");

  return (
    <div>
      Welcome back,{" "}
      {user?.firstName ? user.firstName : JSON.parse(backupUser).firstName}{" "}
      {user?.lastName ? user.lastName : JSON.parse(backupUser).lastName}!
    </div>
  );
};

export default Dashboard;
