/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

const TestManagement = () => {
    const [tests, setTests] = useState([]);
    const [newTest, setNewTest] = useState({ title: '', type: '', difficulty: '' });

    const addTest = () => {
        setTests([...tests, { ...newTest, id: Date.now() }]);
        setNewTest({ title: '', type: '', difficulty: '' });
    };

    const deleteTest = (id) => {
        setTests(tests.filter(test => test.id !== id));
    };

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Testlarni boshqarish</h1>
            <div className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Yangi test qo'shish</h2>
                <div className="flex flex-wrap gap-4">
                    <input
                        type="text"
                        placeholder="Test nomi"
                        value={newTest.title}
                        onChange={(e) => setNewTest({ ...newTest, title: e.target.value })}
                        className="p-2 border rounded flex-grow dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                    <select
                        value={newTest.type}
                        onChange={(e) => setNewTest({ ...newTest, type: e.target.value })}
                        className="p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    >
                        <option value="">Test turini tanlang</option>
                        <option value="multiple">Ko'p tanlovli</option>
                        <option value="truefalse">To'g'ri/Noto'g'ri</option>
                        <option value="short">Qisqa javob</option>
                    </select>
                    <select
                        value={newTest.difficulty}
                        onChange={(e) => setNewTest({ ...newTest, difficulty: e.target.value })}
                        className="p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    >
                        <option value="">Qiyinlik darajasini tanlang</option>
                        <option value="easy">Oson</option>
                        <option value="medium">O'rta</option>
                        <option value="hard">Qiyin</option>
                    </select>
                    <button onClick={addTest} className="p-2 bg-blue-500 text-white rounded flex items-center hover:bg-blue-600">
                        <FaPlus className="mr-2" /> Test qo'shish
                    </button>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Mavjud testlar</h2>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {tests.map(test => (
                        <li key={test.id} className="py-4 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{test.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{test.type} - {test.difficulty}</p>
                            </div>
                            <div>
                                <button className="p-2 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600">
                                    <FaEdit />
                                </button>
                                <button onClick={() => deleteTest(test.id)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                                    <FaTrash />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TestManagement;