import { useState } from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
import DashboardLayout from '@/layouts/common/DashboardLayout';

const LessonPlanner = () => {
    const [lessons, setLessons] = useState([]);
    const [newLesson, setNewLesson] = useState({ title: '', date: '', description: '' });

    const addLesson = () => {
        setLessons([...lessons, { ...newLesson, id: Date.now() }]);
        setNewLesson({ title: '', date: '', description: '' });
    };

    const deleteLesson = (id) => {
        setLessons(lessons.filter(lesson => lesson.id !== id));
    };

    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-100 dark:bg-gray-900">
                <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Dars rejalashtirish</h1>
                <div className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Yangi dars qo&apos;shish</h2>
                    <div className="flex flex-wrap gap-4">
                        <input
                            type="text"
                            placeholder="Dars nomi"
                            value={newLesson.title}
                            onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
                            className="p-2 border rounded flex-grow dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        <input
                            type="date"
                            value={newLesson.date}
                            onChange={(e) => setNewLesson({ ...newLesson, date: e.target.value })}
                            className="p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        <input
                            type="text"
                            placeholder="Tavsif"
                            value={newLesson.description}
                            onChange={(e) => setNewLesson({ ...newLesson, description: e.target.value })}
                            className="p-2 border rounded flex-grow dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        <button onClick={addLesson} className="p-2 bg-blue-500 text-white rounded flex items-center hover:bg-blue-600">
                            <FaPlus className="mr-2" /> Qo&apos;shish
                        </button>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Rejalashtirilgan darslar</h2>
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {lessons.map(lesson => (
                            <li key={lesson.id} className="py-4 flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{lesson.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{lesson.date} - {lesson.description}</p>
                                </div>
                                <div>
                                    <button className="p-2 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600">
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => deleteLesson(lesson.id)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                                        <FaTrash />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default LessonPlanner;
