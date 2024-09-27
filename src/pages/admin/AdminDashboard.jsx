/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { FaClipboardList, FaUsers, FaChartBar, FaFileAlt, FaPoll, FaCog } from 'react-icons/fa';
import StatCard from '@/components/admin/StatCard';
import DashboardLayout from '@/layouts/common/DashboardLayout';
const AdminDashboard = () => {
    const stats = [
        { title: "Jami testlar", value: 150, change: 5, isIncrease: true },
        { title: "Faol foydalanuvchilar", value: 1200, change: 3.2, isIncrease: true },
        { title: "O'rtacha ball", value: 78.5, change: 1.8, isIncrease: false },
        { title: "Yuklangan fayllar", value: 450, change: 12, isIncrease: true },
    ];

    return (
        <DashboardLayout >
            <div className="p-6 bg-background-light dark:bg-background-dark"> 
                <h1 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Admin boshqaruv paneli</h1> 

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to="/admin/tests" className="flex items-center p-6 bg-surface-light dark:bg-surface-dark rounded-lg shadow-md hover:shadow-lg transition-shadow"> 
                        <FaClipboardList className="text-3xl text-primary-light dark:text-primary-dark mr-4" /> 
                        <div>
                            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">Testlarni boshqarish</h2>
                            <p className="text-text-light dark:text-text-dark">Testlarni yaratish, tahrirlash va o'chirish</p>
                        </div>
                    </Link>
                    <Link to="/admin/users" className="flex items-center p-6 bg-surface-light dark:bg-surface-dark rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <FaUsers className="text-3xl text-green-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">Foydalanuvchilarni boshqarish</h2>
                            <p className="text-text-light dark:text-text-dark">Foydalanuvchi profillarini yaratish va tahrirlash</p>
                        </div>
                    </Link>
                    <Link to="/admin/statistics" className="flex items-center p-6 bg-surface-light dark:bg-surface-dark rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <FaChartBar className="text-3xl text-yellow-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">Statistika</h2>
                            <p className="text-text-light dark:text-text-dark">O'quvchilar statistikasini ko'rish va tahlil qilish</p>
                        </div>
                    </Link>
                    <Link to="/admin/files" className="flex items-center p-6 bg-surface-light dark:bg-surface-dark rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <FaFileAlt className="text-3xl text-purple-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">Fayllarni boshqarish</h2>
                            <p className="text-text-light dark:text-text-dark">Resurslarni yuklash va boshqarish</p>
                        </div>
                    </Link>
                    <Link to="/admin/surveys" className="flex items-center p-6 bg-surface-light dark:bg-surface-dark rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <FaPoll className="text-3xl text-red-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">So'rovnomalar</h2>
                            <p className="text-text-light dark:text-text-dark">O'qituvchilar baholash tizimini boshqarish</p>
                        </div>
                    </Link>
                    <Link to="/admin/settings" className="flex items-center p-6 bg-surface-light dark:bg-surface-dark rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <FaCog className="text-3xl text-gray-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">Tizim sozlamalari</h2>
                            <p className="text-text-light dark:text-text-dark">Xavfsizlik va til sozlamalarini boshqarish</p>
                        </div>
                    </Link>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AdminDashboard;
