/* eslint-disable react/prop-types */
import { useLocation, Link } from 'react-router-dom';
import { MdDashboard, MdSchool, MdAssignment, MdQuiz, MdTopic, MdMenu, MdClose } from 'react-icons/md';
import { useState } from 'react';
import { IoDocuments } from "react-icons/io5";
import { useAuth } from '@/context/AuthProvider';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();
    const { user } = useAuth();
    const [isTeacherMenuOpen, setIsTeacherMenuOpen] = useState(false);

    const toggleTeacherMenu = () => setIsTeacherMenuOpen((prev) => !prev);

    const teacherMenuItems = [
        { to: "/teacher/grading", icon: MdSchool, text: "Baholash" },
        { to: "/teacher/lab", icon: MdAssignment, text: "Laboratoriya" },
        { to: "/teacher/test", icon: MdQuiz, text: "Test yuklash" },
        { to: "/teacher/topic", icon: MdTopic, text: "Mavzu yaratish" },
    ];

    const commonMenuItems = [
        { to: "/dashboard", icon: MdDashboard, text: "Dashboard" },
        { to: "/files", icon: IoDocuments, text: "Fayllar" },
    ];

    const menuItems = user?.role === 'teacher' ? [...commonMenuItems, { text: "Teacher Menu", items: teacherMenuItems }] : commonMenuItems;

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className={`hidden sm:block bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark h-screen fixed left-0 top-0 overflow-y-auto z-[51] transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
                <div className="p-4 flex justify-between items-center bg-primary-light dark:bg-primary-dark">
                    <h2 className={`text-2xl font-bold text-text-light dark:text-text-dark ${isOpen ? 'block' : 'hidden'}`}>EDU CRM</h2>
                    <button onClick={toggleSidebar} className="text-text-light dark:text-text-dark">
                        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>
                </div>
                <nav className="mt-8">
                    <ul>
                        {menuItems.map((item) => (
                            item.items ? (
                                <li key={item.text}>
                                    <button onClick={toggleTeacherMenu} className="flex items-center p-2 rounded hover:bg-surface-light dark:hover:bg-surface-dark">
                                        <span className="ml-2">{item.text}</span>
                                    </button>
                                    {isTeacherMenuOpen && (
                                        <ul className="ml-4">
                                            {item.items.map((subItem) => (
                                                <li key={subItem.to} className="mb-4">
                                                    <Link
                                                        to={subItem.to}
                                                        className={`flex items-center p-2 rounded ${location.pathname === subItem.to
                                                            ? 'bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark'
                                                            : 'hover:bg-surface-light dark:hover:bg-surface-dark'} ${isOpen ? '' : 'justify-center'}`}
                                                    >
                                                        <subItem.icon size={20} className={location.pathname === subItem.to ? 'text-text-light dark:text-text-dark' : 'text-text-light dark:text-text-dark'} />
                                                        {isOpen && <span className="ml-2">{subItem.text}</span>}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <li key={item.to} className="mb-4">
                                    <Link
                                        to={item.to}
                                        className={`flex items-center p-2 rounded ${location.pathname === item.to
                                            ? 'bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark'
                                            : 'hover:bg-surface-light dark:hover:bg-surface-dark'} ${isOpen ? '' : 'justify-center'}`}
                                    >
                                        <item.icon size={20} className={location.pathname === item.to ? 'text-text-light dark:text-text-dark' : 'text-text-light dark:text-text-dark'} />
                                        {isOpen && <span className="ml-2">{item.text}</span>}
                                    </Link>
                                </li>
                            )
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Mobile Bottom Menu */}
            <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark z-[19]">
                <ul className="flex justify-around items-center h-16">
                    {menuItems.map((item) => (
                        item.items ? (
                            <li key={item.text}>
                                <button onClick={toggleTeacherMenu} className="flex flex-col items-center">
                                    <span className="text-xs">{item.text}</span>
                                </button>
                                {isTeacherMenuOpen && (
                                    <ul className="ml-4">
                                        {item.items.map((subItem) => (
                                            <li key={subItem.to} className="mb-4">
                                                <Link
                                                    to={subItem.to}
                                                    className={`flex flex-col items-center ${location.pathname === subItem.to ? 'text-primary-light dark:text-primary-dark' : 'text-text-light dark:text-text-dark'}`}
                                                >
                                                    <subItem.icon size={24} className={location.pathname === subItem.to ? 'text-primary-light dark:text-primary-dark' : 'text-text-light dark:text-text-dark'} />
                                                    <span className="text-xs">{subItem.text}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    className={`flex flex-col items-center ${location.pathname === item.to ? 'text-primary-light dark:text-primary-dark' : 'text-text-light dark:text-text-dark'}`}
                                >
                                    <item.icon size={24} className={location.pathname === item.to ? 'text-primary-light dark:text-primary-dark' : 'text-text-light dark:text-text-dark'} />
                                    <span className="text-xs">{item.text}</span>
                                </Link>
                            </li>
                        )
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
