/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdSchool, MdAssignment, MdQuiz, MdTopic, MdMenu, MdClose,  MdExpandMore, MdExpandLess } from 'react-icons/md';
import { useState } from 'react';
import { IoDocuments  } from "react-icons/io5";

const Sidebar = ({ isOpen, toggleSidebar, isDarkMode }) => {
    const location = useLocation();
    const [isTeacherMenuOpen, setIsTeacherMenuOpen] = useState(false);

    const toggleTeacherMenu = () => setIsTeacherMenuOpen(!isTeacherMenuOpen);

    const teacherMenuItems = [
        { to: "/teacher/grading", icon: MdSchool, text: "Baholash" },
        { to: "/teacher/lab", icon: MdAssignment, text: "Laboratoriya" },
        { to: "/teacher/test", icon: MdQuiz, text: "Test yuklash" },
        { to: "/teacher/topic", icon: MdTopic, text: "Mavzu yaratish" },
    ];

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
                        <SidebarItem to="/dashboard" icon={MdDashboard} text="Dashboard" isOpen={isOpen} isDarkMode={isDarkMode} isActive={location.pathname === '/dashboard'} />
                        <SidebarDivider isOpen={isOpen} />
                        <SidebarItem to="/files" icon={IoDocuments } text="Fayllar" isOpen={isOpen} isDarkMode={isDarkMode} isActive={location.pathname === '/files'} />
                        <SidebarDivider isOpen={isOpen} />
                        <li className="mb-4">
                            <button
                                onClick={toggleTeacherMenu}
                                className={`flex items-center p-2 rounded w-full ${isOpen ? '' : 'justify-center'}`}
                            >
                                <MdSchool size={20} />
                                {isOpen && <span className="ml-2">O&apos;qituvchi</span>}
                                {isOpen && (isTeacherMenuOpen ? <MdExpandLess size={20} className="ml-auto" /> : <MdExpandMore size={20} className="ml-auto" />)}
                            </button>
                            {isTeacherMenuOpen && (
                                <ul className="ml-4">
                                    {teacherMenuItems.map((item) => (
                                        <SidebarItem
                                            key={item.to}
                                            to={item.to}
                                            icon={item.icon}
                                            text={item.text}
                                            isOpen={isOpen}
                                            isDarkMode={isDarkMode}
                                            isActive={location.pathname === item.to}
                                        />
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Mobile Bottom Menu */}
            <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark z-[19]">
                <ul className="flex justify-around items-center h-16">
                    <MobileMenuItem to="/dashboard" icon={MdDashboard} text="Dashboard" isDarkMode={isDarkMode} isActive={location.pathname === '/dashboard'} />
                    <MobileDivider />
                    <MobileMenuItem to="/files" icon={IoDocuments } text="Files" isDarkMode={isDarkMode} isActive={location.pathname === '/files'} />
                    <MobileDivider />
                    <MobileDropdownMenu
                        icon={MdSchool}
                        text="O'qituvchi"
                        items={teacherMenuItems}
                        isDarkMode={isDarkMode}
                        isActive={teacherMenuItems.some(item => location.pathname === item.to)}
                    />
                </ul>
            </nav>
        </>
    );
};

const SidebarItem = ({ to, icon: Icon, text, isOpen, isActive }) => (
    <li className="mb-4">
        <Link
            to={to}
            className={`flex items-center p-2 rounded ${isActive
                ? 'bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark'
                : 'hover:bg-surface-light dark:hover:bg-surface-dark'} ${isOpen ? '' : 'justify-center'}`}
        >
            <Icon size={20} className={isActive ? 'text-text-light dark:text-text-dark' : 'text-text-light dark:text-text-dark'} />
            {isOpen && <span className="ml-2">{text}</span>}
        </Link>
    </li>
);

const MobileMenuItem = ({ to, icon: Icon, text, isActive }) => (
    <li>
        <Link
            to={to}
            className={`flex flex-col items-center ${isActive ? 'text-primary-light dark:text-primary-dark' : 'text-text-light dark:text-text-dark'}`}
        >
            <Icon size={24} className={isActive ? 'text-primary-light dark:text-primary-dark' : 'text-text-light dark:text-text-dark'} />
            <span className="text-xs">{text}</span>
        </Link>
    </li>
);

const MobileDropdownMenu = ({ icon: Icon, text, items, isActive }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <li className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex flex-col items-center ${isActive ? 'text-primary-light dark:text-primary-dark' : 'text-text-light dark:text-text-dark'}`}
            >
                <Icon size={24} />
                <span className="text-xs">{text}</span>
            </button>
            {isOpen && (
                <ul 
                    className="absolute bottom-full -left-[20px] w-48 bg-surface-light dark:bg-surface-dark shadow-lg rounded-t-md overflow-hidden transform -translate-x-1/2"

                >
                    {items.map((item, index) => {
                        const isItemActive = location.pathname === item.to;
                        return (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    className={`flex items-center p-3 ${
                                        isItemActive
                                            ? 'bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark'
                                            : 'hover:bg-primary-light dark:hover:bg-primary-dark'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <item.icon size={20} className={`mr-2 ${isItemActive ? 'text-text-light dark:text-text-dark' : ''}`} />
                                    <span>{item.text}</span>
                                </Link>
                                {index < items.length - 1 && <DropdownDivider />}
                            </li>
                        );
                    })}
                </ul>
            )}
        </li>
    );
};

const DropdownDivider = () => (
    <hr className="border-gray-200 dark:border-gray-400 mx-3" />
);

const SidebarDivider = ({ isOpen }) => (
    <li className={`my-2 ${isOpen ? 'mx-4' : 'mx-2'}`}>
        <hr className="border-gray-300 dark:border-gray-400" />
    </li>
);

const MobileDivider = () => (
    <li className="h-8 w-px bg-gray-300 dark:bg-gray-700" />
);

export default Sidebar;
