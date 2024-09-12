import DashboardLayout from '@/layouts/common/DashboardLayout';
import { teacherStudents } from '@/data/data'; // O'quvchilar ma'lumotlarini import qilish
import { FaPlus, FaEye } from 'react-icons/fa'; // Ikonalarni import qilish

const AssignmentCreator = () => {
    const classes = Object.keys(teacherStudents); // Guruhlar ro'yxatini olish

    return (
        <DashboardLayout>
            <div className="p-6 bg-background-light dark:bg-background-dark">
                <h1 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Vazifa yaratish</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((className) => (
                        <div key={className} className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h2 className="text-2xl font-bold mb-2 text-text-light dark:text-text-dark">{className}</h2>
                            <p className="mb-4 text-text-light dark:text-text-dark">O&apos;quvchilar: {teacherStudents[className].length}</p>
                            <div className="flex flex-col justify-between gap-y-2 ">
                                <button className="bg-primary-light dark:bg-primary-dark text-white px-4 py-2 rounded-lg shadow hover:bg-primary-dark dark:hover:bg-primary-light transition duration-200">
                                    <FaPlus className="inline mr-2" /> Yangi topshiriq yaratish
                                </button>
                                <button className="bg-secondary-light dark:bg-secondary-dark text-white px-4 py-2 rounded-lg shadow hover:bg-secondary-dark dark:hover:bg-secondary-light transition duration-200">
                                    <FaEye className="inline mr-2" /> Topshirqlarni ko&apos;rish
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AssignmentCreator;