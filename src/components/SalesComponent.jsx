import { useState, useEffect } from 'react';
import { FaUserGraduate, FaBook, FaClock, FaSearch, FaFilter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EducationStatsComponent = () => {
    const [selectedTab, setSelectedTab] = useState('attendance');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterClass, setFilterClass] = useState('');

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const educationData = [
        {
            id: '1',
            student: 'Aziz Rahimov',
            class: '9-A',
            attendance: '95%',
            grade: '4.5',
            subject: 'Matematika',
            lastAttended: '2023-05-15',
        },
        {
            id: '2',
            student: 'Malika Karimova',
            class: '10-B',
            attendance: '98%',
            grade: '4.8',
            subject: 'Fizika',
            lastAttended: '2023-05-16',
        },
        {
            id: '3',
            student: 'Jasur Aliyev',
            class: '11-A',
            attendance: '92%',
            grade: '4.2',
            subject: 'Kimyo',
            lastAttended: '2023-05-14',
        },
        {
            id: '4',
            student: 'Nilufar Saidova',
            class: '9-B',
            attendance: '97%',
            grade: '4.7',
            subject: 'Biologiya',
            lastAttended: '2023-05-16',
        },
        {
            id: '5',
            student: 'Rustam Xolmatov',
            class: '10-A',
            attendance: '94%',
            grade: '4.4',
            subject: 'Tarix',
            lastAttended: '2023-05-15',
        },
    ];

    const filteredData = educationData.filter(data => {
        return (
            (selectedTab === 'attendance' || selectedTab === 'grades' || selectedTab === 'subjects') &&
            data.student.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterClass === '' || data.class === filterClass)
        );
    });

    const uniqueClasses = [...new Set(educationData.map(data => data.class))];

    return (
        <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg" data-aos="fade-up">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800">Ta&apos;lim statistikasi</h2>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                    {['attendance', 'grades', 'subjects'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-colors duration-200 ${
                                selectedTab === tab
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
                            className="w-full sm:w-auto pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    
                    <div className="relative">
                        <select
                            className="w-full sm:w-auto pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
                            value={filterClass}
                            onChange={(e) => setFilterClass(e.target.value)}
                        >
                            <option value="">Barcha sinflar</option>
                            {uniqueClasses.map(cls => (
                                <option key={cls} value={cls}>{cls}</option>
                            ))}
                        </select>
                        <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Desktop view */}
            <div className="hidden sm:block overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-blue-600 text-white">
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
                                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <td className="py-2 px-4 border-b">
                                    <div className="flex items-center">
                                        <FaUserGraduate className="mr-2 text-blue-500" />
                                        <span className="font-medium">{data.student}</span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b text-center">{data.class}</td>
                                <td className="py-2 px-4 border-b text-center">
                                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full">
                                        {data.attendance}
                                    </span>
                                </td>
                                <td className="py-2 px-4 border-b text-center">{data.grade}</td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex items-center">
                                        <FaBook className="mr-2 text-yellow-500" />
                                        {data.subject}
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex items-center">
                                        <FaClock className="mr-2 text-red-500" />
                                        {data.lastAttended}
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
                        className="bg-white shadow rounded-lg p-4"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <FaUserGraduate className="mr-2 text-blue-500" />
                                <span className="font-medium">{data.student}</span>
                            </div>
                            <span className="text-sm bg-gray-200 px-2 py-1 rounded-full">{data.class}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                                <span className="font-medium">Davomat:</span>
                                <span className="ml-1 inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full">
                                    {data.attendance}
                                </span>
                            </div>
                            <div>
                                <span className="font-medium">Baho:</span>
                                <span className="ml-1">{data.grade}</span>
                            </div>
                            <div className="flex items-center">
                                <FaBook className="mr-1 text-yellow-500" />
                                <span>{data.subject}</span>
                            </div>
                            <div className="flex items-center">
                                <FaClock className="mr-1 text-red-500" />
                                <span>{data.lastAttended}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationStatsComponent;
