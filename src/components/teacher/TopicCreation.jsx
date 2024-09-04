import { useState } from 'react';
import DashboardLayout from '@/layouts/common/DashboardLayout';

const TopicCreation = () => {
    const [topicTitle, setTopicTitle] = useState('');
    const [topicDescription, setTopicDescription] = useState('');

    const createTopic = () => {
        console.log('Mavzu yaratildi:', { title: topicTitle, description: topicDescription });
    };

    return (
        <DashboardLayout>
            <div className="p-4">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Mavzu sarlavhasi"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                        value={topicTitle}
                        onChange={(e) => setTopicTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Mavzu tavsifi"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                        value={topicDescription}
                        onChange={(e) => setTopicDescription(e.target.value)}
                    />
                </div>
                <button 
                    onClick={createTopic} 
                    className="mt-4 px-3 py-1 sm:px-4 sm:py-2 bg-primary-light hover:bg-secondary-light text-white rounded-md transition duration-300 ease-in-out dark:bg-primary-dark dark:hover:bg-secondary-dark dark:text-text-dark text-sm sm:text-base"
                >
                    Mavzuni yaratish
                </button>
            </div>
        </DashboardLayout>
    );
};

export default TopicCreation;