import DashboardLayout from '@/layouts/common/DashboardLayout';
import WelcomeCard from '@/components/WelcomeCard';
import StatCard from '@/components/StatCard';
import PerformanceCard from '@/components/PerformanceCard';
import ClassesStatisticsChart from '@/components/EducationCharts/ClassesStatisticsChart';
import StudentsByFacultyChart from '@/components/EducationCharts/StudentsByFacultyChart';
import { FaUsers, FaProjectDiagram } from 'react-icons/fa';
const Dashboard = () => {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WelcomeCard name="David" budget="98,450" expense="2,440" />
            <StatCard title="Customers" value="36,358" change={-12} icon={FaUsers} color="bg-blue-500" />
            <StatCard title="Projects" value="78,298" change={31.8} icon={FaProjectDiagram} color="bg-purple-500" />
            <PerformanceCard
                title="Your Performance"
                value={275}
                orders={[
                    { title: "New orders", value: "64" },
                    { title: "On hold", value: "4" },
                    { title: "Delivered", value: "12" }
                ]}
            />
            <ClassesStatisticsChart />
            <StudentsByFacultyChart />
        </div>
        </DashboardLayout>
    );
};

export default Dashboard;
