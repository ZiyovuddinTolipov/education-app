import { useParams } from 'react-router-dom';
import DashboardLayout from '@/layouts/common/DashboardLayout';
import { videoLessonsData } from '@/data/data'; // Video darslar ma'lumotlarini import qilish

const VideoLessonDetail = () => {
    const { id } = useParams();
    const video = videoLessonsData.find(v => v.id === parseInt(id));

    if (!video) {
        return <div>Video dars topilmadi.</div>;
    }

    return (
        <DashboardLayout>
            <div className="p-6 bg-background-light dark:bg-background-dark">
                <h1 className="text-3xl font-bold mb-4 text-text-light dark:text-text-dark">{video.title}</h1>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{video.description}</p>
                {/* Video o'ynatish va testni ko'rsatish */}
            </div>
        </DashboardLayout>
    );
};

export default VideoLessonDetail;