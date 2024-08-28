/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { MdDashboard, MdSchool, MdAssignment, MdQuiz, MdTopic, MdPerson, MdMenu, MdClose } from 'react-icons/md';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            {/* Desktop Sidebar */}
            <aside className={`hidden sm:block bg-gray-800 text-white h-screen fixed left-0 top-0 overflow-y-auto z-20 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
                <div className="p-4 flex justify-between items-center">
                    <h2 className={`text-2xl font-bold ${isOpen ? 'block' : 'hidden'}`}>EDU CRM</h2>
                    <button onClick={toggleSidebar} className="text-white">
                        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>
                </div>
                <nav className="mt-8">
                    <ul>
                        <SidebarItem to="/dashboard" icon={MdDashboard} text="Dashboard" isOpen={isOpen} />
                        <SidebarItem to="/teacher/grading" icon={MdSchool} text="Baholash" isOpen={isOpen} />
                        <SidebarItem to="/teacher/lab" icon={MdAssignment} text="Laboratoriya" isOpen={isOpen} />
                        <SidebarItem to="/teacher/test" icon={MdQuiz} text="Test yuklash" isOpen={isOpen} />
                        <SidebarItem to="/teacher/topic" icon={MdTopic} text="Mavzu yaratish" isOpen={isOpen} />
                        <SidebarItem to="/profile" icon={MdPerson} text="Profil" isOpen={isOpen} />
                    </ul>
                </nav>
            </aside>

            {/* Mobile Bottom Menu */}
            <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white z-50">
                <ul className="flex justify-around items-center h-16">
                    <MobileMenuItem to="/dashboard" icon={MdDashboard} text="Dashboard" />
                    <MobileMenuItem to="/teacher/grading" icon={MdSchool} text="Baholash" />
                    <MobileMenuItem to="/teacher/lab" icon={MdAssignment} text="Laboratoriya" />
                    <MobileMenuItem to="/profile" icon={MdPerson} text="Profil" />
                </ul>
            </nav>
        </>
    );
};

const SidebarItem = ({ to, icon: Icon, text, isOpen }) => (
    <li className="mb-4">
        <Link to={to} className={`flex items-center p-2 hover:bg-gray-700 rounded ${isOpen ? '' : 'justify-center'}`}>
            <Icon size={20} />
            {isOpen && <span className="ml-2">{text}</span>}
        </Link>
    </li>
);

const MobileMenuItem = ({ to, icon: Icon, text }) => (
    <li>
        <Link to={to} className="flex flex-col items-center">
            <Icon size={24} />
            <span className="text-xs">{text}</span>
        </Link>
    </li>
);

export default Sidebar;
