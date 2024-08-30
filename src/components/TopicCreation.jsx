import { useState } from 'react';
import {  MdTopic, MdAttachFile } from 'react-icons/md';

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
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-primary-light dark:text-primary-dark">
                <MdTopic className="mr-2" />
                Mavzu yaratish
            </h2>
            <input 
                type="text" 
                value={topicTitle} 
                onChange={(e) => setTopicTitle(e.target.value)} 
                placeholder="Mavzu nomi"
                className="w-full mb-2 p-2 border rounded bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            />
            <div className="mb-2 flex items-center">
                <MdAttachFile className="mr-2 text-primary-light dark:text-primary-dark" />
                <input 
                    type="file" 
                    onChange={handlePdfChange} 
                    accept=".pdf"
                    className="p-2 border rounded flex-grow bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                />
            </div>
            <textarea 
                value={practicalTask} 
                onChange={(e) => setPracticalTask(e.target.value)} 
                placeholder="Amaliy vazifa"
                className="w-full mb-2 p-2 border rounded h-32 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            />
            <textarea 
                value={test} 
                onChange={(e) => setTest(e.target.value)} 
                placeholder="Test savollari"
                className="w-full mb-2 p-2 border rounded h-32 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            />
            <button 
                className="mt-4 px-4 py-2 bg-primary-light hover:bg-secondary-light text-text-light rounded-md transition duration-300 ease-in-out dark:bg-primary-dark dark:hover:bg-secondary-dark dark:text-text-dark"
                onClick={createTopic}
            >
                Mavzuni yaratish
            </button>
        </div>
    );
};

export default TopicCreation;