import DashboardHeader from "../components/dashboard/DashboardHeader";
import { useUser } from "../context/userContext";

const Dashboard = () => {
  const { user } = useUser();
  const backupUser = localStorage.getItem("user");

  return (
    <div>
      <DashboardHeader />
    </div>
  );
};

export default Dashboard;
