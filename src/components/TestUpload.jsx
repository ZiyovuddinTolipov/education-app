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
        <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MdCloudUpload className="mr-2" />
                Test yuklash
            </h2>
            <input 
                type="file" 
                onChange={handleFileChange}
                className="mb-2 p-2 border rounded w-full"
            />
            <button 
                onClick={uploadTest} 
                disabled={!testFile}
                className={`px-4 py-2 rounded flex items-center ${testFile ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500'}`}
            >
                <MdCloudUpload className="mr-2" />
                Testni yuklash
            </button>
        </div>
    );
};

export default TestUpload;