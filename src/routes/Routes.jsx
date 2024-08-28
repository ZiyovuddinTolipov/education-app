import { useRoutes, Navigate } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import TeacherDashboard from '@/pages/TeacherDashboard';
import TeacherGrading from '@/components/TeacherGrading';
import LabAssignment from '@/components/LabAssignment';
import TestUpload from '@/components/TestUpload';
import TopicCreation from '@/components/TopicCreation';
import Messages from '@/pages/Messages';

export default function AppRoutes() {
    const routes = useRoutes([
        { path: '/', element: <Navigate to="/dashboard" replace /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/messages', element: <Messages /> },
        { 
            path: '/teacher', 
            element: <TeacherDashboard />,
            children: [
                { path: '', element: <Navigate to="grading" replace /> },
                { path: 'grading', element: <TeacherGrading /> },
                { path: 'lab', element: <LabAssignment /> },
                { path: 'test', element: <TestUpload /> },
                { path: 'topic', element: <TopicCreation /> },
            ]
        },
        { path: '*', element: <Navigate to="/dashboard" replace /> }
    ]);

    return routes;
}
