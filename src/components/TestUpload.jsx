import { useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';

const TestUpload = () => {
    const [testFile, setTestFile] = useState(null);

    const handleFileChange = (e) => {
        setTestFile(e.target.files[0]);
    };

    const uploadTest = () => {
        if (testFile) {
            console.log('Test fayli yuklandi:', testFile.name);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-primary-light dark:text-primary-dark">
                <MdCloudUpload className="mr-2" />
                Test yuklash
            </h2>
            <input 
                type="file" 
                onChange={handleFileChange}
                className="mb-2 p-2 border rounded w-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            />
            <button 
                onClick={uploadTest} 
                disabled={!testFile}
                className={`px-4 py-2 rounded flex items-center ${testFile ? 'bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark hover:bg-secondary-light dark:hover:bg-secondary-dark' : 'bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark'}`}
            >
                <MdCloudUpload className="mr-2" />
                Testni yuklash
            </button>
        </div>
    );
};

export default TestUpload;