import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router'dan useNavigate ni import qilish
import DashboardLayout from '@/layouts/common/DashboardLayout';

const sections = [
    { id: 1, name: 'Frontend Darslar' },
    { id: 2, name: 'Backend Darslar' },
];

const sampleLessons = {
    1: [
        { id: 1, title: 'React Asoslari', description: 'React bilan birinchi ilovangizni yarating.' },
        { id: 2, title: 'CSS Dizayni', description: 'Web sahifalarini chiroyli qilish uchun CSS.' },
    ],
    2: [
        { id: 3, title: 'Node.js Backend', description: 'Node.js yordamida server dasturlash.' },
        { id: 4, title: 'Express.js Asoslari', description: 'Express.js bilan web ilovalar yaratish.' },
    ],
};

const VideoLessonsDashboard = () => {
    const [selectedSection, setSelectedSection] = useState(sections[0].id); // Tanlangan bo&apos;lim
    const navigate = useNavigate(); // useNavigate hook'ini chaqirish

    const addLesson = () => {
        // Yangi dars qo&apos;shish funksiyasi
    };

    const deleteLesson = (id) => {
        // Darsni o&apos;chirish funksiyasi
        let deleteConfirm = confirm("Ushbu darslar toplamini o'chirasizmi ?")
        if(deleteConfirm){
            delete sampleLessons.id==id
        }
    };

    const goToLesson = (sectionName, lessonId) => {
        navigate(`/admin/video-lessons/${sectionName}/${lessonId}`); // Sahifaga o'tish
    };

    return (
        <DashboardLayout>
            <div className={`p-4 dark:bg-background-dark dark:text-text-dark bg-background-light text-text-light`}>
                <h1 className="text-2xl font-bold mb-4">Video Darslarni Boshqarish</h1>
                <div className='flex justify-between items-center'>
                    <div className="mb-4 flex items-center gap-x-2">
                        {sections.map(section => (
                            <button
                                key={section.id}
                                onClick={() => setSelectedSection(section.id)}
                                className={`px-4 py-2 rounded ${selectedSection === section.id ? 'bg-primary-light text-white' : 'bg-gray-200'}`}
                            >
                                {section.name}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={addLesson}
                        className="bg-primary-light text-white px-4 py-2 rounded mb-4"
                    >
                        Yangi Dars Qo&apos;shish
                    </button>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {sampleLessons[selectedSection].map(lesson => (
                        <div key={lesson.id} className={`border p-4 rounded dark:bg-surface-dark dark:text-text-dark bg-surface-light text-text-light'}`}>
                            <h2 className="font-semibold">{lesson.title}</h2>
                            <p className="text-gray-600">{lesson.description}</p>
                            <button
                                onClick={() => goToLesson(selectedSection === 1 ? 'frontend' : 'backend', lesson.id)} // Sahifaga o'tish
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                            >
                                Darsni Ko&apos;rsatish
                            </button>
                            <button
                                onClick={() => deleteLesson(lesson.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                O&apos;chirish
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}

export default VideoLessonsDashboard;
