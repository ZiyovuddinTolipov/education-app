import { useParams } from 'react-router-dom';
import DashboardLayout from '@/layouts/common/DashboardLayout';
import { coursesData } from '@/data/data';

const CourseDetail = () => {
    const { id } = useParams();
    const course = coursesData.find(c => c.id === parseInt(id));

    if (!course) {
        return <div>Kurs topilmadi.</div>;
    }

    return (
        <DashboardLayout>
            <div className="p-6 bg-background-light dark:bg-background-dark">
                <h1 className="text-3xl font-bold mb-4 text-text-light dark:text-text-dark">{course.title}</h1>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{course.description}</p>
                <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">Mavzular</h2>
                <ul className="space-y-2">
                    {course.topics.map(topic => (
                        <li key={topic.id} className="bg-surface-light dark:bg-surface-dark p-2 rounded-lg shadow-md">
                            <p className="text-lg font-semibold text-text-light dark:text-text-dark">{topic.title}</p>
                            <p className="text-gray-600 dark:text-gray-300">Davomiyligi: {topic.duration}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </DashboardLayout>
    );
};

export default CourseDetail;