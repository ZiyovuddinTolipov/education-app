/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import DashboardLayout from '@/layouts/common/DashboardLayout';

const TeacherDashboard = ({ children }) => {
    return (
        <DashboardLayout>
                <h1 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">O&apos;qituvchi boshqaruv paneli</h1>
                {children}
                <Outlet />
        </DashboardLayout>
    );
};

export default TeacherDashboard;