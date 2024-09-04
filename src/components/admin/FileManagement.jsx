import { useState } from 'react';
import { FaFile, FaTrash, FaDownload, FaUpload } from 'react-icons/fa';

const FileManagement = () => {
    const [files, setFiles] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFiles([...files, { id: Date.now(), name: file.name, size: file.size, type: file.type }]);
        }
    };

    const deleteFile = (id) => {
        setFiles(files.filter(file => file.id !== id));
    };

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Fayllarni boshqarish</h1>
            <div className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Fayl yuklash</h2>
                <div className="flex items-center">
                    <label className="flex items-center px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
                        <FaUpload className="mr-2" />
                        Fayl tanlash
                        <input type="file" className="hidden" onChange={handleFileUpload} />
                    </label>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Mavjud fayllar</h2>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {files.map(file => (
                        <li key={file.id} className="py-4 flex justify-between items-center">
                            <div className="flex items-center">
                                <FaFile className="text-gray-500 dark:text-gray-400 mr-3" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{file.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                            </div>
                            <div>
                                <button className="p-2 bg-green-500 text-white rounded mr-2 hover:bg-green-600">
                                    <FaDownload />
                                </button>
                                <button onClick={() => deleteFile(file.id)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
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

export default FileManagement;