import  { useState, useEffect } from 'react';
import { FaUserGraduate, FaBook, FaClock, FaSearch, FaFilter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EducationCharts from '@/components/common/EducationCharts/index';
import { educationData } from '@/data/data';

const EducationStatsComponent = () => {
    const [selectedTab, setSelectedTab] = useState('attendance');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterClass, setFilterClass] = useState('');

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const filteredData = educationData.filter(data => {
        return (
            (selectedTab === 'attendance' || selectedTab === 'grades' || selectedTab === 'subjects') &&
            data.student.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterClass === '' || data.class === filterClass)
        );
    });

    const uniqueClasses = [...new Set(educationData.map(data => data.class))];

    return (
        <div className="p-4 sm:p-6 bg-surface-light dark:bg-surface-dark rounded-lg shadow-lg" >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary-light dark:text-primary-dark">Ta&apos;lim statistikasi</h2>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                    {['attendance', 'grades', 'subjects'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
                                selectedTab === tab
                                    ? 'bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark'
                                    : 'bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark hover:bg-accent-light dark:hover:bg-accent-dark'
                            }`}
                            onClick={() => setSelectedTab(tab)}
                        >
                            {tab === 'attendance' ? 'Davomat' : tab === 'grades' ? 'Baholar' : 'Fanlar'}
                        </button>
                    ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Qidirish..."
                            className="w-full sm:w-auto pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light dark:text-text-dark" />
                    </div>
                    
                    <div className="relative">
                        <select
                            className="w-full sm:w-auto pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark appearance-none bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                            value={filterClass}
                            onChange={(e) => setFilterClass(e.target.value)}
                        >
                            <option value="">Barcha sinflar</option>
                            {uniqueClasses.map(cls => (
                                <option key={cls} value={cls}>{cls}</option>
                            ))}
                        </select>
                        <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light dark:text-text-dark" />
                    </div>
                </div>
            </div>

            <div className="h-[800px] overflow-y-auto"> {/* h-[600px] o'rniga h-[800px] */}
                <EducationCharts />
            </div>

            {/* Desktop view */}
            <div className="hidden sm:block overflow-x-auto">
                <table className="min-w-full bg-background-light dark:bg-background-dark border border-accent-light dark:border-accent-dark shadow-sm rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark">
                            <th className="py-3 px-4 text-left">O&apos;quvchi</th>
                            <th className="py-3 px-4 text-left">Sinf</th>
                            <th className="py-3 px-4 text-left">Davomat</th>
                            <th className="py-3 px-4 text-left">Baho</th>
                            <th className="py-3 px-4 text-left">Fan</th>
                            <th className="py-3 px-4 text-left">Oxirgi qatnashgan sana</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((data, index) => (
                            <tr 
                                key={data.id} 
                                className={index % 2 === 0 ? 'bg-surface-light dark:bg-surface-dark' : 'bg-background-light dark:bg-background-dark'}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <td className="py-2 px-4 border-b dark:border-accent-dark">
                                    <div className="flex items-center">
                                        <FaUserGraduate className="mr-2 text-primary-light dark:text-primary-dark" />
                                        <span className="font-medium text-text-light dark:text-text-dark">{data.student}</span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b dark:border-accent-dark text-center text-text-light dark:text-text-dark">{data.class}</td>
                                <td className="py-2 px-4 border-b dark:border-accent-dark text-center">
                                    <span className="inline-block px-2 py-1 bg-accent-light dark:bg-accent-dark text-text-light dark:text-text-dark rounded-full">
                                        {data.attendance}
                                    </span>
                                </td>
                                <td className="py-2 px-4 border-b dark:border-accent-dark text-center text-text-light dark:text-text-dark">{data.grade}</td>
                                <td className="py-2 px-4 border-b dark:border-accent-dark">
                                    <div className="flex items-center">
                                        <FaBook className="mr-2 text-secondary-light dark:text-secondary-dark" />
                                        <span className="text-text-light dark:text-text-dark">{data.subject}</span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b dark:border-accent-dark">
                                    <div className="flex items-center">
                                        <FaClock className="mr-2 text-accent-light dark:text-accent-dark" />
                                        <span className="text-text-light dark:text-text-dark">{data.lastAttended}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile view */}
            <div className="sm:hidden space-y-4">
                {filteredData.map((data, index) => (
                    <div 
                        key={data.id} 
                        className="bg-surface-light dark:bg-surface-dark shadow rounded-lg p-4"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <FaUserGraduate className="mr-2 text-primary-light dark:text-primary-dark" />
                                <span className="font-medium text-text-light dark:text-text-dark">{data.student}</span>
                            </div>
                            <span className="text-sm bg-accent-light dark:bg-accent-dark text-text-light dark:text-text-dark px-2 py-1 rounded-full">{data.class}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                                <span className="font-medium text-text-light dark:text-text-dark">Davomat:</span>
                                <span className="ml-1 inline-block px-2 py-1 bg-accent-light dark:bg-accent-dark text-text-light dark:text-text-dark rounded-full">
                                    {data.attendance}
                                </span>
                            </div>
                            <div>
                                <span className="font-medium text-text-light dark:text-text-dark">Baho:</span>
                                <span className="ml-1 text-text-light dark:text-text-dark">{data.grade}</span>
                            </div>
                            <div className="flex items-center">
                                <FaBook className="mr-1 text-secondary-light dark:text-secondary-dark" />
                                <span className="text-text-light dark:text-text-dark">{data.subject}</span>
                            </div>
                            <div className="flex items-center">
                                <FaClock className="mr-1 text-accent-light dark:text-accent-dark" />
                                <span className="text-text-light dark:text-text-dark">{data.lastAttended}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationStatsComponent;
