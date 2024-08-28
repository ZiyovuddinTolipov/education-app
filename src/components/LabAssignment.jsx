import { useState } from 'react';
import { MdSave, MdAssignment } from 'react-icons/md';

const LabAssignment = () => {
    const [labTitle, setLabTitle] = useState('');
    const [labDescription, setLabDescription] = useState('');

    const submitLab = () => {
        console.log('Laboratoriya vazifasi yuborildi:', { title: labTitle, description: labDescription });
    };

    return (
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-primary-light dark:text-primary-dark">
                <MdAssignment className="mr-2" />
                Laboratoriya vazifasi qo&apos;shish
            </h2>
            <input 
                type="text" 
                value={labTitle} 
                onChange={(e) => setLabTitle(e.target.value)} 
                placeholder="Laboratoriya nomi"
                className="w-full mb-2 p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <textarea 
                value={labDescription} 
                onChange={(e) => setLabDescription(e.target.value)} 
                placeholder="Laboratoriya tavsifi"
                className="w-full mb-2 p-2 border rounded h-32 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <button 
                onClick={submitLab}
                className="bg-primary-light dark:bg-primary-dark text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors flex items-center"
            >
                <MdSave className="mr-2" />
                Vazifani saqlash
            </button>
        </div>
    );
};

export default LabAssignment;