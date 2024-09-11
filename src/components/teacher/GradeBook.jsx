import { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import DashboardLayout from '@/layouts/common/DashboardLayout';
import {  teacherStudents } from '@/data/data'; // Foydalanuvchilar va o'quvchilar ma'lumotlarini import qilish

const GradeBook = () => {
    const [selectedClass, setSelectedClass] = useState('Barcha');
    const [students, setStudents] = useState([]);

    const handleClassChange = (event) => {
        const className = event.target.value;
        setSelectedClass(className);
        // Tanlangan sinfga mos o'quvchilarni olish
        setStudents(className === 'Barcha' ? [] : teacherStudents[className] || []);
    };
    const updateGrade=(a,b,c)=>{
        console.log(a,b,c)
    }

    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-100 dark:bg-gray-900">
                <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Baholash jurnali</h1>
                <select value={selectedClass} onChange={handleClassChange} className="mb-4 p-2 border rounded">
                    <option value="Barcha">Barcha</option>
                    <option value="9-A">9-A</option>
                    <option value="9-B">9-B</option>
                    <option value="10-A">10-A</option>
                    <option value="10-B">10-B</option>
                    <option value="11-A">11-A</option>
                    <option value="11-B">11-B</option>
                    <option value="11-C">11-C</option>
                </select>
                <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-md overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-gray-700">
                                <th className="p-2 text-left">Talaba</th>
                                <th className="p-2 text-left">Matematika</th>
                                <th className="p-2 text-left">Fizika</th>
                                <th className="p-2 text-left">Kimyo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => (
                                <tr key={student.id} className="border-b dark:border-gray-600">
                                    <td className="p-2">{student.student}</td>
                                    <td className="p-2">
                                        <input
                                            type="number"
                                            value={student.grade}
                                            onChange={(e) => updateGrade(student.id, 'math', e.target.value)}
                                            className="w-16 p-1 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                        />
                                    </td>
                                    <td className="p-2">
                                        <input
                                            type="number"
                                            value={student.grade}
                                            onChange={(e) => updateGrade(student.id, 'physics', e.target.value)}
                                            className="w-16 p-1 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                        />
                                    </td>
                                    <td className="p-2">
                                        <input
                                            type="number"
                                            value={student.grade}
                                            onChange={(e) => updateGrade(student.id, 'chemistry', e.target.value)}
                                            className="w-16 p-1 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="mt-4 p-2 bg-green-500 text-white rounded flex items-center hover:bg-green-600">
                    <FaSave className="mr-2" /> Saqlash
                </button>
            </div>
        </DashboardLayout>
    );
};

export default GradeBook;