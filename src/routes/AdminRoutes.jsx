import { Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import TestManagement from '@/components/admin/TestManagement';
import UserManagement from '@/components/admin/UserManagement';
import Statistics from '@/components/admin/Statistics';
import FileManagement from '@/pages/common/Files';
import SurveyManagement from '@/components/admin/SurveyManagement';
import SystemSettings from '@/components/admin/SystemSettings';
import VideoLessons from '@/components/common/VideoLessons';
import VideoLessonsDashboard from '@/layouts/common/VideoLessonsDashboard';
const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="tests" element={<TestManagement />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="video-lessons/*" element={<VideoLessons />} />
            <Route path="course">
                <Route index element={<VideoLessonsDashboard />} />
                <Route path=":id" element={<VideoLessonsDashboard />} />
            </Route>
            <Route path="files" element={<FileManagement />} />
            <Route path="surveys" element={<SurveyManagement />} />
            <Route path="settings" element={<SystemSettings />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
    );
};

export default AdminRoutes;