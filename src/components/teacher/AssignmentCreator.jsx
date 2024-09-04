import  { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import DashboardLayout from '@/layouts/common/DashboardLayout';

const AssignmentCreator = () => {
    const [assignments, setAssignments] = useState([]);
    const [newAssignment, setNewAssignment] = useState({ title: '', description: '', dueDate: '' });

    const addAssignment = () => {
        setAssignments([...assignments, { ...newAssignment, id: Date.now() }]);
        setNewAssignment({ title: '', description: '', dueDate: '' });
    };

    const deleteAssignment = (id) => {
        setAssignments(assignments.filter(assignment => assignment.id !== id));
    };

    return (
        <DashboardLayout >
        <div className="p-6 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Vazifa yaratish</h1>
            <div className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Yangi vazifa</h2>
                <div className="flex flex-wrap gap-4">
                    <input
                        type="text"
                        placeholder="Vazifa nomi"
                        value={newAssignment.title}
                        onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                        className="p-2 border rounded flex-grow dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                    <input
                        type="text"
                        placeholder="Tavsif"
                        value={newAssignment.description}
                        onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                        className="p-2 border rounded flex-grow dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                    <input
                        type="date"
                        value={newAssignment.dueDate}
                        onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                        className="p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                    <button onClick={addAssignment} className="p-2 bg-blue-500 text-white rounded flex items-center hover:bg-blue-600">
                        <FaPlus className="mr-2" /> Qo&apos;shish
                    </button>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Mavjud vazifalar</h2>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {assignments.map(assignment => (
                        <li key={assignment.id} className="py-4 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{assignment.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{assignment.description}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Topshirish muddati: {assignment.dueDate}</p>
                            </div>
                            <button onClick={() => deleteAssignment(assignment.id)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                                <FaTrash />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div></DashboardLayout>
    );
};

export default AssignmentCreator;