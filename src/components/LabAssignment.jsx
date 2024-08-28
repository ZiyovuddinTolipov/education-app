import { useState } from 'react';
import { MdSave, MdAssignment } from 'react-icons/md';

const LabAssignment = () => {
    const [labTitle, setLabTitle] = useState('');
    const [labDescription, setLabDescription] = useState('');

    const submitLab = () => {
        console.log('Laboratoriya vazifasi yuborildi:', { title: labTitle, description: labDescription });
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MdAssignment className="mr-2" />
                Laboratoriya vazifasi qo&apos;shish
            </h2>
            <input 
                type="text" 
                value={labTitle} 
                onChange={(e) => setLabTitle(e.target.value)} 
                placeholder="Laboratoriya nomi"
                className="w-full mb-2 p-2 border rounded"
            />
            <textarea 
                value={labDescription} 
                onChange={(e) => setLabDescription(e.target.value)} 
                placeholder="Laboratoriya tavsifi"
                className="w-full mb-2 p-2 border rounded h-32"
            />
            <button 
                onClick={submitLab}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center"
            >
                <MdSave className="mr-2" />
                Vazifani saqlash
            </button>
        </div>
    );
};

export default LabAssignment;