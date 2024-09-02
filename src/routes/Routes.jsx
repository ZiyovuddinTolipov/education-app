import { useRoutes, Navigate } from 'react-router-dom';
import Login from '@/pages/common/Login';
import Messages from '@/pages/common/Messages';
import Dashboard from '@/pages/common/Dashboard';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import TeacherDashboard from '@/pages/teacher/TeacherDashboard';
import StudentDashboard from '@/pages/student/StudentDashboard';
import Files from '@/pages/common/Files';
import Profile from '@/pages/common/Profile';
import TeacherGrading from '@/components/teacher/TeacherGrading';
import LabAssignment from '@/components/teacher/LabAssignment';
import TestUpload from '@/components/teacher/TestUpload';
import TopicCreation from '@/components/teacher/TopicCreation';
import ProtectedRoute from './ProtectedRoute';

export default function AppRoutes() {
    const routes = useRoutes([
        { path: '/', element: <Navigate to="/login" replace /> },
        { path: '/login', element: <Login /> },
        { path: '/messages', element: <Messages /> },
        {
            path: '/dashboard',
            element: (
                <ProtectedRoute roles={['admin', 'teacher', 'student']}>
                    <Dashboard />
                </ProtectedRoute>
            ),
        },
        {
            path: '/admin',
            element: (
                <ProtectedRoute roles={['admin']}>
                    <AdminDashboard />
                </ProtectedRoute>
            ),
        },
        {
            path: '/teacher/*',
            children: [
                { path: '', element: <Navigate to="grading" replace /> },
                { path: 'grading', element: <TeacherGrading /> },
                { path: 'lab', element: <LabAssignment /> },
                { path: 'test', element: <TestUpload /> },
                { path: 'topic', element: <TopicCreation /> },
            ],
            element: (
                <ProtectedRoute roles={['teacher']}>
                    <TeacherDashboard />
                </ProtectedRoute>
            ),
        },
        {
            path: '/student',
            element: (
                <ProtectedRoute roles={['student']}>
                    <StudentDashboard />
                </ProtectedRoute>
            ),
        },
        {
            path: '/files',
            element: (
                <ProtectedRoute roles={['admin', 'teacher']}>
                    <Files />
                </ProtectedRoute>
            ),
        },
        {
            path: '/profile',
            element: (
                <ProtectedRoute roles={['admin', 'teacher', 'student']}>
                    <Profile />
                </ProtectedRoute>
            ),
        },
        { path: '*', element: <Navigate to="/login" replace /> },
    ]);

    return routes;
}
