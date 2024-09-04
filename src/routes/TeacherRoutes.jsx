import { Routes, Route, Navigate } from 'react-router-dom';
import TeacherDashboard from '@/pages/teacher/TeacherDashboard';
import LessonPlanner from '@/components/teacher/LessonPlanner';
import GradeBook from '@/components/teacher/GradeBook';
import AssignmentCreator from '@/components/common/AssignmentCreator';
import StudentProgress from '@/components/teacher/StudentProgress';
import TeacherProfile from '@/components/teacher/TeacherProfile';
import { useAuth } from '@/context/AuthProvider';

const TeacherRoutes = () => {
    const { user } = useAuth();

    if (!user || user.role !== 'teacher') {
        return <Navigate to="/login" replace />;
    }

    return (
        <Routes>
            <Route path="/" element={<TeacherDashboard />} />
            <Route path="lesson-planner" element={<LessonPlanner />} />
            <Route path="grade-book" element={<GradeBook />} />
            <Route path="assignments" element={<AssignmentCreator />} />
            <Route path="student-progress" element={<StudentProgress />} />
            <Route path="profile" element={<TeacherProfile />} />
            <Route path="*" element={<Navigate to="/teacher" replace />} />
        </Routes>
    );
};

export default TeacherRoutes;