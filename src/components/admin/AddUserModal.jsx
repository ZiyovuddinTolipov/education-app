/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ApiService from '@/services/ApiService';
import toast from 'react-hot-toast';

const AddUserModal = ({ isOpen, onClose }) => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        full_name: '',
        status: 'Admin' // Default status, can be changed
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ApiService.createUser(userData);
            console.log(response); // Log response for debugging purposes
            toast.success('Foydalanuvchi muvaffaqiyatli yaratildi!');
            setUserData({
                username: '',
                password: '',
                full_name: '',
                status: 'Admin' // Reset form fields
            })
            onClose(); // Close modal after successful creation
            // Reset form or perform any additional actions
        } catch (error) {
            toast.error('Foydalanuvchi yaratishda xatolik yuz berdi');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="relative bg-white dark:bg-gray-800 w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg">
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Yangi foydalanuvchi qo&apos;shish
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={userData.username}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="full_name"
                        placeholder="Full Name"
                        value={userData.full_name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <select
                        name="status"
                        value={userData.status}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="Admin">Admin</option>
                        <option value="Teacher">O'qituvchi</option>
                        <option value="Student">Talaba</option>
                    </select>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Foydalanuvchi qo'shish
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddUserModal;