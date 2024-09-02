import { useState } from 'react';
import { MdSave, MdAssignment } from 'react-icons/md';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const LabAssignment = () => {
    const [labTitle, setLabTitle] = useState('');
    const [labDescription, setLabDescription] = useState('');
    const [labFile, setLabFile] = useState(null);

    const submitLab = () => {
        console.log('Laboratoriya vazifasi yuborildi:', { title: labTitle, description: labDescription, file: labFile });
    };

    const modules = {
        toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean'],
            [{ 'code-block': true }]
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video', 'code-block'
    ];

    return (
        <div className="max-w-2xl bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-primary-light dark:text-primary-dark">
                <MdAssignment className="mr-2" />
                Laboratoriya vazifasi qo&apos;shish
            </h2>
            <input 
                type="text" 
                value={labTitle} 
                onChange={(e) => setLabTitle(e.target.value)} 
                placeholder="Laboratoriya nomi"
                className="w-full mb-2 p-2 border rounded bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            />
            <ReactQuill 
                value={labDescription} 
                onChange={setLabDescription} 
                placeholder="Laboratoriya tavsifi"
                modules={modules}
                formats={formats}
                className="w-full mb-2 p-2 border rounded bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            />
            <input 
                type="file" 
                onChange={(e) => setLabFile(e.target.files[0])} 
                className="w-full mb-2 p-2 border rounded bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            />
            <button 
                onClick={submitLab}
                className="bg-primary-light dark:bg-primary-dark text-text-dark dark:text-text-light px-4 py-2 rounded hover:bg-accent-light dark:hover:bg-accent-dark transition-colors flex items-center"
            >
                <MdSave className="mr-2" />
                Vazifani saqlash
            </button>
        </div>
    );
};

export default LabAssignment;