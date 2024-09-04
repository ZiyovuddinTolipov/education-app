import { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import DashboardLayout from '@/layouts/common/DashboardLayout';

const GradeBook = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'Ali Valiyev', grades: { math: 85, physics: 78, chemistry: 92 } },
        { id: 2, name: 'Guli Karimova', grades: { math: 92, physics: 88, chemistry: 95 } },
        // Boshqa talabalar...
    ]);

    const updateGrade = (studentId, subject, grade) => {
        setStudents(students.map(student =>
            student.id === studentId
                ? { ...student, grades: { ...student.grades, [subject]: parseInt(grade) } }
                : student
        ));
    };

    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-100 dark:bg-gray-900">
                <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Baholash jurnali</h1>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md overflow-x-auto">
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
                                    <td className="p-2">{student.name}</td>
                                    <td className="p-2">
                                        <input
                                            type="number"
                                            value={student.grades.math}
                                            onChange={(e) => updateGrade(student.id, 'math', e.target.value)}
                                            className="w-16 p-1 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                        />
                                    </td>
                                    <td className="p-2">
                                        <input
                                            type="number"
                                            value={student.grades.physics}
                                            onChange={(e) => updateGrade(student.id, 'physics', e.target.value)}
                                            className="w-16 p-1 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                        />
                                    </td>
                                    <td className="p-2">
                                        <input
                                            type="number"
                                            value={student.grades.chemistry}
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