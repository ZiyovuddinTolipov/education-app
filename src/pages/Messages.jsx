import { useState, useEffect } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { FaEnvelope, FaEnvelopeOpen, FaReply, FaTrash } from 'react-icons/fa';
import AOS from 'aos';
import MessageSkeleton from '@/components/MessageSkeleton';
import { messagesData } from '@/data/data';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [reply, setReply] = useState('');
    const [loading, setLoading] = useState(true);
    const [isMobileMessageListVisible, setIsMobileMessageListVisible] = useState(true);

    useEffect(() => {
        const fetchMessages = async () => {
            setLoading(true);
            try {
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                setMessages(messagesData);
            } catch (error) {
                console.error('Xabarlarni yuklashda xatolik:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [selectedMessage]);

    const handleMessageClick = (message) => {
        setSelectedMessage(message);
        if (message.unread) {
            setMessages(prevMessages =>
                prevMessages.map(m => m.id === message.id ? { ...m, unread: false } : m)
            );
        }
        setIsMobileMessageListVisible(false);
    };

    const handleBackToList = () => {
        setIsMobileMessageListVisible(true);
        setSelectedMessage(null);
    };
    const handleReply = () => {
        console.log('Javob yuborildi:', reply);
        setReply('');
    };

    return (
        <DashboardLayout>
            <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] h-auto pb-10 bg-background-light dark:bg-background-dark rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
                <div className={`w-full md:w-1/3 bg-surface-light dark:bg-surface-dark border-b md:border-r border-accent-light dark:border-accent-dark ${isMobileMessageListVisible ? 'block' : 'hidden md:block'} flex flex-col`}>
                    <h2 className="text-xl font-bold p-4 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark" data-aos="fade-right">Xabarlar</h2>
                    <div className="overflow-y-auto flex-grow">
                        {loading ? (
                            Array(5).fill().map((_, index) => <MessageSkeleton key={index} />)
                        ) : (
                            messages.map((message, index) => (
                                <div
                                    key={message.id}
                                    className={`p-4 border-b border-surface-300 dark:border-surface-400 cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-300 transition duration-150 ease-in-out ${message.unread ? 'bg-primary-100 dark:bg-primary-200' : 'bg-white dark:bg-surface-200'
                                        } ${selectedMessage?.id === message.id ? 'bg-primary-200 dark:bg-primary-300' : ''}`}
                                    onClick={() => handleMessageClick(message)}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 70}
                                >
                                    <div className="flex items-center">
                                        {message.unread ?
                                            <FaEnvelope className="text-primary-400 dark:text-primary-300 mr-2" /> :
                                            <FaEnvelopeOpen className="text-surface-500 dark:text-surface-400 mr-2" />
                                        }
                                        <div>
                                            <div className={`font-semibold ${message.unread ? 'text-surface-700 dark:text-surface-100' : 'text-surface-600 dark:text-surface-300'}`}>
                                                {message.sender}
                                            </div>
                                            <div className="text-sm text-surface-500 dark:text-surface-400">{message.subject}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className={`w-full md:w-2/3 bg-background-light dark:bg-background-dark p-6 ${isMobileMessageListVisible ? 'hidden md:block' : 'block'}`}>
                    {!isMobileMessageListVisible && (
                        <button
                            className="mb-4 px-4 py-2 bg-surface-200 dark:bg-surface-300 text-surface-700 dark:text-surface-100 rounded-md hover:bg-surface-300 dark:hover:bg-surface-400 transition duration-200 ease-in-out md:hidden"
                            onClick={handleBackToList}
                        >
                            &larr; Xabarlarga qaytish
                        </button>
                    )}
                    {loading ? (
                        <div className="animate-pulse">
                            <div className="h-8 bg-surface-300 dark:bg-surface-400 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-surface-300 dark:bg-surface-400 rounded w-full mb-2"></div>
                            <div className="h-4 bg-surface-300 dark:bg-surface-400 rounded w-full mb-2"></div>
                            <div className="h-4 bg-surface-300 dark:bg-surface-400 rounded w-3/4"></div>
                        </div>
                    ) : selectedMessage ? (
                        <>
                            <div className="bg-white dark:bg-surface-200 rounded-lg shadow-md p-6 mb-6" data-aos="fade-left">
                                <h3 className="text-2xl font-bold mb-2 text-primary-400 dark:text-primary-300">{selectedMessage.subject}</h3>
                                <p className="text-surface-500 dark:text-surface-400 mb-4">{`Kimdan: ${selectedMessage.sender}`}</p>
                                <div
                                    className="text-surface-700 dark:text-surface-100 mb-6 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: selectedMessage.content }}
                                />
                            </div>
                            <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
                                <h4 className="text-xl font-semibold mb-4 text-primary-light dark:text-primary-dark">Javob yozish</h4>
                                <ReactQuill
                                    theme="snow"
                                    value={reply}
                                    onChange={setReply}
                                    className="bg-white dark:bg-gray-800 text-text-light dark:text-text-dark mb-4 quill-dark"
                                />
                                <div className="mt-4 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
                                    <button
                                        className="px-6 py-2 bg-gradient-light dark:bg-gradient-dark text-white rounded-md hover:opacity-90 transition duration-200 ease-in-out flex items-center justify-center"
                                        onClick={handleReply}
                                    >
                                        <FaReply className="mr-2" /> Javob berish
                                    </button>
                                    <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 ease-in-out flex items-center justify-center">
                                        <FaTrash className="mr-2" /> O&apos;chirish
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-gray-500 dark:text-gray-400 mt-10" data-aos="fade-up">Xabar tanlang</p>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Messages;