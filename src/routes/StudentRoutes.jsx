import { Routes, Route, Navigate } from 'react-router-dom';
import StudentDashboard from '@/pages/student/StudentDashboard';

const StudentRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="*" element={<Navigate to="/student" replace />} />
        </Routes>
    );
};

export default StudentRoutes;