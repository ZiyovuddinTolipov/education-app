import React from 'react';
import { FaFileAlt, FaFilePdf, FaFileWord, FaFileExcel, FaFileArchive, FaFile, FaDownload } from 'react-icons/fa';
import { filesData } from '../data/data';
import DashboardLayout from '../layouts/DashboardLayout';

const getFileIcon = (category) => {
    switch (category) {
        case 'Dars jadvali':
        case 'Sport':
        case 'Til o\'rganish':
            return FaFileExcel;
        case 'O\'quv jarayoni':
        case 'Ilmiy faoliyat':
        case 'Magistratura':
            return FaFilePdf;
        case 'Stipendiya':
        case 'Amaliyot':
            return FaFileArchive;
        case 'Madaniy tadbirlar':
        case 'Onlayn ta\'lim':
        case 'Xalqaro aloqalar':
            return FaFileWord;
        default:
            return FaFile;
    }
};

const Files = () => {
    return (
        <DashboardLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-text-light dark:text-text-dark">Hujjatlar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filesData.map((file) => {
                    const FileIcon = getFileIcon(file.category);
                    return (
                        <div key={file.id} className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                            <div className="p-6">
                                <FileIcon className="text-5xl text-primary-light dark:text-primary-dark mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{file.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{file.description}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Kategoriya: {file.category}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Yaratilgan sana: {new Date(file.createdAt).toLocaleDateString()}</p>
                                <a
                                    href={file.downloadUrl}
                                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-secondary-light dark:bg-secondary-dark text-white rounded-md hover:bg-opacity-90 transition-colors duration-300"
                                >
                                    <FaDownload className="mr-2" /> Yuklab olish
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </DashboardLayout>
    );
};

export default Files;
