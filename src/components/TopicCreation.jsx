import { useState } from 'react';
import { MdSave, MdTopic, MdAttachFile } from 'react-icons/md';

const TopicCreation = () => {
    const [topicTitle, setTopicTitle] = useState('');
    const [pdfFile, setPdfFile] = useState(null);
    const [practicalTask, setPracticalTask] = useState('');
    const [test, setTest] = useState('');

    const handlePdfChange = (e) => {
        setPdfFile(e.target.files[0]);
    };

    const createTopic = () => {
        console.log('Mavzu yaratildi:', { 
            title: topicTitle, 
            pdf: pdfFile, 
            practicalTask, 
            test 
        });
    };

    return (
        <div className="max-w-2xl mx-auto bg-white dark:bg-card-dark p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-primary-light dark:text-primary-dark">
                <MdTopic className="mr-2" />
                Mavzu yaratish
            </h2>
            <input 
                type="text" 
                value={topicTitle} 
                onChange={(e) => setTopicTitle(e.target.value)} 
                placeholder="Mavzu nomi"
                className="w-full mb-2 p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <div className="mb-2 flex items-center">
                <MdAttachFile className="mr-2 text-primary-light dark:text-primary-dark" />
                <input 
                    type="file" 
                    onChange={handlePdfChange} 
                    accept=".pdf"
                    className="p-2 border rounded flex-grow bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
            </div>
            <textarea 
                value={practicalTask} 
                onChange={(e) => setPracticalTask(e.target.value)} 
                placeholder="Amaliy vazifa"
                className="w-full mb-2 p-2 border rounded h-32 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <textarea 
                value={test} 
                onChange={(e) => setTest(e.target.value)} 
                placeholder="Test savollari"
                className="w-full mb-2 p-2 border rounded h-32 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <button 
                onClick={createTopic}
                className="bg-primary-light dark:bg-primary-dark text-white px-4 py-2 rounded hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors flex items-center"
            >
                <MdSave className="mr-2" />
                Mavzuni saqlash
            </button>
        </div>
    );
};

export default TopicCreation;