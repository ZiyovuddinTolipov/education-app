/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import { MdNotifications, MdLightMode, MdDarkMode, MdPerson } from 'react-icons/md';
import { useTheme } from '@/context/ThemeProvider';

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [unreadMessages] = useState(3);
    const { theme, toggleTheme } = useTheme();
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen((prev) => !prev);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="flex min-h-[100svh] h-auto dark:bg-background-dark">
            <Sidebar 
                isOpen={isSidebarOpen} 
                toggleSidebar={toggleSidebar} 
                isDarkMode={theme === 'dark'}
            />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'sm:ml-64' : 'sm:ml-16'}`}>
                <header className="bg-surface-light dark:bg-surface-dark shadow-md fixed top-0 left-0 right-0 z-50">
                    <div className={`max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center ${isSidebarOpen ? 'sm:ml-64' : 'sm:ml-16'}`}>
                        <h1 className="text-2xl font-semibold text-text-light dark:text-text-dark">Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <Link to="/messages" className="relative">
                                <MdNotifications size={24} className="text-text-light dark:text-text-dark" />
                                {unreadMessages > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-accent-light dark:bg-accent-dark text-text-light dark:text-text-dark text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {unreadMessages}
                                    </span>
                                )}
                            </Link>
                            <button onClick={toggleTheme} className="text-text-light dark:text-text-dark">
                                {theme === 'dark' ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
                            </button>
                            <div className="relative">
                                <button onClick={toggleProfileDropdown} className="text-text-light dark:text-text-dark">
                                    <MdPerson size={24} />
                                </button>
                                {isProfileDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2">
                                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            Profilni tahrirlash
                                        </Link>
                                        <button 
                                            onClick={handleLogout} 
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            Profildan chiqish
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white dark:bg-background-dark mt-16">
                    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
