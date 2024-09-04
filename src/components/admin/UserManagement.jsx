import { useState, useEffect } from 'react';
import { FaPlus, FaTrash, FaEdit, FaUser, FaGraduationCap, FaUserShield, FaCircle, FaSearch } from 'react-icons/fa';
import DashboardLayout from '@/layouts/common/DashboardLayout';
import Modal from '@/components/admin/AddUserModal';
import { usersData } from '@/data/data';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filterRole, setFilterRole] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setUsers(usersData);
        setFilteredUsers(usersData);
    }, []);

    const addUser = () => {
        const updatedUsers = [...users, { ...newUser, id: Date.now(), lastActive: new Date().toISOString(), isOnline: true }];
        setUsers(updatedUsers);
        applyFilters(updatedUsers);
        setNewUser({ name: '', email: '', role: '' });
        setIsModalOpen(false);
    };

    const deleteUser = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        applyFilters(updatedUsers);
    };

    const applyFilters = (userList = users) => {
        let result = userList;
        if (filterRole) {
            result = result.filter(user => user.role === filterRole);
        }
        if (searchTerm) {
            result = result.filter(user => 
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredUsers(result);
    };

    const handleRoleFilter = (role) => {
        setFilterRole(role);
        applyFilters(users.filter(user => role === '' || user.role === role));
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        applyFilters(users.filter(user => 
            user.name.toLowerCase().includes(term.toLowerCase()) ||
            user.email.toLowerCase().includes(term.toLowerCase())
        ));
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
        <DashboardLayout>
            <div className="p-4 sm:p-6 bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-0">Foydalanuvchilarni boshqarish</h1>
                    <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center justify-center"
                    >
                        <FaPlus className="mr-2" /> Yangi foydalanuvchi
                    </button>
                </div>
                <div className="mb-4 flex flex-col sm:flex-row items-center">
                    <div className="w-full sm:w-1/3 mb-2 sm:mb-0 sm:mr-2">
                        <select 
                            value={filterRole} 
                            onChange={(e) => handleRoleFilter(e.target.value)}
                            className="p-2 rounded border w-full"
                        >
                            <option value="">Barchasi</option>
                            <option value="student">O&apos;quvchi</option>
                            <option value="teacher">O&apos;qituvchi</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="w-full sm:w-2/3 relative">
                        <input
                            type="text"
                            placeholder="Qidirish..."
                            value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="p-2 pl-8 rounded border w-full"
                        />
                        <FaSearch className="absolute left-2 top-3 text-gray-400" />
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md overflow-x-auto">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Mavjud foydalanuvchilar</h2>
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ism</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">Email</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Rol</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">Status</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">So&apos;nggi faollik</th>
                                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amallar</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {filteredUsers.map(user => (
                                <tr key={user.id}>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            {getRoleIcon(user.role)}
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                                        <div className="text-sm text-gray-500 dark:text-gray-300">{user.email}</div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                                        <div className="flex items-center">
                                            <FaCircle className={`mr-2 ${user.isOnline ? 'text-green-500' : 'text-red-500'}`} />
                                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                                {user.isOnline ? 'Online' : 'Offline'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 hidden sm:table-cell">
                                        {new Date(user.lastActive).toLocaleString()}
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-600 mr-2">
                                            <FaEdit />
                                        </button>
                                        <button onClick={() => deleteUser(user.id)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-600">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4">Yangi foydalanuvchi qo&apos;shish</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                        Ism
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="role">
                        Rol
                    </label>
                    <select
                        id="role"
                        value={newUser.role}
                        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Rolni tanlang</option>
                        <option value="student">O&apos;quvchi</option>
                        <option value="teacher">O&apos;qituvchi</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button
                    onClick={addUser}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Qo&apos;shish
                </button>
            </Modal>
        </DashboardLayout>
    );
};

export default UserManagement;