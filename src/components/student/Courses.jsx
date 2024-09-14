import { Link } from 'react-router-dom';
import DashboardLayout from '@/layouts/common/DashboardLayout';
import { coursesData } from '@/data/data';

const Courses = () => {
    return (
        <DashboardLayout>
            <div className="p-6 bg-background-light dark:bg-background-dark">
                <h1 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Kurslar</h1>
                <ul className="space-y-4">
                    {coursesData.map(course => (
                        <li key={course.id} className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105">
                            <Link to={`/student/courses/${course.id}`} className="text-lg font-semibold text-text-light dark:text-text-dark">{course.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </DashboardLayout>
    );
};

export default Courses;