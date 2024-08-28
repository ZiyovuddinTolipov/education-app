import { useState, useEffect } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { FaEnvelope, FaEnvelopeOpen, FaReply, FaTrash } from 'react-icons/fa';
import AOS from 'aos';
import MessageSkeleton from '@/components/MessageSkeleton';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [reply, setReply] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ma'lumotlarni yuklash simulyatsiyasi
        setTimeout(() => {
            setMessages([
                { id: 1, sender: 'John Doe', subject: 'Dars haqida', content: 'Salom, ertangi dars haqida...', unread: true },
                { id: 2, sender: 'Jane Smith', subject: 'Imtihon natijalari', content: "Hurmatli o'qituvchi, imtihon...", unread: false },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [selectedMessage]);

    const handleMessageClick = (message) => {
        setSelectedMessage(message);
        if (message.unread) {
            setMessages(messages.map(m => m.id === message.id ? {...m, unread: false} : m));
        }
    };

    const handleReply = () => {
        console.log('Javob yuborildi:', reply);
        setReply('');
    };

    return (
        <DashboardLayout>
            <div className="flex flex-col md:flex-row h-full bg-background-light dark:bg-background-dark rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
                <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 border-b md:border-r border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold p-4 bg-gradient-light dark:bg-gradient-dark text-white" data-aos="fade-right">Xabarlar</h2>
                    <div className="overflow-y-auto h-[calc(100vh-14rem)] md:h-[calc(100vh-10rem)]">
                        {loading ? (
                            Array(5).fill().map((_, index) => <MessageSkeleton key={index} />)
                        ) : (
                            messages.map((message, index) => (
                                <div 
                                    key={message.id} 
                                    className={`p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out ${message.unread ? 'bg-indigo-50 dark:bg-indigo-900' : ''} ${selectedMessage?.id === message.id ? 'bg-indigo-100 dark:bg-indigo-800' : ''}`}
                                    onClick={() => handleMessageClick(message)}
                                    data-aos="fade-right"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="flex items-center">
                                        {message.unread ? <FaEnvelope className="text-primary-light dark:text-primary-dark mr-2" /> : <FaEnvelopeOpen className="text-gray-500 dark:text-gray-400 mr-2" />}
                                        <div>
                                            <div className="font-semibold text-text-light dark:text-text-dark">{message.sender}</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">{message.subject}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 p-6">
                    {loading ? (
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                        </div>
                    ) : selectedMessage ? (
                        <>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6" data-aos="fade-left">
                                <h3 className="text-2xl font-bold mb-2 text-primary-light dark:text-primary-dark">{selectedMessage.subject}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{`Kimdan: ${selectedMessage.sender}`}</p>
                                <p className="text-text-light dark:text-text-dark mb-6 leading-relaxed">{selectedMessage.content}</p>
                            </div>
                            <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
                                <h4 className="text-xl font-semibold mb-4 text-primary-light dark:text-primary-dark">Javob yozish</h4>
                                <textarea 
                                    className="w-full p-3 border border-indigo-200 dark:border-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition duration-200 bg-white dark:bg-gray-700 text-text-light dark:text-text-dark"
                                    rows="4"
                                    value={reply}
                                    onChange={(e) => setReply(e.target.value)}
                                    placeholder="Javobingizni yozing..."
                                ></textarea>
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