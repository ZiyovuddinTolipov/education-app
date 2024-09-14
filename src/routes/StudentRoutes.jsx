import { Routes, Route, Navigate } from 'react-router-dom';
import StudentDashboard from '@/pages/student/StudentDashboard';
import VideoLessons from "@/components/student/VideoLessons"
import VideoLessonDetail from '@/pages/student/VideoLessonDetail';
import Quiz from '@/pages/student/Quiz';

const StudentRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/video-lessons" element={<VideoLessons />} />
            <Route path="/student/video-lessons/:id" component={VideoLessonDetail} />
            <Route path="/student/video-lessons/:id/quiz" component={Quiz} />
            <Route path="*" element={<Navigate to="/student" replace />} />
        </Routes>
    );
};

export default StudentRoutes;