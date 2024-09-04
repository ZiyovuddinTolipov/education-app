/* eslint-disable react/prop-types */
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="relative bg-white dark:bg-gray-800 w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg">
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {/* Modal sarlavhasi uchun joy */}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;