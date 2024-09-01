import { useAuth } from '@/context/AuthProvider';
import AttendanceChart from './AttendanceChart';
import GradesDistributionChart from './GradesDistributionChart';
import SubjectsAverageChart from './SubjectsAverageChart';
import GenderDistributionChart from './GenderDistributionChart';
import StudentsByFacultyChart from './StudentsByFacultyChart';
import ClassesStatisticsChart from './ClassesStatisticsChart';

const EducationCharts = () => {
    const { user } = useAuth();
    const isAdmin = user?.role === 'admin';

        return (
            <div className="grid grid-cols-1 gap-4 mt-6">
                <AttendanceChart />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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
