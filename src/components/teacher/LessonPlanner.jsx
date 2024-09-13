import { useState, useEffect } from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
import DashboardLayout from '@/layouts/common/DashboardLayout';
import { lessonsData } from '@/data/data'; // Darslar ma'lumotlarini import qilish

const LessonPlanner = () => {
    const [lessons, setLessons] = useState([]);
    const [newLesson, setNewLesson] = useState({ title: '', date: '', description: '' });
    const [selectedWeek, setSelectedWeek] = useState('current'); // Haftani tanlash

    useEffect(() => {
        // Darslar ma'lumotlarini o'rnatish
        setLessons(lessonsData);
    }, []);

    const addLesson = () => {
        setLessons([...lessons, { ...newLesson, id: Date.now() }]);
        setNewLesson({ title: '', date: '', description: '' });
    };

    const deleteLesson = (id) => {
        setLessons(lessons.filter(lesson => lesson.id !== id));
    };

    const handleWeekChange = (event) => {
        setSelectedWeek(event.target.value);
    };

    // Haftaning kunlari
    const getWeekDays = (startDate) => {
        const days = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            days.push(date);
        }
        return days;
    };

    const getLessonsForDay = (date) => {
        return lessons.filter(lesson => new Date(lesson.date).toDateString() === date.toDateString());
    };

    const currentDate = new Date();
    const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
    const weekDays = getWeekDays(startOfWeek);

    return (
        <DashboardLayout>
            <div className="p-6 bg-background-light dark:bg-background-dark">
                <h1 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Dars rejalashtirish</h1>
                
                <select value={selectedWeek} onChange={handleWeekChange} className="mb-4 p-2 border rounded dark:border-gray-600">
                    <option value="current">Hozirgi hafta</option>
                    <option value="next">Kelgusi hafta</option>
                    <option value="last">O&apos;tgan hafta</option>
                </select>

                <div className="mb-6 bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Yangi dars qo&apos;shish</h2>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {weekDays.map((day, index) => {
                        const lessonsForDay = getLessonsForDay(day);
                        return (
                            <div key={index} className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">{day.toLocaleDateString()} - {day.toLocaleString('uz-UZ', { weekday: 'long' })}</h3>
                                {lessonsForDay.length > 0 ? (
                                    lessonsForDay.map(lesson => (
                                        <div key={lesson.id} className="mt-2">
                                            <p className="text-gray-600 dark:text-gray-300">{lesson.title}: {lesson.description}</p>
                                            <div className="mt-2 flex justify-between">
                                                <button className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                                    <FaEdit />
                                                </button>
                                                <button onClick={() => deleteLesson(lesson.id)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-red-500">Dars yo&apos;q</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default LessonPlanner;
