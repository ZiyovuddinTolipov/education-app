import { useParams, Link } from 'react-router-dom';
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
                <div className="mb-4">
                    <video controls className="w-full">
                        <source src={video.url} type="video/mp4" />
                        Sizning brauzeringiz video formatini qo&apos;llab-quvvatlamaydi.
                    </video>
                </div>
                {video.quizAvailable ? (
                    <Link to={`/student/video-lessons/${video.id}/quiz`} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Testni ishlash
                    </Link>
                ) : (
                    <p className="text-red-500">Bu dars uchun test mavjud emas. Keyingi darsga o&apos;ting.</p>
                )}
            </div>
        </DashboardLayout>
    );
};

export default VideoLessonDetail;