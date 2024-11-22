/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { FaPlus, FaTrash, FaEdit, FaUpload } from 'react-icons/fa';
import DashboardLayout from '@/layouts/common/DashboardLayout';
import { useDropzone } from 'react-dropzone'; // Import the useDropzone hook

const TestManagement = () => {
    const [tests, setTests] = useState([
        {
            "title": "Elektronika",
            "type": "multiple",
            "difficulty": "easy",
            "id": 1727414141124,
            "file": null,
            "createdAt": new Date().toLocaleString() // Yaratilgan sana
        }
    ]);
    const [newTest, setNewTest] = useState({ title: '', type: '', difficulty: '' });
    const [file, setFile] = useState(null);

    const addTest = (e) => {
        e.preventDefault(); // Sahifani yangilanishini oldini olish
        const newTestWithDate = { ...newTest, id: Date.now(), file, createdAt: new Date().toLocaleString() }; // Yaratilgan sanani qo'shish
        setTests([...tests, newTestWithDate]);
        setNewTest({ title: '', type: '', difficulty: '' });
        setFile(null);
    };

    const deleteTest = (id) => {
        setTests(tests.filter(test => test.id !== id));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = () => {
        if (file) {
            console.log("Yuklangan fayl:", file);
            // Faylni yuklash logikasini qo'shish
            setFile(null);
        }
    };

    const onDrop = (acceptedFiles) => {
        setFile(acceptedFiles[0]); // Accept the first file dropped
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <DashboardLayout>
            <div className="p-4 md:p-6 bg-background-light dark:bg-background-dark">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-text-light dark:text-text-dark">Testlarni boshqarish</h1>
                <div className="mb-6 bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg md:text-xl font-semibold mb-4 text-text-light dark:text-text-dark">Yangi test qo'shish</h2>
                    <form className="space-y-4" onSubmit={addTest}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Test nomi"
                                value={newTest.title}
                                onChange={(e) => setNewTest({ ...newTest, title: e.target.value })}
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                            <select
                                value={newTest.type}
                                onChange={(e) => setNewTest({ ...newTest, type: e.target.value })}
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            >
                                <option value="">Test turini tanlang</option>
                                <option value="multiple">Ko'p tanlovli</option>
                                <option value="truefalse">To'g'ri/Noto'g'ri</option>
                                <option value="short">Qisqa javob</option>
                            </select>
                            <select
                                value={newTest.difficulty}
                                onChange={(e) => setNewTest({ ...newTest, difficulty: e.target.value })}
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            >
                                <option value="">Qiyinlik darajasini tanlang</option>
                                <option value="easy">Oson</option>
                                <option value="medium">O'rta</option>
                                <option value="hard">Qiyin</option>
                            </select>
                            <div {...getRootProps({ className: 'p-3 border border-dashed border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 flex items-center justify-center max-w-sm w-full' })}>
                                <input {...getInputProps()} />
                                <p className="text-center flex items-center">
                                    <FaUpload className="mr-2" />
                                    {file ? file.name : 'Fayl yuklash'}
                                </p>
                            </div>
                            <button type="submit" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center whitespace-nowrap">
                                <FaPlus className="mr-2" /> Test qo'shish
                            </button>
                        </div>
                    </form>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-white">Mavjud testlar</h2>
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {tests.map(test => (
                            <li key={test.id} className="py-4 flex flex-col md:flex-row justify-between items-center">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{test.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{test.type} - {test.difficulty}</p>
                                    <p className="text-gray-500 dark:text-gray-400">Yaratilgan sana: {test.createdAt}</p>
                                </div>
                                <div className="flex items-center mt-2 md:mt-0">
                                    {test.file && (
                                        <a href={URL.createObjectURL(test.file)} download className="p-2 bg-green-500 text-white rounded-lg mr-2 hover:bg-green-600 transition duration-200">
                                            Yuklab olish
                                        </a>
                                    )}
                                    <button className="p-2 bg-yellow-500 text-white rounded-lg mr-2 hover:bg-yellow-600 transition duration-200">
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => deleteTest(test.id)} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
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

export default TestManagement;