import { useState, useEffect } from 'react';
import { MdSave } from 'react-icons/md';
import { FaSearch, FaFilter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeacherGrading = () => {
    const [students, setStudents] = useState([]);
    const [grades, setGrades] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [filterGroup, setFilterGroup] = useState('');

    useEffect(() => {
        // API dan o'quvchilar ro'yxatini olish
        setStudents([
            { id: 1, name: 'Ali Valiyev', group: 'A1' },
            { id: 2, name: 'Guli Karimova', group: 'B2' },
            { id: 3, name: 'Bobur Alimov', group: 'A1' },
            { id: 4, name: 'Zarina Umarova', group: 'B2' },
            { id: 5, name: 'Sardor Rashidov', group: 'C3' },
        ]);

        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const handleGradeChange = (studentId, grade) => {
        setGrades(prev => ({ ...prev, [studentId]: grade }));
    };

    const submitGrades = () => {
        console.log('Baholar yuborildi:', grades);
    };

    const filteredStudents = students.filter(student => 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterGroup === '' || student.group === filterGroup)
    );

    const uniqueGroups = [...new Set(students.map(student => student.group))];

    return (
        <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg" data-aos="fade-up">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800" data-aos="fade-right">O&apos;quvchilarni baholash</h2>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
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
                            value={filterGroup}
                            onChange={(e) => setFilterGroup(e.target.value)}
                        >
                            <option value="">Barcha guruhlar</option>
                            {uniqueGroups.map(group => (
                                <option key={group} value={group}>{group}</option>
                            ))}
                        </select>
                        <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto -mx-4 sm:-mx-6">
                <div className="inline-block min-w-full py-2 align-middle">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-blue-600">
                                <tr>
                                    <th scope="col" className="py-3 pl-4 pr-3 text-left text-xs font-medium text-white uppercase tracking-wider">ID</th>
                                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Ism</th>
                                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Guruh</th>
                                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Baho</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredStudents.map((student, index) => (
                                    <tr key={student.id} data-aos="fade-left" data-aos-delay={index * 100}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{student.id}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{student.name}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{student.group}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <input 
                                                type="number" 
                                                min="0" 
                                                max="100" 
                                                value={grades[student.id] || ''} 
                                                onChange={(e) => handleGradeChange(student.id, e.target.value)}
                                                className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <button 
                onClick={submitGrades}
                className="mt-6 w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center shadow-md"
                data-aos="fade-up"
            >
                <MdSave className="mr-2" />
                Baholarni saqlash
            </button>
        </div>
    );
};

export default TeacherGrading;