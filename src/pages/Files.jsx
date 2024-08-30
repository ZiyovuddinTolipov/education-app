import  { useState, useEffect } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DashboardLayout from '../layouts/DashboardLayout';

const Files = () => {
    const [documents, setDocuments] = useState([
        { id: 1, name: 'Hujjat 1', description: 'Birinchi hujjat haqida ma\'lumot', downloadUrl: '#', category: 'Dars jadvali' },
        { id: 2, name: 'Hujjat 2', description: 'Ikkinchi hujjat haqida ma\'lumot', downloadUrl: '#', category: 'Imtihon natijalari' },
        { id: 3, name: 'Hujjat 3', description: 'Uchinchi hujjat haqida ma\'lumot', downloadUrl: '#', category: 'O\'quv dasturi' },
        { id: 4, name: 'Hujjat 4', description: 'To\'rtinchi hujjat haqida ma\'lumot', downloadUrl: '#', category: 'Dars jadvali' },
        { id: 5, name: 'Hujjat 5', description: 'Beshinchi hujjat haqida ma\'lumot', downloadUrl: '#', category: 'Imtihon natijalari' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const filteredDocuments = documents.filter(doc => 
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterCategory === '' || doc.category === filterCategory)
    );

    const uniqueCategories = [...new Set(documents.map(doc => doc.category))];

    return (
        <DashboardLayout>
            <div className="container mx-auto p-4 bg-surface-light dark:bg-surface-dark">
                <h1 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">Hujjatlar</h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Qidirish..."
                                className="w-full sm:w-auto pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light dark:text-text-dark" />
                        </div>
                        
                        <div className="relative">
                            <select
                                className="w-full sm:w-auto pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark appearance-none bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                            >
                                <option value="">Barcha kategoriyalar</option>
                                {uniqueCategories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light dark:text-text-dark" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredDocuments.map((doc, index) => (
                        <div key={doc.id} className="bg-background-light dark:bg-background-dark shadow-md rounded-lg p-4" data-aos="fade-up" data-aos-delay={index * 100}>
                            <h2 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{doc.name}</h2>
                            <p className="text-text-light dark:text-text-dark opacity-70 mb-2">{doc.description}</p>
                            <p className="text-primary-light dark:text-primary-dark mb-4">{doc.category}</p>
                            <a
                                href={doc.downloadUrl}
                                className="bg-primary-light dark:bg-primary-dark text-white dark:text-text-dark py-2 px-4 rounded hover:bg-opacity-80 transition duration-300 inline-block"
                                download
                            >
                                Yuklab olish
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Files;
