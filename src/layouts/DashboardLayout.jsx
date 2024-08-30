/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { MdNotifications, MdLightMode, MdDarkMode, MdPerson } from 'react-icons/md';
import { useTheme } from '../context/ThemeProvider';

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [unreadMessages] = useState(3);
    const { theme, toggleTheme } = useTheme();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-background-light dark:bg-background-dark">
            <Sidebar 
                isOpen={isSidebarOpen} 
                toggleSidebar={toggleSidebar} 
                isDarkMode={theme === 'dark'}
            />
            <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${isSidebarOpen ? 'sm:ml-64' : 'sm:ml-16'}`}>
                <header className="bg-surface-light dark:bg-surface-dark shadow-md">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
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
                            <Link to="/profile" className="text-text-light dark:text-text-dark">
                                <MdPerson size={24} />
                            </Link>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background-light dark:bg-background-dark">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
