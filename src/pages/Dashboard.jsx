import DashboardBody from "../components/dashboard/DashboardBody";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { useUser } from "../context/userContext";
import PageWrapper from "../transition/PageWrapper";

const Dashboard = () => {
  const { user } = useUser();
  const backupUser = localStorage.getItem("user");

  return (
    <PageWrapper>
      <div>
        <DashboardHeader />
        <DashboardBody />
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
