import { useState } from 'react';
import { FaPlus, FaTrash, FaEdit, FaPoll } from 'react-icons/fa';
import DashboardLayout from '@/layouts/common/DashboardLayout';

const SurveyManagement = () => {
    const [surveys, setSurveys] = useState([
        { id: 1, title: 'Matematika so\'rovnomasi', teacher: ' Ali', startDate: '2023-10-01T10:00', duration: '60', participants: 10, status: 'Boshlanmagan' },
        { id: 2, title: 'Fizika so\'rovnomasi', teacher: ' Valida', startDate: '2023-10-02T12:00', duration: '45', participants: 5, status: 'Jarayonda' },
        { id: 3, title: 'Kimyo so\'rovnomasi', teacher: 'Otabek', startDate: '2023-10-03T14:00', duration: '30', participants: 8, status: 'Tugallangan' },
    ]);
    const [newSurvey, setNewSurvey] = useState({ title: '', teacher: '', startDate: '', duration: '', participants: 0, status: 'Boshlanmagan' });

    const addSurvey = () => {
        setSurveys([...surveys, { ...newSurvey, id: Date.now() }]);
        setNewSurvey({ title: '', teacher: '', startDate: '', duration: '', participants: 0, status: 'Boshlanmagan' }); // Reset newSurvey
    };

    const deleteSurvey = (id) => {
        setSurveys(surveys.filter(survey => survey.id !== id));
    };

    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-100 dark:bg-gray-900">
                <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">So&apos;rovnomalarni boshqarish</h1>
                <div className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Yangi so&apos;rovnoma qo&apos;shish</h2>
                    <div className="flex flex-wrap gap-4">
                        <input
                            type="text"
                            placeholder="So'rovnoma nomi"
                            value={newSurvey.title}
                            onChange={(e) => setNewSurvey({ ...newSurvey, title: e.target.value })}
                            className="p-2 border rounded flex-grow dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        <input
                            type="text"
                            placeholder="O'qituvchini tanlash"
                            value={newSurvey.teacher}
                            onChange={(e) => setNewSurvey({ ...newSurvey, teacher: e.target.value })}
                            className="p-2 border rounded flex-grow dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        <input
                            type="datetime-local"
                            value={newSurvey.startDate}
                            onChange={(e) => setNewSurvey({ ...newSurvey, startDate: e.target.value })}
                            className="p-2 border rounded flex-grow dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        <input
                            type="text"
                            placeholder="Davomiylik (daqiqa)"
                            value={newSurvey.duration}
                            onChange={(e) => setNewSurvey({ ...newSurvey, duration: e.target.value })}
                            className="p-2 border rounded flex-grow dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        <button onClick={addSurvey} className="p-2 bg-blue-500 text-white rounded flex items-center hover:bg-blue-600">
                            <FaPlus className="mr-2" /> Qo&apos;shish
                        </button>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Mavjud so&apos;rovnomalar</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {surveys.map(survey => (
                            <li key={survey.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                                <div className="flex items-center">
                                    <FaPoll className="text-blue-500 mr-3" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{survey.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{survey.teacher}</p>
                                        <p className="text-gray-500 dark:text-gray-400">Boshlanish vaqti: {new Date(survey.startDate).toLocaleString()}</p>
                                        <p className="text-gray-500 dark:text-gray-400">Ishtirokchilar: {survey.participants}</p>
                                        <p className="text-gray-500 dark:text-gray-400">Status: {survey.status}</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <button className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => deleteSurvey(survey.id)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
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

export default SurveyManagement;