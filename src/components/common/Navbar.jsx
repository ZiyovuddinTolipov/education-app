import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdNotifications, MdLightMode, MdDarkMode, MdPerson, MdSearch } from 'react-icons/md';
import { useTheme } from '@/context/ThemeProvider';

const Navbar = ({maxWidth}) => {
    const [unreadMessages] = useState(3);
    const { theme, toggleTheme } = useTheme();
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const navigate = useNavigate();


    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen((prev) => !prev);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };
    return (
        <header className={`bg-white dark:bg-black shadow-sm sticky w-full top-0 right-0 l-0 z-50 border-b border-gray-500`}>
            <div className={`max-w-full mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center`}>
                <div className="flex items-center">
                    <Link to='/' className="text-2xl font-semibold text-[#6C5DD3] dark:text-white mr-8">AAA</Link>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 rounded-full bg-[#F7F7FA] dark:bg-[#2B2B40] text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]"
                        />
                        <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/messages" className="relative">
                        <MdNotifications size={24} className="text-text-light dark:text-text-dark" />
                        {unreadMessages > 0 && (
                            <span className="absolute -top-1 -right-1 bg-accent-light dark:bg-accent-dark text-text-light dark:text-text-dark text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {unreadMessages}
                            </span>
                        )}
                    </Link>
                    <button onClick={toggleTheme} className="text-text-light dark:text-text-dark">
                        {theme === 'dark' ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
                    </button>
                    <div className="relative">
                        <button onClick={toggleProfileDropdown} className="text-text-light dark:text-text-dark">
                            <MdPerson size={24} />
                        </button>
                        {isProfileDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2">
                                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    Profilni tahrirlash
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Profildan chiqish
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar