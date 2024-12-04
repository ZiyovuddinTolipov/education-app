/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Sidebar from '@/components/common/Sidebar';
import Navbar from '@/components/common/Navbar';

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-[100svh] h-auto bg-[#F7F7FA] dark:bg-black">
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
            />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'sm:ml-64' : 'sm:ml-16'}`}>
                <Navbar maxWidth={250} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F7F7FA] dark:bg-black mt-16 p-6">
                    <div className=" mx-auto px-4 sm:px-6 lg:px-0 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
