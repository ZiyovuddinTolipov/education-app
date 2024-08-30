import { useState, useMemo } from 'react';
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileArchive, FaFile, FaDownload, FaFilter } from 'react-icons/fa';
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
    const [filter, setFilter] = useState('');
    const [showFilterMenu, setShowFilterMenu] = useState(false);

    const categories = useMemo(() => {
        return ['Barchasi', ...new Set(filesData.map(file => file.category))];
    }, []);

    const filteredFiles = useMemo(() => {
        return filter && filter !== 'Barchasi'
            ? filesData.filter(file => file.category === filter)
            : filesData;
    }, [filter]);

    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">Hujjatlar</h2>
                    <div className="relative">
                        <button
                            onClick={() => setShowFilterMenu(!showFilterMenu)}
                            className="flex items-center px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-md hover:bg-opacity-90 transition-colors duration-300"
                        >
                            <FaFilter className="mr-2" /> Filter
                        </button>
                        {showFilterMenu && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
                                <ul className="py-1">
                                    {categories.map(category => (
                                        <li key={category}>
                                            <button
                                                onClick={() => { setFilter(category); setShowFilterMenu(false); }}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                {category}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFiles.map((file) => {
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
