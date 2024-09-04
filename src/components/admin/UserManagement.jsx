import  { useState } from 'react';
import { FaPlus, FaTrash, FaEdit, FaUser, FaGraduationCap, FaUserShield } from 'react-icons/fa';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', role: '', email: '' });

    const addUser = () => {
        setUsers([...users, { ...newUser, id: Date.now() }]);
        setNewUser({ name: '', role: '', email: '' });
    };

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const getRoleIcon = (role) => {
        switch(role) {
            case 'student': return <FaUser className="text-blue-500" />;
            case 'teacher': return <FaGraduationCap className="text-green-500" />;
            case 'admin': return <FaUserShield className="text-red-500" />;
            default: return <FaUser className="text-gray-500" />;
        }
    };

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Foydalanuvchilarni boshqarish</h1>
            <div className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Yangi foydalanuvchi qo&apos;shish</h2>
                <div className="flex flex-wrap gap-4">
                    <input
                        type="text"
                        placeholder="Ism"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        className="p-2 border rounded flex-grow dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        className="p-2 border rounded flex-grow dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                    <select
                        value={newUser.role}
                        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                        className="p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    >
                        <option value="">Rolni tanlang</option>
                        <option value="student">O&apos;quvchi</option>
                        <option value="teacher">O&apos;qituvchi</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button onClick={addUser} className="p-2 bg-blue-500 text-white rounded flex items-center hover:bg-blue-600">
                        <FaPlus className="mr-2" /> Qo&apos;shish
                    </button>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Mavjud foydalanuvchilar</h2>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {users.map(user => (
                        <li key={user.id} className="py-4 flex justify-between items-center">
                            <div className="flex items-center">
                                {getRoleIcon(user.role)}
                                <div className="ml-3">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{user.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
                                </div>
                            </div>
                            <div>
                                <button className="p-2 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600">
                                    <FaEdit />
                                </button>
                                <button onClick={() => deleteUser(user.id)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                                    <FaTrash />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserManagement;