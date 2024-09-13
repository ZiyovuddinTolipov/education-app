import { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import DashboardLayout from '@/layouts/common/DashboardLayout';
import { teacherStudents } from '@/data/data'; // O'quvchilar ma'lumotlarini import qilish

const GradeBook = () => {
    const [selectedClass, setSelectedClass] = useState('Barcha');
    const [students, setStudents] = useState([]);

    const handleClassChange = (event) => {
        const className = event.target.value;
        setSelectedClass(className);
        // Tanlangan sinfga mos o'quvchilarni olish
        setStudents(className === 'Barcha' ? [] : teacherStudents[className] || []);
    };

    const updateGrade = (studentId, date, value) => {
        // Bahoni yangilash funksiyasi
        console.log(`Student ID: ${studentId}, Date: ${date}, New Grade: ${value}`);
    };

    // Sanalar ro'yxati
    const dates = [
        "11.09.2024",
        "12.09.2024",
        "13.09.2024",
        "14.09.2024",
        "15.09.2024",
        "16.09.2024",
        "17.09.2024"
    ];

    return (
        <DashboardLayout>
            <div className="p-6 bg-background-light dark:bg-background-dark">
                <h1 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Baholash jurnali</h1>
                <select value={selectedClass} onChange={handleClassChange} className="mb-4 p-2 border rounded dark:border-gray-600">
                    <option value="Barcha">Barcha</option>
                    <option value="9-A">9-A</option>
                    <option value="9-B">9-B</option>
                    <option value="10-A">10-A</option>
                    <option value="10-B">10-B</option>
                    <option value="11-A">11-A</option>
                    <option value="11-B">11-B</option>
                    <option value="11-C">11-C</option>
                </select>
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-md overflow-x-auto">
                    {students.length === 0 && selectedClass !== 'Barcha' ? (
                        <p className="text-red-500">Sinf tanlang</p>
                    ) : (
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-gray-200 dark:bg-gray-700">
                                    <th className="p-2 text-left text-text-light dark:text-text-dark">Talaba</th>
                                    {dates.map((date, index) => (
                                        <th key={index} className="p-2 text-left text-text-light dark:text-text-dark">{date}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {students.map(student => (
                                    <tr key={student.id} className="border-b dark:border-gray-600">
                                        <td className="p-2 text-text-light dark:text-text-dark">{student.student}</td>
                                        {dates.map((date, index) => (
                                            <td key={index} className="p-2">
                                                <input
                                                    type="number"
                                                    min="0" // Minimal qiymat
                                                    max="100" // Maksimal qiymat
                                                    placeholder="Bahoni kiriting"
                                                    onChange={(e) => updateGrade(student.id, date, e.target.value)}
                                                    className="w-16 p-1 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <button className="mt-4 p-2 bg-primary-light dark:bg-primary-dark text-white rounded flex items-center hover:bg-primary-dark dark:hover:bg-primary-light">
                    <FaSave className="mr-2" /> Saqlash
                </button>
            </div>
        </DashboardLayout>
    );
};

export default GradeBook;