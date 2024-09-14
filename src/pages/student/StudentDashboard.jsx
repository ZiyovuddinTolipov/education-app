import DashboardLayout from '@/layouts/common/DashboardLayout';
import { MdAssignment, MdLibraryBooks, MdGrade, MdQuiz } from 'react-icons/md';

const StudentDashboard = () => {
    const subjects = [
        { id: 1, name: "Matematika", independentWorks: 5, resources: 10, grades: 3, tests: 2 },
        { id: 2, name: "Fizika", independentWorks: 3, resources: 8, grades: 4, tests: 1 },
        { id: 3, name: "Kimyo", independentWorks: 4, resources: 6, grades: 2, tests: 3 },
        { id: 4, name: "Biologiya", independentWorks: 2, resources: 5, grades: 1, tests: 0 },
    ];

    return (
        <DashboardLayout>
            <div className="p-6 bg-background-light dark:bg-background-dark">
                <h1 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Dashboard</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {subjects.map(subject => (
                        <div key={subject.id} className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <h2 className="text-lg font-semibold text-text-light dark:text-text-dark">{subject.name}</h2>
                            <div className="flex items-center mt-2">
                                <MdAssignment className="text-gray-600 dark:text-gray-300 mr-2" />
                                <p className="text-gray-600 dark:text-gray-300">Mustaqil ishlar: {subject.independentWorks}</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <MdLibraryBooks className="text-gray-600 dark:text-gray-300 mr-2" />
                                <p className="text-gray-600 dark:text-gray-300">Resurslar: {subject.resources}</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <MdGrade className="text-gray-600 dark:text-gray-300 mr-2" />
                                <p className="text-gray-600 dark:text-gray-300">Baholar: {subject.grades}</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <MdQuiz className="text-gray-600 dark:text-gray-300 mr-2" />
                                <p className="text-gray-600 dark:text-gray-300">Mavzulashtirilgan testlar: {subject.tests}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default StudentDashboard;