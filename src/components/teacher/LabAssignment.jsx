import { useState } from 'react';
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
        <div className="p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Laboratoriya vazifasi sarlavhasi"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                    value={labTitle}
                    onChange={(e) => setLabTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <ReactQuill
                    value={labDescription}
                    onChange={setLabDescription}
                    modules={modules}
                    formats={formats}
                    className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                />
            </div>
            <div className="mb-4">
                <input
                    type="file"
                    onChange={(e) => setLabFile(e.target.files[0])}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                />
            </div>
            <button
                onClick={submitLab}
                className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark rounded hover:bg-secondary-light dark:hover:bg-secondary-dark"
            >
                Yuborish
            </button>
        </div>
    );
};

export default LabAssignment;