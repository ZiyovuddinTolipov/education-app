import { useRoutes, Navigate } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import TeacherDashboard from '@/pages/TeacherDashboard';
import AdminDashboard from '@/pages/AdminDashboard';
import StudentDashboard from '@/pages/StudentDashboard';
import Files from '@/pages/Files'; // Assuming you have a Files component
import Login from '@/pages/Login';
import Profile from '@/pages/Profile'; // Assuming you have a Profile component
import ProtectedRoute from '@/routes/ProtectedRoute';
import TeacherGrading from '@/components/teacher/TeacherGrading';
import LabAssignment from '@/components/teacher/LabAssignment';
import TestUpload from '@/components/teacher/TestUpload';
import TopicCreation from '@/components/teacher/TopicCreation';
import Messages from '@/pages/Messages';


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
