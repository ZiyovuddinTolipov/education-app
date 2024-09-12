import { useState } from 'react';
import { FaSave, FaUserCircle } from 'react-icons/fa';
import DashboardLayout from '@/layouts/common/DashboardLayout';

const TeacherProfile = () => {
    const [profile, setProfile] = useState({
        name: 'Abdulla Qodirov',
        email: 'abdulla.qodirov@example.com',
        subject: 'Matematika',
        bio: 'Matematika fani o\'qituvchisi, 10 yillik tajribaga ega.',
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profil yangilandi:', profile);
    };

    return (
        <DashboardLayout>
            <div className="p-6 bg-background-light dark:bg-background-dark">
                <h1 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">O&apos;qituvchi profili</h1>
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center mb-6">
                        <FaUserCircle className="text-8xl text-primary-light dark:text-primary-dark" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-text-light dark:text-text-dark text-sm font-bold mb-2" htmlFor="name">
                                Ism
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text-dark dark:bg-surface-dark dark:border-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-text-light dark:text-text-dark text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text-dark dark:bg-surface-dark dark:border-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-text-light dark:text-text-dark text-sm font-bold mb-2" htmlFor="subject">
                                Fan
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={profile.subject}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text-dark dark:bg-surface-dark dark:border-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-text-light dark:text-text-dark text-sm font-bold mb-2" htmlFor="bio">
                                Biografiya
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                value={profile.bio}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text-dark dark:bg-surface-dark dark:border-gray-600 leading-tight focus:outline-none focus:shadow-outline h-32"
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-primary-light dark:bg-primary-dark hover:bg-primary-dark dark:hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
                            <FaSave className="mr-2" /> Saqlash
                        </button>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default TeacherProfile;