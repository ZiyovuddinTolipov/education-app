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
        <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MdTopic className="mr-2" />
                Mavzu yaratish
            </h2>
            <input 
                type="text" 
                value={topicTitle} 
                onChange={(e) => setTopicTitle(e.target.value)} 
                placeholder="Mavzu nomi"
                className="w-full mb-2 p-2 border rounded"
            />
            <div className="mb-2 flex items-center">
                <MdAttachFile className="mr-2" />
                <input 
                    type="file" 
                    onChange={handlePdfChange} 
                    accept=".pdf"
                    className="p-2 border rounded flex-grow"
                />
            </div>
            <textarea 
                value={practicalTask} 
                onChange={(e) => setPracticalTask(e.target.value)} 
                placeholder="Amaliy vazifa"
                className="w-full mb-2 p-2 border rounded h-32"
            />
            <textarea 
                value={test} 
                onChange={(e) => setTest(e.target.value)} 
                placeholder="Test savollari"
                className="w-full mb-2 p-2 border rounded h-32"
            />
            <button 
                onClick={createTopic}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center"
            >
                <MdSave className="mr-2" />
                Mavzuni saqlash
            </button>
        </div>
    );
};

export default TopicCreation;