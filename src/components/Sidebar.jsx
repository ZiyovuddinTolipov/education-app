/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdSchool, MdAssignment, MdQuiz, MdTopic, MdPerson, MdMenu, MdClose, MdMessage } from 'react-icons/md';

const Sidebar = ({ isOpen, toggleSidebar, isDarkMode }) => {
    const location = useLocation();

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className={`hidden sm:block bg-white dark:bg-card-dark text-text-light dark:text-text-dark h-screen fixed left-0 top-0 overflow-y-auto z-20 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
                <div className="p-4 flex justify-between items-center bg-primary-light dark:bg-primary-dark">
                    <h2 className={`text-2xl font-bold text-white ${isOpen ? 'block' : 'hidden'}`}>EDU CRM</h2>
                    <button onClick={toggleSidebar} className="text-white">
                        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>
                </div>
                <nav className="mt-8">
                    <ul>
                        <SidebarItem to="/dashboard" icon={MdDashboard} text="Dashboard" isOpen={isOpen} isDarkMode={isDarkMode} isActive={location.pathname === '/dashboard'} />
                        <SidebarItem to="/messages" icon={MdMessage} text="Xabarlar" isOpen={isOpen} isDarkMode={isDarkMode} isActive={location.pathname === '/messages'} />
                        <SidebarItem to="/teacher/grading" icon={MdSchool} text="Baholash" isOpen={isOpen} isDarkMode={isDarkMode} isActive={location.pathname === '/teacher/grading'} />
                        <SidebarItem to="/teacher/lab" icon={MdAssignment} text="Laboratoriya" isOpen={isOpen} isDarkMode={isDarkMode} isActive={location.pathname === '/teacher/lab'} />
                        <SidebarItem to="/teacher/test" icon={MdQuiz} text="Test yuklash" isOpen={isOpen} isDarkMode={isDarkMode} isActive={location.pathname === '/teacher/test'} />
                        <SidebarItem to="/teacher/topic" icon={MdTopic} text="Mavzu yaratish" isOpen={isOpen} isDarkMode={isDarkMode} isActive={location.pathname === '/teacher/topic'} />
                        <SidebarItem to="/profile" icon={MdPerson} text="Profil" isOpen={isOpen} isDarkMode={isDarkMode} isActive={location.pathname === '/profile'} />
                    </ul>
                </nav>
            </aside>

            {/* Mobile Bottom Menu */}
            <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white z-50">
                <ul className="flex justify-around items-center h-16">
                    <MobileMenuItem to="/dashboard" icon={MdDashboard} text="Dashboard" isDarkMode={isDarkMode} isActive={location.pathname === '/dashboard'} />
                    <MobileMenuItem to="/messages" icon={MdMessage} text="Xabarlar" isDarkMode={isDarkMode} isActive={location.pathname === '/messages'} />
                    <MobileMenuItem to="/teacher/grading" icon={MdSchool} text="Baholash" isDarkMode={isDarkMode} isActive={location.pathname === '/teacher/grading'} />
                    <MobileMenuItem to="/profile" icon={MdPerson} text="Profil" isDarkMode={isDarkMode} isActive={location.pathname === '/profile'} />
                </ul>
            </nav>
        </>
    );
};

const SidebarItem = ({ to, icon: Icon, text, isOpen, isDarkMode, isActive }) => (
    <li className="mb-4">
        <Link 
            to={to} 
            className={`flex items-center p-2 rounded ${isActive 
                ? 'bg-primary-light dark:bg-primary-dark text-white' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'} ${isOpen ? '' : 'justify-center'}`}
        >
            <Icon size={20} className={isActive ? 'text-white' : (isDarkMode ? 'text-gray-300' : 'text-gray-600')} />
            {isOpen && <span className="ml-2">{text}</span>}
        </Link>
    </li>
);

const MobileMenuItem = ({ to, icon: Icon, text, isDarkMode, isActive }) => (
    <li>
        <Link 
            to={to} 
            className={`flex flex-col items-center ${isActive ? 'text-primary-light dark:text-primary-dark' : 'text-text-light dark:text-text-dark'}`}
        >
            <Icon size={24} className={isActive ? 'text-primary-light dark:text-primary-dark' : (isDarkMode ? 'text-gray-300' : 'text-gray-600')} />
            <span className="text-xs">{text}</span>
        </Link>
    </li>
);

export default Sidebar;
