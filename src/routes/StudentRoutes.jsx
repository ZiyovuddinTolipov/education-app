import { Routes, Route, Navigate } from 'react-router-dom';
import StudentDashboard from '@/pages/student/StudentDashboard';
import VideoLessons from "@/components/student/VideoLessons"
import VideoLessonDetail from '@/components/student/VideoLessonDetail';
import Quiz from '@/pages/student/Quiz';
import Courses from '@/components/student/Courses'; // Yangi import
import CourseDetail from '@/components/student/CourseDetail'; // Yangi import

const StudentRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/video-lessons/*" element={<VideoLessons />} />
            <Route path="/video-lessons/:id" element={<VideoLessonDetail />} />
            <Route path="/video-lessons/:id/quiz" element={<Quiz />} />
            <Route path="/courses/*" element={<Courses />} /> {/* Yangi marshrut */}
            <Route path="/courses/:id" element={<CourseDetail />} /> {/* Yangi marshrut */}
            <Route path="*" element={<Navigate to="/student" replace />} />
        </Routes>
    );
};

export default StudentRoutes;