
import { Link } from 'react-router-dom';
import DashboardLayout from '@/layouts/common/DashboardLayout';
import { MdPlayCircleOutline } from 'react-icons/md';
import { videoLessonsData } from '@/data/data'; // Video darslar ma'lumotlarini import qilish

const VideoLessons = () => {
    return (
        <DashboardLayout>
            <div className="p-6 bg-background-light dark:bg-background-dark">
                <h1 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark">Video Darslar</h1>
                <ul className="space-y-4">
                    {videoLessonsData.map(video => (
                        <li key={video.id} className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105">
                            <MdPlayCircleOutline className="text-gray-600 dark:text-gray-300 mr-4" />
                            <Link to={video.url} className="text-lg font-semibold text-text-light dark:text-text-dark">{video.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </DashboardLayout>
    );
};

export default VideoLessons;