/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useLocation, Link } from 'react-router-dom';
import { MdDashboard, MdSchool, MdAssignment,MdOutlineVideoSettings, MdQuiz, MdMenu, MdClose, MdPeople, MdSettings, MdInsertChart, MdVideoLibrary } from 'react-icons/md';
import { useState } from 'react';
import { IoDocuments } from "react-icons/io5";
import { useAuth } from '@/context/AuthProvider';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();
    const { user } = useAuth();
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleSubmenu = () => setIsSubmenuOpen((prev) => !prev);

    const adminMenuItems = [
        { to: "/admin", icon: MdDashboard, text: "Bosh Sahifa" },
        { to: "/admin/tests", icon: MdQuiz, text: "Testlar" },
        { to: "/admin/users", icon: MdPeople, text: "Foydalanuvchilar" },
        { to: "/admin/statistics", icon: MdInsertChart, text: "Statistika" },
        { to: "/admin/video-lessons", icon: MdOutlineVideoSettings, text: "Video Darslar" },
        { to: "/admin/surveys", icon: MdAssignment, text: "So'rovnomalar" },
    ];

    const teacherMenuItems = [
        { to: "/teacher", icon: MdDashboard, text: "Bosh Sahifa" },
        { to: "/teacher/lesson-planner", icon: MdSchool, text: "Dars rejasi" },
        { to: "/teacher/grade-book", icon: MdAssignment, text: "Baholash" },
        { to: "/teacher/assignments", icon: MdQuiz, text: "Topshiriqlar" },
        { to: "/teacher/student-progress", icon: MdInsertChart, text: "O'quvchi yutuqlari" },
        { to: "/teacher/profile", icon: MdPeople, text: "Profil" },
    ];

    const studentMenuItems = [
        { to: "/student", icon: MdDashboard, text: "Bosh Sahifa" },
        { to: "/student/video-lessons", icon: MdVideoLibrary, text: "Video darslar" },
        { to: "/student/courses", icon: MdSchool, text: "Kurslar" }, // Kurslar qo'shildi
    ];

    const getMenuItems = () => {
        switch (user?.role) {
            case 'Admin':
                return adminMenuItems;
            case 'Teacher':
                return teacherMenuItems;
            case 'Student':
                return studentMenuItems;
            default:
                return [];
        }
    };

    const menuItems = getMenuItems();

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className={`hidden sm:block bg-background-light dark:bg-black text-text-light dark:text-text-dark h-screen fixed left-0 top-0 overflow-y-auto z-[51] transition-all duration-300 border-r border-r-primary-light ${isOpen ? 'w-64' : 'w-16'}`}>
                <div className="p-4 flex justify-between items-center bg-primary-light dark:bg-black relative h-18 pb-6">
                    <h2 className={`text-2xl font-bold text-white ${isOpen ? 'block' : 'hidden'}`}>Elektronika.uz</h2>
                    <button onClick={toggleSidebar} className="text-white absolute right-4 top-1/2 transform -translate-y-1/2">
                        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>
                </div>
                <nav className="mt-8 pr-2">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index} className="mb-2">
                                <Link
                                    to={item.to}
                                    className={`flex items-center px-4 py-2 text-sm ${location.pathname === item.to ? 'bg-primary-light text-base dark:bg-primary-dark text-white' : 'text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800'} rounded-lg transition-colors duration-150`}
                                >
                                    {item.icon && <item.icon className={`text-lg ${isOpen ? 'mr-3' : 'mx-auto'}`} />}
                                    {isOpen && <span>{item.text}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Mobile Bottom Menu */}
            <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark z-[19]">
                <ul className="flex justify-around items-center h-16">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.to}
                                className={`flex flex-col items-center ${location.pathname === item.to ? 'text-primary-light dark:text-primary-dark' : 'text-text-light dark:text-text-dark'}`}
                            >
                                {item.icon && <item.icon size={24} className={location.pathname === item.to ? 'text-primary-light dark:text-primary-dark' : 'text-text-light dark:text-text-dark'} />}
                                {/* <span className="text-xs">{item.text}</span> */}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
