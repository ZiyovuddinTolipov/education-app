import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/pages/common/Login';
import AdminRoutes from './AdminRoutes';
import TeacherRoutes from './TeacherRoutes';
import StudentRoutes from './StudentRoutes';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from '@/context/AuthProvider';
import Messages from '@/pages/common/Messages';
import Profile from '@/pages/common/Profile';
const AppRoutes = () => {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route 
                path="/Admin/*" 
                element={
                    <ProtectedRoute roles={['Admin']}>
                        <AdminRoutes />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/teacher/*" 
                element={
                    <ProtectedRoute roles={['teacher']}>
                        <TeacherRoutes />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/student/*" 
                element={
                    <ProtectedRoute roles={['student']}>
                        <StudentRoutes />
                    </ProtectedRoute>
                } 
            />
            <Route path="/" element={<Navigate to={user ? `/${user.role}` : '/login'} replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};

export default AppRoutes;
