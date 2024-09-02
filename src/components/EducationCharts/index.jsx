import { useAuth } from '@/context/AuthProvider';
import AttendanceChart from '@/components/EducationCharts/AttendanceChart';
import GradesDistributionChart from '@/components/EducationCharts/GradesDistributionChart';
import SubjectsAverageChart from '@/components/EducationCharts/SubjectsAverageChart';
import GenderDistributionChart from '@/components/EducationCharts/GenderDistributionChart';
import StudentsByFacultyChart from '@/components/EducationCharts/StudentsByFacultyChart';
import ClassesStatisticsChart from '@/components/EducationCharts/ClassesStatisticsChart';

const EducationCharts = () => {
    const { user } = useAuth();
    const isAdmin = user?.role === 'admin';

    if (!isAdmin) {
        return (
            <div className="grid grid-cols-1 gap-4 mt-6">
                <AttendanceChart />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 bg-white">
            <AttendanceChart />
            <GradesDistributionChart />
            <SubjectsAverageChart />
            <GenderDistributionChart />
            <StudentsByFacultyChart />
            <ClassesStatisticsChart />
        </div>
    );
};

export default EducationCharts;