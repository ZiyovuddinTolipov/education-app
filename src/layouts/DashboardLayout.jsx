/* eslint-disable react/prop-types */
import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'sm:ml-64' : 'sm:ml-16'}`}>
                <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
                    <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
                </header>
                <main className="flex-1 p-6 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
