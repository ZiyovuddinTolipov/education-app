/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MdSave, MdCancel, MdAdd, MdDelete } from 'react-icons/md';
import ConfirmModal from './ConfirmModal';

const ProfileForm = ({ user, onInputChange, onSubmit, onCancel }) => {
    const [showPasswordChange, setShowPasswordChange] = useState(false);
    const [error, setError] = useState('');
    const [confirmModal, setConfirmModal] = useState({ isOpen: false, field: '', index: -1 });

    const handleArrayChange = (e, index, field) => {
        const { name, value } = e.target;
        const updatedArray = [...user[field]];
        updatedArray[index] = { ...updatedArray[index], [name]: value };
        onInputChange({ target: { name: field, value: updatedArray } });
    };

    const addArrayItem = (field, emptyItem) => {
        setError('');
        if (Object.values(emptyItem).some(value => value.trim() === '')) {
            setError(`Iltimos, barcha ${field} maydonlarini to'ldiring`);
            return;
        }
        const updatedArray = [...user[field], emptyItem];
        onInputChange({ target: { name: field, value: updatedArray } });
    };

    const openConfirmModal = (field, index) => {
        setConfirmModal({ isOpen: true, field, index });
    };

    const closeConfirmModal = () => {
        setConfirmModal({ isOpen: false, field: '', index: -1 });
    };

    const removeArrayItem = () => {
        const { field, index } = confirmModal;
        const updatedArray = user[field].filter((_, i) => i !== index);
        onInputChange({ target: { name: field, value: updatedArray } });
        closeConfirmModal();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        // Asosiy maydonlarni tekshirish
        const requiredFields = ['name', 'email', 'phone', 'position', 'subject', 'experience'];
        for (let field of requiredFields) {
            if (!user[field] || user[field].trim() === '') {
                setError(`Iltimos, ${field} maydonini to'ldiring`);
                return;
            }
        }
        // Array maydonlarni tekshirish
        const arrayFields = ['education', 'publications', 'courses', 'skills', 'languages', 'awards', 'projects'];
        for (let field of arrayFields) {
            if (user[field].length === 0) {
                setError(`Iltimos, kamida bitta ${field} qo'shing`);
                return;
            }
            for (let item of user[field]) {
                if (Object.values(item).some(value => value.trim() === '')) {
                    setError(`Iltimos, barcha ${field} maydonlarini to'ldiring`);
                    return;
                }
            }
        }
        onSubmit(e);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && <p className="text-red-500">{error}</p>}
            <div className="space-y-4">
                <input 
                    type="text" 
                    name="name" 
                    value={user.name} 
                    onChange={onInputChange} 
                    placeholder="Ism"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    value={user.email} 
                    onChange={onInputChange} 
                    placeholder="Email"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                />
                <input 
                    type="tel" 
                    name="phone" 
                    value={user.phone} 
                    onChange={onInputChange} 
                    placeholder="Telefon"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                />
                <input 
                    type="text" 
                    name="position" 
                    value={user.position} 
                    onChange={onInputChange} 
                    placeholder="Lavozim"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                />
                <input 
                    type="text" 
                    name="subject" 
                    value={user.subject} 
                    onChange={onInputChange} 
                    placeholder="Fan"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                />
                <input 
                    type="text" 
                    name="experience" 
                    value={user.experience} 
                    onChange={onInputChange} 
                    placeholder="Tajriba"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                />
                <textarea 
                    name="bio" 
                    value={user.bio} 
                    onChange={onInputChange} 
                    placeholder="Bio"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Ta'lim</h3>
                {user.education.map((edu, index) => (
                    <div key={index} className="space-y-2 mb-4">
                        <input 
                            type="text" 
                            name="degree" 
                            value={edu.degree} 
                            onChange={(e) => handleArrayChange(e, index, 'education')} 
                            placeholder="Daraja"
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                        <input 
                            type="text" 
                            name="field" 
                            value={edu.field} 
                            onChange={(e) => handleArrayChange(e, index, 'education')} 
                            placeholder="Soha"
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                        <input 
                            type="text" 
                            name="institution" 
                            value={edu.institution} 
                            onChange={(e) => handleArrayChange(e, index, 'education')} 
                            placeholder="Muassasa"
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                        <input 
                            type="text" 
                            name="year" 
                            value={edu.year} 
                            onChange={(e) => handleArrayChange(e, index, 'education')} 
                            placeholder="Yil"
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                        <button 
                            type="button" 
                            onClick={() => openConfirmModal('education', index)} 
                            className="text-red-500"
                        >
                            <MdDelete /> O'chirish
                        </button>
                    </div>
                ))}
                <button 
                    type="button" 
                    onClick={() => addArrayItem('education', { degree: '', field: '', institution: '', year: '' })} 
                    className="text-blue-500"
                >
                    <MdAdd /> Ta'lim qo'shish
                </button>
            </div>

            {/* Nashrlar, kurslar, ko'nikmalar, tillar, mukofotlar va loyihalar uchun ham shunga o'xshash seksiyalar qo'shish mumkin */}

            <div>
                <button 
                    type="button" 
                    onClick={() => setShowPasswordChange(!showPasswordChange)} 
                    className="text-blue-500"
                >
                    Parolni o'zgartirish
                </button>
                {showPasswordChange && (
                    <input 
                        type="password" 
                        name="newPassword" 
                        onChange={onInputChange} 
                        placeholder="Yangi parol" 
                        className="w-full p-2 border rounded mt-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                )}
            </div>

            <div className="flex space-x-2">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <MdSave className="inline mr-1" /> Saqlash
                </button>
                <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
                    <MdCancel className="inline mr-1" /> Bekor qilish
                </button>
            </div>

            <ConfirmModal 
                isOpen={confirmModal.isOpen}
                onClose={closeConfirmModal}
                onConfirm={removeArrayItem}
                message="Haqiqatan ham bu ma'lumotni o'chirmoqchimisiz?"
            />
        </form>
    );
};

export default ProfileForm;
