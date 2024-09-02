import DashboardLayout from '@/layouts/common/DashboardLayout';
import EducationStatsComponent from '@/components/EducationStatsComponent';

const Dashboard = () => {
    return (
        <DashboardLayout>
            <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">Boshqaruv paneli</h1>
                <EducationStatsComponent />
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
