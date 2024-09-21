import { useState } from 'react';
import { FaFileUpload, FaEye, FaCheckCircle, FaClock } from 'react-icons/fa'; // Importing icons
import {sampleData} from '../../data/data'; // Adjust the path as necessary

const IndependentWorkCards = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedWork, setSelectedWork] = useState(null);

    const openModal = (work) => {
        setSelectedWork(work);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedWork(null);
    };

    const handleFileSubmit = (e) => {
        e.preventDefault();
        // Handle file submission logic here
        closeModal();
    };

    return (
        <div className="grid grid-cols-1 gap-6">
            {sampleData.map((work) => (
                <div key={work.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ">
                    <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                        <FaCheckCircle className="mr-2 text-green-500" /> {work.title}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center">
                        <FaClock className="mr-1" /> Due Date: <span className="font-medium">{work.dueDate}</span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">Subject: <span className="font-medium">{work.subject}</span></p>
                    <p className="text-gray-600 dark:text-gray-400">Teacher: <span className="font-medium">{work.teacher}</span></p>
                    <p className="text-gray-600 dark:text-gray-400">Points: <span className="font-medium">{work.points}</span></p>
                    <div className="mt-2">
                        <span className={`inline-block rounded-full px-2 py-1 text-sm ${work.status === "Bajarildi" ? "bg-green-500 text-white" : work.status === "Berildi" ? "bg-blue-500 text-white" : work.status === "Berilmagan" ? "bg-yellow-500 text-white" : "bg-gray-500 text-white"}`}>
                            {work.status}
                        </span>
                    </div>
                    <div className='flex flex-row space-x-2 mt-4'>
                        {work.status === "Berildi" && (
                            <button onClick={() => openModal(work)} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center transition duration-200">
                                <FaFileUpload className="mr-2" /> Submit Assignment
                            </button>
                        )}
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded flex items-center transition duration-200">
                            <FaEye className="mr-2" /> View Details
                        </button>
                    </div>
                </div>
            ))}

            {/* Modal for file submission */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-semibold mb-4">Submit Assignment for {selectedWork?.title}</h2>
                        <form onSubmit={handleFileSubmit}>
                            <input type="file" className="mb-4 border border-gray-300 rounded p-2" required />
                            <div className="flex justify-between">
                                <button type="button" onClick={closeModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded">Cancel</button>
                                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default IndependentWorkCards;