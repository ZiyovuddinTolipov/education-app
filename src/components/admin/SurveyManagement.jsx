import { useState } from 'react';
import { FaPlus, FaTrash, FaEdit, FaPoll } from 'react-icons/fa';
import DashboardLayout from '@/layouts/common/DashboardLayout';

const SurveyManagement = () => {
    const [surveys, setSurveys] = useState([]);
    const [newSurvey, setNewSurvey] = useState({ title: '', description: '' });

    const addSurvey = () => {
        setSurveys([...surveys, { ...newSurvey, id: Date.now() }]);
        setNewSurvey({ title: '', description: '' });
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
                            placeholder="Tavsif"
                            value={newSurvey.description}
                            onChange={(e) => setNewSurvey({ ...newSurvey, description: e.target.value })}
                            className="p-2 border rounded flex-grow dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        <button onClick={addSurvey} className="p-2 bg-blue-500 text-white rounded flex items-center hover:bg-blue-600">
                            <FaPlus className="mr-2" /> Qo&apos;shish
                        </button>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Mavjud so&apos;rovnomalar</h2>
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {surveys.map(survey => (
                            <li key={survey.id} className="py-4 flex justify-between items-center">
                                <div className="flex items-center">
                                    <FaPoll className="text-blue-500 mr-3" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{survey.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{survey.description}</p>
                                    </div>
                                </div>
                                <div>
                                <button className="p-2 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600">
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