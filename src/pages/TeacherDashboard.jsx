import { Outlet } from 'react-router-dom';
import useTeacherAuth from '../hooks/useTeacherAuth';
import DashboardLayout from '../layouts/DashboardLayout';

const TeacherDashboard = () => {
    const isTeacher = useTeacherAuth();

    if (!isTeacher) {
        return <div>Sizda bu sahifaga kirish huquqi yo&apos;q.</div>;
    }

    return (
        <DashboardLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">O&apos;qituvchi boshqaruv paneli</h1>
                <Outlet />
            </div>
        </DashboardLayout>
    );
};

export default TeacherDashboard;